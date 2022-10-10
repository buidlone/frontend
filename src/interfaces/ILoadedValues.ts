export type Milestone = {
  id: number;
  startDate: string;
  endDate: string;
  paid: boolean;
  totalMilestoneTokenAllocation?: number;
  seedAmount: number;
  seedAmountPaid: boolean;
  streamOngoing: boolean;
};

export type SoftCap = {
  amount: number | null;
  isReached: boolean | null;
};

export type Currency = {
  value: string;
  label: string;
  address: string;
  decimals: number;
}

export interface ILoadedValues {
  softCap: SoftCap | null;
  hardCap: number;
  totalInvested: number;
  fundraisingStartDate: string | null;
  fundraisingEndDate: string | null;
  milestones: Milestone[];
  projectState: number;
  currency: Currency;
  
}
