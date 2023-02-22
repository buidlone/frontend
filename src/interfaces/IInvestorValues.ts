import { ApolloQueryResult } from "@apollo/client";
import { Dispatch, SetStateAction } from "react";

export type SingleInvestments = {
  investedAmount: string;
  transactionHash: string;
};

export type ProjectInvestments = {
  id: string;
  allocatedProjectTokens: string;
  totalInvestedAmount: string;
  claimedProjectTokens: string;
  singleInvestments: SingleInvestments[];
  investmentFlowrates: string[];
  investmentUsed: string[];
  votingPower: number;
  unusedActiveVotes: string[];
};

export interface IInvestorValues {
  id?: string | undefined;
  projectInvestments?: ProjectInvestments | undefined;
}

export type InvestorHookData = {
  investorValues: IInvestorValues;
  refetch?: (
    variables?: Partial<{
      id: string | undefined;
      project: string;
    }>
  ) => Promise<ApolloQueryResult<any>>;
  setInvestorValues?: Dispatch<SetStateAction<IInvestorValues>>;
};
