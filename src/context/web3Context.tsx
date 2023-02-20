import React, { createContext } from "react";
import { useWeb3Auth } from "../hooks/useWeb3Auth";
import { IWeb3Auth } from "../interfaces/IWeb3Auth";

const web3AuthInitialState: IWeb3Auth = {
  address: null,
  chainId: null,
  web3auth: null,
  provider: null,
  web3Provider: null,
  login: null,
  logout: null,
};

const Web3Context = createContext<IWeb3Auth>(web3AuthInitialState);

interface Props {
  children: React.ReactNode;
}

export function Web3AuthContextProvider({ children }: Props) {
  const web3ProviderState = useWeb3Auth();

  return (
    <Web3Context.Provider value={web3ProviderState}>
      {children}
    </Web3Context.Provider>
  );
}

export default Web3Context;
