import { BigNumber } from "ethers";
import { IInvestor } from "./IInvestors";

export type Milestone = {
  milestoneId: number;
  startTime: string;
  endTime: string;
  isStreamOngoing: boolean;
  isSeedAllocationPaid: boolean;
  fundsAllocated: IMilestoneFundsAllocated;
};

export type SoftCap = {
  amount: BigNumber;
  isReached: boolean;
};

export type Currency = {
  name: string;
  label: string;
  address: string;
  decimals: number;
};

export type VotingToken = {
  id: string;
  currentSupply?: BigNumber;
  supplyCap: BigNumber;
};

export interface ILoadedValues {
  softCap: SoftCap;
  hardCap: BigNumber;
  totalInvested: BigNumber;
  fundraisingStartDate: string;
  fundraisingEndDate: string;
  milestones: Milestone[];
  currentMilestone: number;
  projectState: number;
  currency: Currency;
  setTotalInvested: React.Dispatch<React.SetStateAction<BigNumber>>;
  percentageDivider: string;
  isMilestoneOngoing: boolean;
  tokensReserved: BigNumber;
  tokenCurrency: Currency;
  fundsUsedByCreator: string;
  softCapMultiplier: BigNumber;
  hardCapMultiplier: BigNumber;
  maximumWeightDivisor: BigNumber;
  votingToken: VotingToken;
  isDataLoaded: boolean;
  totalPercentageAgainst: number;
}

export interface IMilestoneFundsAllocated {
  seedFundsAllocation: string;
  streamFundsAllocation: string;
  totalFundsAllocated: string;
}
