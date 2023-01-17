import { useEffect, useReducer, useCallback } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import {
  Web3ProviderState,
  Web3Action,
  web3InitialState,
  web3Reducer,
} from "../reducers";
import { toast } from "react-toastify";
import { NEXT_PUBLIC_INFURA_ID } from "../constants/contractAddresses";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: NEXT_PUBLIC_INFURA_ID,
    },
  },
};

let web3Modal: Web3Modal | null;
if (typeof window !== "undefined") {
  web3Modal = new Web3Modal({
    //network: 'mainnet', // optional
    cacheProvider: true,
    providerOptions,
  });
}

export const useWeb3 = () => {
  const [state, dispatch] = useReducer(web3Reducer, web3InitialState);
  const { provider, web3Provider, address, network } = state;

  const connect = useCallback(async () => {
    if (web3Modal) {
      try {
        const provider = await web3Modal.connect();

        const web3Provider = new ethers.providers.Web3Provider(provider);

        const signer = web3Provider.getSigner();
        const address = await signer.getAddress();

        const network = await web3Provider.getNetwork();

        toast.success("Connected to Web3");

        dispatch({
          type: "SET_WEB3_PROVIDER",
          provider,
          web3Provider,
          address,
          network,
        } as Web3Action);
      } catch (e) {
        toast.error("Connection error");
        console.log("connect error", e);
        return false;
      }
    } else {
      toast.error("No Web3Modal");
      console.error("No Web3Modal");
      return false;
    }
  }, []);

  const disconnect = useCallback(async () => {
    if (web3Modal) {
      web3Modal.clearCachedProvider();
      if (provider?.disconnect && typeof provider.disconnect === "function") {
        await provider.disconnect();
      }
      toast.error("Disconnected from Web3");
      dispatch({
        type: "RESET_WEB3_PROVIDER",
      } as Web3Action);
    } else {
      toast.error("No Web3Modal");
      console.error("No Web3Modal");
    }
  }, [provider]);

  useEffect(() => {
    if (web3Modal && web3Modal.cachedProvider) {
      connect();
    }
  }, [connect]);

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts: string[]) => {
        toast.info("Changed Web3 Account");
        dispatch({
          type: "SET_ADDRESS",
          address: accounts[0],
        } as Web3Action);
        window.location.reload();
      };

      const handleChainChanged = (_hexChainId: string) => {
        if (typeof window !== "undefined") {
          console.log("switched to chain...", _hexChainId);
          window.location.reload();
          toast.info("Web3 Network Changed");
        } else {
          toast.error("Error occured while changing the network");
          console.log("window is undefined");
        }
      };

      const handleDisconnect = (error: { code: number; message: string }) => {
        console.log("disconnect", error);
        disconnect();
      };

      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);
      provider.on("disconnect", handleDisconnect);

      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged);
          provider.removeListener("chainChanged", handleChainChanged);
          provider.removeListener("disconnect", handleDisconnect);
        }
      };
    }
  }, [provider, disconnect]);

  return {
    provider,
    web3Provider,
    address,
    network,
    connect,
    disconnect,
  } as Web3ProviderState;
};
