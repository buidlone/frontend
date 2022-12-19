import { BigNumber } from "ethers";
import { IInvestor } from "./IInvestors";

export type Milestone = {
  id: number;
  startDate: string;
  endDate: string;
  paid: boolean;
  totalMilestoneTokenAllocation?: number;
  seedAmount: number | string;
  seedAmountPaid: boolean;
  streamOngoing: boolean;
  intervalSeedPortion: BigNumber;
  intervalStreamingPortion: BigNumber;
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
  seedFundingLimit: number; //will be removed
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
  percentageDivider: BigNumber;
  milestonesInvestmentsListForFormula: BigNumber[];
  isMilestoneOngoing: boolean;
  tokensReserved: string;
  tokenCurrency: Currency;
}

export interface IMilestoneFundsAllocated {
  streamAllocated: string;
  seedAllocated: string;
  totalFundsAllocated: string;
}

