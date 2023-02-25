import { Dispatch, SetStateAction } from "react";

export type Milestone = {
  milestoneId: number;
  startTime: string;
  endTime: string;
};

export type SoftCap = {
  amount: number;
  isReached: boolean;
};

export type UserValues = {
  balance: number;
  investment: number;
  reward: number;
  power: number;
};

export interface IMockData {
  softCap: SoftCap;
  hardCap: number;
  totalInvested: number;
  milestones: Milestone[];
  currency: string;
  tokenCurrency: string;
  userValues: UserValues;
  investors: number[];
  maxInvestment: number;
  maxReward: number;
  maxPower: number;
}

export type MockDataContext = {
  mockData: IMockData;
  setMockData: Dispatch<SetStateAction<IMockData>>;
};

export const initialMockData = {
  softCap: {
    amount: 100000,
    isReached: false,
  },
  hardCap: 600000,
  totalInvested: 85000,
  milestones: [
    {
      milestoneId: 0,
      startTime: "2023 02 19 11:05:03",
      endTime: "2023 04 20 12:05:03",
    },
    {
      milestoneId: 1,
      startTime: "2023 04 20 12:05:03",
      endTime: "2023 06 19 12:05:03",
    },
    {
      milestoneId: 2,
      startTime: "2023 06 19 12:05:03",
      endTime: "2023 08 18 12:05:03",
    },
    {
      milestoneId: 3,
      startTime: "2023 08 18 12:05:03",
      endTime: "2023 10 17 12:05:03",
    },
    {
      milestoneId: 4,
      startTime: "2023 10 17 12:05:03",
      endTime: "2023 12 16 11:05:03",
    },
  ],
  maxInvestment: 20000,
  maxReward: 40000,
  maxPower: 15,
  currency: "USDT",
  tokenCurrency: "BDL",
  userValues: {
    balance: 20000,
    investment: 0,
    reward: 0,
    power: 0,
  },
  investors: [
    50, 2500, 6000, 4000, 200, 1500, 9000, 1000, 10000, 1500, 3900, 7860, 1300,
    1111, 980, 9000, 1100, 7860, 1500, 1, 10000, 2000, 1500, 3920, 6000, 400,
    15000, 390, 786, 1300, 1500, 390, 786, 8880, 150,
  ],
};

export const fakeMockData = {
  softCap: {
    amount: 100000,
    isReached: true,
  },
  hardCap: 600000,
  totalInvested: 105000,
  milestones: [
    {
      milestoneId: 0,
      startTime: "2023 02 19 11:05:03",
      endTime: "2023 04 20 12:05:03",
    },
    {
      milestoneId: 1,
      startTime: "2023 04 20 12:05:03",
      endTime: "2023 06 19 12:05:03",
    },
    {
      milestoneId: 2,
      startTime: "2023 06 19 12:05:03",
      endTime: "2023 08 18 12:05:03",
    },
    {
      milestoneId: 3,
      startTime: "2023 08 18 12:05:03",
      endTime: "2023 10 17 12:05:03",
    },
    {
      milestoneId: 4,
      startTime: "2023 10 17 12:05:03",
      endTime: "2023 12 16 11:05:03",
    },
  ],
  maxInvestment: 20000,
  maxReward: 40000,
  maxPower: 15,
  currency: "USDT",
  tokenCurrency: "BDL",
  userValues: {
    balance: 0,
    investment: 20000,
    reward: 40000,
    power: 15,
  },
  investors: [
    50, 2500, 6000, 4000, 200, 1500, 9000, 1000, 10000, 1500, 3900, 7860, 1300,
    1111, 980, 9000, 1100, 7860, 1500, 1, 10000, 2000, 1500, 3920, 6000, 400,
    15000, 390, 786, 1300, 1500, 390, 786, 8880, 150, 20000,
  ],
};
