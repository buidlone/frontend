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
  VotingToken,
} from "../interfaces/ILoadedValues";
import { GET_DYNAMIC_DATA, GET_STATIC_DATA } from "../../lib/queries";
import { useQuery } from "@apollo/client";
import { getProjectStatus } from "../utils/getProjectState";

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
  softCapMultiplier: BigNumber.from(0),
  hardCapMultiplier: BigNumber.from(0),
  maximumWeightDivisor: BigNumber.from(0),
  votingToken: {
    id: "",
    supplyCap: BigNumber.from(0),
  },
  isDataLoaded: false,
  totalPercentageAgainst: 0,
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
  const [votingToken, setVotingToken] = useState<VotingToken>({
    id: "",
    supplyCap: BigNumber.from(0),
  });

  const [isSLoaded, setIsSLoaded] = useState(false);
  const [isDLoaded, setIsDLoaded] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [totalPercentageAgainst, setTotalPercentageAgainst] = useState(0);

  const {
    data,
    error: sError,
    loading: sLoading,
  } = useQuery(GET_STATIC_DATA, {
    variables: {
      id: PROJECT_ID,
    },
  });

  const {
    data: dData,
    error: dError,
    loading: dLoading,
  } = useQuery(GET_DYNAMIC_DATA, {
    variables: {
      id: PROJECT_ID,
    },
    pollInterval: 5000,
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    if (!sLoading && data) {
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
        amount: BigNumber.from(data.project.softCap),
        isReached: data.project.isSoftCapReached,
      });

      setHardCap(BigNumber.from(data.project.hardCap));
      setFundraisingStartDate(formatTime(data.project.fundraiserStartTime));
      setFundraisingEndDate(formatTime(data.project.fundraiserEndTime));
      setSoftCapMultiplier(BigNumber.from(data.project.softCapMultiplier));
      setHardCapMultiplier(BigNumber.from(data.project.hardCapMultiplier));
      setMaximumWeightDivisor(
        BigNumber.from(data.project.maximumWeightDivisor)
      );
      setVotingToken({
        id: data.project.governancePool.votingToken.supplyCap,
        supplyCap: BigNumber.from(
          data.project.governancePool.votingToken.supplyCap
        ),
      });
      const formattedMilestones = data.project.milestones.map(
        (milestone: any) => ({
          milestoneId: milestone.milestoneId,
          startTime: formatTime(milestone.startTime),
          endTime: formatTime(milestone.endTime),
        })
      );
      setMilestones(formattedMilestones);
      setIsSLoaded(true);
    }
  }, [data, sLoading]);

  useEffect(() => {
    if (!dLoading && dData && data) {
      const currentTime = Math.floor(Date.now() / 1000);

      setIsMilestoneOngoing(
        currentTime >= Number(data.project.milestones[0].startTime) &&
          currentTime <=
            Number(
              data.project.milestones[data.project.milestonesCount - 1].endTime
            )
      );

      setSoftCap((prev) => ({
        ...prev,
        isReached: dData.project.isSoftCapReached,
      }));

      setCurrentMilestone(dData.project.currentMilestone.milestoneId);
      setTotalInvested(BigNumber.from(dData.project.totalInvested));
      const pState = getProjectStatus(
        data.project.fundraiserEndTime,
        data.project.fundraiserStartTime,
        dData.project.isSoftCapReached,
        dData.project.isCanceledBeforeFundraiserStart,
        dData.project.isEmergencyTerminated,
        dData.project.didCreatorLockTokens,
        data.project.milestones,
        dData.project.isTerminatedByGelato,
        dData.project.isCanceledDuringMilestones,
        dData.project.currentMilestone,
        data.project.milestonesCount
      );
      setProjectState(pState);

      const formattedMilestones = dData.project.milestones.map(
        (milestone: any) => ({
          milestoneId: milestone.milestoneId,
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

      setMilestones((prevMilestones) =>
        prevMilestones.map((milestone) => {
          const updatedMilestone = formattedMilestones.find(
            (m: Milestone) => m.milestoneId === milestone.milestoneId
          );
          return { ...milestone, ...updatedMilestone };
        })
      );

      setFundsUsedByCreator(
        ethers.utils.formatEther(dData.project.fundsUsedByCreator)
      );
      setTotalPercentageAgainst(
        dData.project.governancePool.totalPercentageAgainst
      );
      setIsDLoaded(true);
    }
  }, [dData, dLoading, data]);

  useEffect(() => {
    if (isSLoaded && isDLoaded) {
      setIsDataLoaded(true);
    }
  }, [isSLoaded, isDLoaded]);

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
    percentageDivider,
    isMilestoneOngoing,
    tokensReserved,
    tokenCurrency,
    fundsUsedByCreator,
    softCapMultiplier,
    hardCapMultiplier,
    maximumWeightDivisor,
    votingToken,
    isDataLoaded,
    totalPercentageAgainst,
  };
};
