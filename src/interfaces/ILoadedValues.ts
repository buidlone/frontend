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
  allInvestors: IInvestor[];
  setAllInvestors: React.Dispatch<React.SetStateAction<IInvestor[]>>;
  percentageDivider: string;
  isMilestoneOngoing: boolean;
  tokensReserved: BigNumber;
  tokenCurrency: Currency;
  fundsUsedByCreator: string;

  softCapMultiplier: BigNumber;
  hardCapMultiplier: BigNumber;
  maximumWeightDivisor: BigNumber;
  supplyCap: BigNumber;
  isDataLoaded: boolean;
}

export interface IMilestoneFundsAllocated {
  seedFundsAllocation: string;
  streamFundsAllocation: string;
  totalFundsAllocated: string;
}
