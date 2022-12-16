import { useEffect, useState } from "react";
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

import ERC20TokenABI from "../web3/abi/ERC20Token.json";
import { IInvestor } from "../interfaces/IInvestors";
import { getAllInvestments } from "../web3/getAllInvestments";

const provider = new ethers.providers.JsonRpcProvider(
  `https://goerli.infura.io/v3/${NEXT_PUBLIC_INFURA_ID}`
);

export const loadedValuesInitialState: ILoadedValues = {
  seedFundingLimit: 0,
  softCap: {
    amount: BigNumber.from(0),
    isReached: false,
  },
  totalInvested: BigNumber.from(0),
  fundraisingStartDate: "",
  fundraisingEndDate: "",
  milestones: [],
  currentMilestone: -1,
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
  percentageDivider: BigNumber.from(0),
  milestonesInvestmentsListForFormula: [],
  tokensReserved: "0",
  tokenCurrency: {
    name: "",
    label: "",
    address: "",
    decimals: 0,
  },
};

export const useLoadValues = () => {
  const [tokensReserved, setTokensReserved] = useState<string>("0");
  const [tokenCurrency, setTokenCurrency] = useState<Currency>({
    name: "",
    label: "",
    address: "",
    decimals: 0,
  });
  const [seedFundingLimit, setSeedFundingLimit] = useState<number>(0);
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
  const [currentMilestone, setCurrentMilestone] = useState<number>(-1);

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
  const [percentageDivider, setPercentageDivider] = useState<BigNumber>(
    BigNumber.from(0)
  );
  const [
    milestonesInvestmentsListForFormula,
    setMilestonesInvestmentListForFormula,
  ] = useState<BigNumber[]>([]);

  const getAvailableCurrencies = async (tokenAddress: string) => {
    if (provider) {
      try {
        const tokenContract = new ethers.Contract(
          tokenAddress,
          ERC20TokenABI,
          provider
        );
        const tokenDecimals = await tokenContract.decimals();
        const tokenSymbol = await tokenContract.symbol();
        const tokenName = await tokenContract.name();
        return { tokenSymbol, tokenDecimals, tokenName };
      } catch (error) {
        console.log(error);
        toast.error(
          "Error occurred while retrieving currency data from blockchain"
        );
      }
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
        const reservedTokenAddress = await distributionContract.getToken();
        const reservedTokenDetails = await getAvailableCurrencies(
          reservedTokenAddress
        );

        setTokenCurrency({
          name: reservedTokenDetails?.tokenName,
          label: reservedTokenDetails?.tokenSymbol,
          address: reservedTokenAddress,
          decimals: reservedTokenDetails?.tokenDecimals,
        });

        const totalInvested = await contract.getTotalInvestedAmount();
        const softCap = await contract.getSoftCap();
        const hardCap = await contract.getHardCap();
        const isSoftCapReached = await contract.isSoftCapReached();
        const fundraisingStartAt = await contract.getFundraiserStartTime();
        const fundraisingStartDate = formatTime(fundraisingStartAt);
        const fundraisingEndAt = await contract.getFundraiserEndTime();
        const fundraisingEndDate = formatTime(fundraisingEndAt);
        const projectState = await contract.getProjectStateByteValue();

        const acceptedTokenAddress = await contract.getAcceptedToken();
        const acceptedTokenDetails = await getAvailableCurrencies(
          acceptedTokenAddress
        );

        setCurrency({
          name: acceptedTokenDetails?.tokenName,
          label: acceptedTokenDetails?.tokenSymbol,
          address: acceptedTokenAddress,
          decimals: acceptedTokenDetails?.tokenDecimals,
        });

        const allInvestors = await getAllInvestments();

        const milestoneCount = (await contract.getMilestonesCount()).toNumber();
        const currentMilestone = (
          await contract.getCurrentMilestoneId()
        ).toNumber();

        const percentageDivider = await contract.getPercentageDivider();
        const milestonesInvestmentsList =
          await contract.getMilestonesInvestmentsListForFormula();
        setMilestonesInvestmentListForFormula(milestonesInvestmentsList);

        setPercentageDivider(percentageDivider);
        setCurrentMilestone(currentMilestone);
        for (let i = 0; i < milestoneCount; i++) {
          let milestone = await contract.getMilestone(i);
          let seedAmount = await contract.getMilestoneSeedAmount(i);

          setMilestones((prevData) => [
            ...prevData,
            {
              id: i,
              startDate: formatTime(milestone?.startDate),
              endDate: formatTime(milestone?.endDate),
              paid: milestone?.paid,
              seedAmount: seedAmount.toNumber(),
              seedAmountPaid: milestone?.seedAmountPaid,
              streamOngoing: milestone?.streamOngoing,
              intervalSeedPortion: milestone?.intervalSeedPortion,
              intervalStreamingPortion: milestone?.intervalStreamingPortion,
            },
          ]);
        }

        setTokensReserved(ethers.utils.formatEther(tokensReserved));
        setTotalInvested(totalInvested);
        setSoftCap({
          amount: softCap,
          isReached: isSoftCapReached,
        });
        setHardCap(hardCap);
        setFundraisingStartDate(fundraisingStartDate);
        setFundraisingEndDate(fundraisingEndDate);

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
  }, []);

  return {
    seedFundingLimit,
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
    tokensReserved,
    tokenCurrency,
  };
};
