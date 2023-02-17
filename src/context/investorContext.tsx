import React, { createContext, useContext } from "react";
import {
  investorValuesInitialState,
  useInvestorValues,
} from "../hooks/useInvestorValues";
import { InvestorHookData } from "../interfaces/IInvestorValues";
import Web3Context from "./web3Context";

const InvestorValuesContext = createContext<InvestorHookData>({
  investorValues: investorValuesInitialState,
});

interface Props {
  children: React.ReactNode;
}

export function InvestorContextProvider({ children }: Props) {
  const { address } = useContext(Web3Context);
  const investorHookData = useInvestorValues(address);

  return (
    <InvestorValuesContext.Provider value={investorHookData}>
      {children}
    </InvestorValuesContext.Provider>
  );
}

export default InvestorValuesContext;
