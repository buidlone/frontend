import { SafeEventEmitterProvider } from "@web3auth/base";
import { Web3Auth } from "@web3auth/modal";
import { ethers } from "ethers";

export interface IWeb3Auth {
  address?: string | null;
  chainId?: number | null;
  web3auth: Web3Auth | null;
  provider?: SafeEventEmitterProvider | null;
  web3Provider?: ethers.providers.Web3Provider | null;
  login: (() => Promise<void | boolean>) | null;
  logout: (() => Promise<void >) | null;
}
