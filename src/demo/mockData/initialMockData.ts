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
  //projectState: number;
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
  //projectState: 4,
  currency: "USDT",
  tokenCurrency: "BDL",
  userValues: {
    balance: 20000,
    investment: 0,
    reward: 0,
    power: 0,
  },
  investors: [
    5, 25, 600, 400, 2, 150, 900, 1000, 10, 1500, 39, 786, 1300, 1111, 98, 900,
    1100, 786, 150, 1, 1000, 2000, 1500, 392, 600, 400, 1500, 39, 786, 1300,
    1500, 39, 786, 888, 150,
  ],
};
