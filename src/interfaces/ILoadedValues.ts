export type Milestone = {
  id: number;
  startDate: string;
  endDate: string;
  paid: boolean;
  totalMilestoneTokenAllocation?: number;
  seedAmount: number | string;
  seedAmountPaid: boolean;
  streamOngoing: boolean;
};

export type SoftCap = {
  amount: number;
  isReached: boolean;
};

export type Currency = {
  value: string;
  label: string;
  address: string;
  decimals: number;
}

export interface ILoadedValues {
  softCap: SoftCap;
  hardCap: number;
  totalInvested: number;
  fundraisingStartDate: string | null;
  fundraisingEndDate: string | null;
  milestones: Milestone[];
  currentMilestone: number;
  projectState: number;
  currency: Currency;
  setTotalInvested: React.Dispatch<React.SetStateAction<number>> | null
  
}
