import { BigNumber } from "ethers";
import { IInvestor } from "./IInvestors";

export type Milestone = {
  milestoneId: number;
  startTime: string;
  endTime: string;
  isStreamOngoing: boolean;
  isSeedAllocationPaid: boolean;
  //paid: boolean;
  //totalMilestoneTokenAllocation?: number;
  //seedAmount: BigNumber;
  //intervalSeedPortion: BigNumber;
  //intervalStreamingPortion: BigNumber;
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
  milestonesInvestmentsListForFormula: BigNumber[];
  isMilestoneOngoing: boolean;
  tokensReserved: string;
  tokenCurrency: Currency;
  fundsUsedByCreator: string;
}

export interface IMilestoneFundsAllocated {
  streamAllocated: string;
  seedAllocated: string;
  totalFundsAllocated: string;
}
