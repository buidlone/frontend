import { useEffect, useRef, useState } from "react";
import { BigNumber, ethers } from "ethers";
import { toast } from "react-toastify";
import {
  DistributionPoolAddress,
  InvestmentPoolAddress,
  NEXT_PUBLIC_INFURA_ID,
} from "../constants/contractAddresses";
import InvestmentPoolABI from "../web3/abi/InvestmentPool.json";
import DistributionPoolABI from "../web3/abi/DistributionPool.json";
import { formatTime } from "../utils/formatTime";
import {
  Currency,
  ILoadedValues,
  Milestone,
  SoftCap,
} from "../interfaces/ILoadedValues";

import { IInvestor } from "../interfaces/IInvestors";
import { getAllInvestments } from "../web3/getAllInvestments";
import client from "../../lib/apolloClient";
import { GET_SUBGRAPH_DATA } from "../../lib/queries";

const provider = new ethers.providers.JsonRpcProvider(
  `https://goerli.infura.io/v3/${NEXT_PUBLIC_INFURA_ID}`
);

export const loadedValuesInitialState: ILoadedValues = {
  softCap: {
    amount: BigNumber.from(0),
    isReached: false,
  },
  totalInvested: BigNumber.from(0),
  fundraisingStartDate: "",
  fundraisingEndDate: "",
  milestones: [],
  currentMilestone: 0,
  hardCap: BigNumber.from(0),
  projectState: 0,
  currency: {
    name: "",
    label: "",
    address: "",
    decimals: 0,
  },
  setTotalInvested: () => {},
  allInvestors: [],
  setAllInvestors: () => {},
  percentageDivider: "0",
  milestonesInvestmentsListForFormula: [],
  isMilestoneOngoing: false,
  tokensReserved: "0",
  tokenCurrency: {
    name: "",
    label: "",
    address: "",
    decimals: 0,
  },
  fundsUsedByCreator: "0",
};

export const useLoadValues = () => {
  const [tokensReserved, setTokensReserved] = useState<string>("0");
  const [tokenCurrency, setTokenCurrency] = useState<Currency>({
    name: "",
    label: "",
    address: "",
    decimals: 0,
  });

  const [softCap, setSoftCap] = useState<SoftCap>({
    amount: BigNumber.from(0),
    isReached: false,
  });
  const [hardCap, setHardCap] = useState<BigNumber>(BigNumber.from(0));
  const [totalInvested, setTotalInvested] = useState<BigNumber>(
    BigNumber.from(0)
  );
  const [fundraisingStartDate, setFundraisingStartDate] = useState<string>("");
  const [fundraisingEndDate, setFundraisingEndDate] = useState<string>("");
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [currentMilestone, setCurrentMilestone] = useState<number>(0);
  const [isMilestoneOngoing, setIsMilestoneOngoing] = useState<boolean>(false);

  const [projectState, setProjectState] = useState<number>(0);
  const [currency, setCurrency] = useState<Currency>({
    name: "",
    label: "",
    address: "",
    decimals: 0,
  });
  const [allInvestors, setAllInvestors] = useState<IInvestor[]>([
    { caller: "", amount: BigNumber.from(0) },
  ]);
  const [percentageDivider, setPercentageDivider] = useState<string>("0");
  const [
    milestonesInvestmentsListForFormula,
    setMilestonesInvestmentListForFormula,
  ] = useState<BigNumber[]>([]);

  const [fundsUsedByCreator, setFundsUsedByCreator] = useState<string>("0");

  const getValuesFromSubgraph = async () => {
    try {
      const { data, error } = await client.query({ query: GET_SUBGRAPH_DATA });
      const modifiedData = data.milestones.map((milestone: any) => {
        const modifiedMilestone = { ...milestone };
        modifiedMilestone.startTime = formatTime(milestone?.startTime);
        modifiedMilestone.endTime = formatTime(milestone?.endTime);
        return modifiedMilestone;
      });
      setMilestones(modifiedData);
      setPercentageDivider(data.projects[0].percentageDivider);
      setCurrency({
        name: data.acceptedSuperTokens[0].name,
        label: data.acceptedSuperTokens[0].symbol,
        address: data.acceptedSuperTokens[0].id,
        decimals: data.acceptedSuperTokens[0].decimals,
      });
      setTokenCurrency({
        name: data.projectTokens[0].name,
        label: data.projectTokens[0].symbol,
        address: data.projectTokens[0].id,
        decimals: data.projectTokens[0].decimals,
      });
    } catch (error) {
      console.log(error);
      toast.error("Error occured while fetching data from the subgraph");
    }
  };

  const getValuesFromInvestmentPool = async () => {
    if (provider) {
      try {
        const contract = new ethers.Contract(
          InvestmentPoolAddress,
          InvestmentPoolABI,
          provider
        );

        const distributionContract = new ethers.Contract(
          DistributionPoolAddress,
          DistributionPoolABI,
          provider
        );

        const tokensReserved = await distributionContract.getLockedTokens();
        const totalInvested = await contract.getTotalInvestedAmount();
        const softCap = await contract.getSoftCap();
        const hardCap = await contract.getHardCap();
        const isSoftCapReached = await contract.isSoftCapReached();
        const fundraisingStartAt = await contract.getFundraiserStartTime();
        const fundraisingStartDate = formatTime(fundraisingStartAt);
        const fundraisingEndAt = await contract.getFundraiserEndTime();
        const fundraisingEndDate = formatTime(fundraisingEndAt);
        const projectState = await contract.getProjectStateByteValue();
        const isMilestoneOngoing = await contract.isAnyMilestoneOngoing();
        const allInvestors = await getAllInvestments();
        const fundsUsedByCreator = await contract.getFundsUsed();
        const currentMilestone = (
          await contract.getCurrentMilestoneId()
        ).toNumber();

        const milestonesInvestmentsList =
          await contract.getMilestonesInvestmentsListForFormula();
        setMilestonesInvestmentListForFormula(milestonesInvestmentsList);

        setCurrentMilestone(currentMilestone);

        setTokensReserved(ethers.utils.formatEther(tokensReserved));
        setTotalInvested(totalInvested);
        setSoftCap({
          amount: softCap,
          isReached: isSoftCapReached,
        });
        setHardCap(hardCap);
        setFundraisingStartDate(fundraisingStartDate);
        setFundraisingEndDate(fundraisingEndDate);
        setIsMilestoneOngoing(isMilestoneOngoing);
        setFundsUsedByCreator(ethers.utils.formatEther(fundsUsedByCreator));

        setProjectState(parseInt(projectState, 10));
        allInvestors !== undefined &&
          setAllInvestors(allInvestors.allInvestments);
      } catch (error) {
        console.log(error);
        toast.error("Error occurred while retrieving data from blockchain");
      }
    }
  };

  useEffect(() => {
    getValuesFromInvestmentPool();
    getValuesFromSubgraph();
  }, []);

  return {
    totalInvested,
    softCap,
    hardCap,
    fundraisingStartDate,
    fundraisingEndDate,
    milestones,
    currentMilestone,
    projectState,
    currency,
    setTotalInvested,
    allInvestors,
    setAllInvestors,
    percentageDivider,
    milestonesInvestmentsListForFormula,
    isMilestoneOngoing,
    tokensReserved,
    tokenCurrency,
    fundsUsedByCreator,
  };
};
