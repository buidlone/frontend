import { useEffect, useState } from "react";
import { BigNumber, ethers } from "ethers";
import { toast } from "react-toastify";
import {
  InvestmentPoolAddress,
  NEXT_PUBLIC_INFURA_ID,
  PROJECT_ID,
} from "../constants/contractAddresses";
import InvestmentPoolABI from "../web3/abi/InvestmentPool.json";
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
import { GET_INITIAL_DATA } from "../../lib/queries";

const provider = new ethers.providers.JsonRpcProvider(
  `https://goerli.infura.io/v3/${NEXT_PUBLIC_INFURA_ID}`
);

export const loadedValuesInitialState: ILoadedValues = {
  softCap: {
    amount: BigNumber.from(0),
    //isReached: false,
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
  isMilestoneOngoing: false,
  tokensReserved: BigNumber.from(0),
  tokenCurrency: {
    name: "",
    label: "",
    address: "",
    decimals: 0,
  },
  fundsUsedByCreator: "0",
  isSoftCapReached: false,
  softCapMultiplier: BigNumber.from(0),
  hardCapMultiplier: BigNumber.from(0),
  maximumWeightDivisor: BigNumber.from(0),
  supplyCap: BigNumber.from(0),
};

export const useLoadValues = () => {
  const [tokensReserved, setTokensReserved] = useState<BigNumber>(
    BigNumber.from(0)
  );
  const [tokenCurrency, setTokenCurrency] = useState<Currency>({
    name: "",
    label: "",
    address: "",
    decimals: 0,
  });

  const [softCap, setSoftCap] = useState<SoftCap>({
    amount: BigNumber.from(0),
    //isReached: false,
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
  const [isSoftCapReached, setIsSoftCapReached] = useState<boolean>(false);

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
  const [fundsUsedByCreator, setFundsUsedByCreator] = useState<string>("0");

  const [softCapMultiplier, setSoftCapMultiplier] = useState<BigNumber>(
    BigNumber.from(0)
  );
  const [hardCapMultiplier, setHardCapMultiplier] = useState<BigNumber>(
    BigNumber.from(0)
  );
  const [maximumWeightDivisor, setMaximumWeightDivisor] = useState<BigNumber>(
    BigNumber.from(0)
  );
  const [supplyCap, setSupplyCap] = useState<BigNumber>(BigNumber.from(0));

  const getValuesFromSubgraph = async () => {
    try {
      const { data, loading, error } = await client.query({
        query: GET_INITIAL_DATA,
        variables: {
          id: PROJECT_ID,
        },
      });
      const formattedMilestones = data.project.milestones.map(
        (milestone: any) => ({
          milestoneId: milestone.milestoneId,
          startTime: formatTime(milestone.startTime),
          endTime: formatTime(milestone.endTime),
          isStreamOngoing: milestone.isStreamOngoing,
          isSeedAllocationPaid: milestone.isSeedAllocationPaid,

          fundsAllocated: {
            seedFundsAllocation: ethers.utils.formatEther(
              milestone.seedFundsAllocation
            ),
            streamFundsAllocation: ethers.utils.formatEther(
              milestone.streamFundsAllocation
            ),
            totalFundsAllocated: ethers.utils.formatEther(
              BigNumber.from(milestone.seedFundsAllocation).add(
                BigNumber.from(milestone.streamFundsAllocation)
              )
            ),
          },
        })
      );
      setMilestones(formattedMilestones);
      setCurrentMilestone(data.project.currentMilestone.milestoneId);
      setPercentageDivider(data.project.percentageDivider);
      setTokensReserved(
        BigNumber.from(data.project.distributionPool.lockedTokensForRewards)
      );
      setCurrency({
        name: data.project.acceptedToken.name,
        label: data.project.acceptedToken.symbol,
        address: data.project.acceptedToken.id,
        decimals: data.project.acceptedToken.decimals,
      });
      setTokenCurrency({
        name: data.project.distributionPool.projectToken.name,
        label: data.project.distributionPool.projectToken.symbol,
        address: data.project.distributionPool.projectToken.id,
        decimals: data.project.distributionPool.projectToken.decimals,
      });

      setSoftCap({
        ...softCap,
        amount: BigNumber.from(data.project.softCap),
      });
      setTotalInvested(BigNumber.from(data.project.totalInvested));
      setHardCap(BigNumber.from(data.project.hardCap));
      setFundraisingStartDate(formatTime(data.project.fundraiserStartTime));
      setFundraisingEndDate(formatTime(data.project.fundraiserEndTime));
      setSoftCapMultiplier(BigNumber.from(data.project.softCapMultiplier));
      setHardCapMultiplier(BigNumber.from(data.project.hardCapMultiplier));
      setMaximumWeightDivisor(
        BigNumber.from(data.project.maximumWeightDivisor)
      );
      setSupplyCap(
        BigNumber.from(data.project.governancePool.votingToken.supplyCap)
      );
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
        const isSoftCapReached = await contract.isSoftCapReached();
        const projectState = await contract.getProjectStateByteValue();
        const isMilestoneOngoing = await contract.isAnyMilestoneOngoing();
        const allInvestors = await getAllInvestments();
        const fundsUsedByCreator = await contract.getFundsUsed();
        setIsSoftCapReached(isSoftCapReached);
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

  // useEffect(() => {
  //   const subscription = client
  //     .subscribe({
  //       query: SUBSCRIBE_TO_UPDATES,
  //       variables: {
  //         id: PROJECT_ID,
  //       },
  //     })
  //     .subscribe({
  //       next: ({ data }) => {
  //         console.log(data);
  //       },
  //     });

  //   return () => subscription.unsubscribe();
  // }, []);

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
    isMilestoneOngoing,
    tokensReserved,
    tokenCurrency,
    fundsUsedByCreator,
    isSoftCapReached,
    softCapMultiplier,
    hardCapMultiplier,
    maximumWeightDivisor,
    supplyCap,
  };
};
