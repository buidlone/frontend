import { useCallback, useEffect, useState } from "react";
import { Web3Auth } from "@web3auth/modal";
import {
  WALLET_ADAPTERS,
  CHAIN_NAMESPACES,
  SafeEventEmitterProvider,
} from "@web3auth/base";
import RPC from "../web3/ethersRPC";
import { NEXT_PUBLIC_INFURA_ID } from "../constants/contractAddresses";
import { subscribeAuthEvents } from "../web3/subscribeAuthEvents";
import { ADAPTER_EVENTS, CONNECTED_EVENT_DATA } from "@web3auth/base";
import { ethers } from "ethers";
import { LOGIN_MODAL_EVENTS } from "@web3auth/ui";

const clientId =
  "BNRwqjC6-H_d1xf64PyLKW7zTtvwca7GT-V4XUDgXBS0X8iyCU8r-y_f_F8MnSKUjyPTQvTzcq0IHdok8j8YU50"; // get from https://dashboard.web3auth.io

export const useWeb3Auth = () => {
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(
    null
  );
  const [web3Provider, setWeb3Provider] =
    useState<ethers.providers.Web3Provider | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [chainId, setChainId] = useState<number | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        const web3auth = new Web3Auth({
          clientId,
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: "0x5",
            rpcTarget: `https://goerli.infura.io/v3/${NEXT_PUBLIC_INFURA_ID}`,
          },
          uiConfig: {
            theme: "dark",
            appLogo: "/_next/static/media/brandmark_blue.d7fc2847.svg",
          },
        });

        subscribeAuthEvents(web3auth);
        setWeb3auth(web3auth);

        await web3auth
          .initModal
          //   {
          //   modalConfig: {
          //     [WALLET_ADAPTERS.OPENLOGIN]: {
          //       label: "openlogin",
          //       loginMethods: {
          //         reddit: {
          //           name: "reddit Login",
          //           showOnModal: false,
          //         },
          //         twitch: {
          //           name: "Twitch Login",
          //           showOnModal: false,
          //         },
          //         apple: {
          //           name: "apple Login",
          //           showOnModal: false,
          //         },
          //         line: {
          //           name: "line Login",
          //           showOnModal: false,
          //         },
          //         github: {
          //           name: "github Login",
          //           showOnModal: false,
          //         },
          //         kakao: {
          //           name: "kakao Login",
          //           showOnModal: false,
          //         },
          //         weibo: {
          //           name: "weibo Login",
          //           showOnModal: false,
          //         },
          //         wechat: {
          //           name: "wechat Login",
          //           showOnModal: false,
          //         },
          //       },
          //       showOnModal: true,
          //     },
          //   },
          // }
          ();

        //subscribeAuthEvents(web3auth);
      } catch (error) {
        console.error(error);
      }
    };
    const subscribeAuthEvents = (web3auth: Web3Auth) => {
      web3auth.on(ADAPTER_EVENTS.READY, () => {
        console.log("ready");
      });
      web3auth.on(ADAPTER_EVENTS.NOT_READY, () => {
        console.log("not ready");
      });
      web3auth.on(ADAPTER_EVENTS.CONNECTED, (data: CONNECTED_EVENT_DATA) => {
        console.log("connected to wallet", data);
        // web3auth.provider will be available here after user is connected
        setProvider(web3auth.provider);
      });
      web3auth.on(ADAPTER_EVENTS.CONNECTING, async () => {
        console.log("connecting");
        console.log(web3auth);
        console.log(web3auth.provider);
        // if (
        //   web3auth.provider === null &&
        //   web3auth.cachedAdapter == "metamask" &&
        //   web3auth.connectedAdapterName == null
        // ) {
        //   window.location.reload()
        // }
        console.log(web3auth.cachedAdapter);
        console.log(web3auth.connectedAdapterName);
        //console.log(window.ethereum);

        // if (
        //   (web3auth.cachedAdapter == "metamask" ||
        //     web3auth.cachedAdapter == null) &&
        //   web3auth.connectedAdapterName == null
        // ) {
        //   if (window.ethereum) {
        //     try {
        //       const accounts = await window.ethereum.request({
        //         method: "eth_requestAccounts",
        //       });
        //       //setAddress(accounts);
        //       console.log(accounts);
        //     } catch (error: any) {
        //       if (error.code === 4001) {
        //         // User rejected request
        //       }

        //       //setError(error);
        //     }
        //   }
        // }

        // if (web3auth.connectedAdapterName === null && window.ethereum) {
        //   const res = await window.ethereum.request({ method: "eth_requestAccounts" })
        //   console.log(res);
        // } else {
        //   console.log("no metamask");
        // }

        // console.log(window.ethereum.request({method:'eth_requestAccounts'})
        // .then(res=>{
        //         // Return the address of the wallet
        //         console.log(res)
        // }));
      });
      web3auth.on(ADAPTER_EVENTS.ADAPTER_DATA_UPDATED, (data: any) => {
        console.log("updated", data);
      });
      web3auth.on(ADAPTER_EVENTS.DISCONNECTED, () => {
        console.log("disconnected");
      });
      web3auth.on(ADAPTER_EVENTS.ERRORED, (error) => {
        console.log("error", error);
      });
      web3auth.on(ADAPTER_EVENTS.ERRORED, (error) => {
        console.log("error", error);
      });
    };

    init();
  }, []);

  const login = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");

      return false;
    }

    const web3authProvider = await web3auth.connect();
    console.log(web3authProvider);

    setProvider(web3authProvider);
    const web3Provider = new ethers.providers.Web3Provider(
      web3authProvider as any
    );
    console.log(web3Provider);
    setWeb3Provider(web3Provider);
    const signer = web3Provider.getSigner();
    const address = await signer.getAddress();
    const network = await web3Provider.getNetwork();
    const user = await web3auth.getUserInfo();
    console.log(user);

    setAddress(address);
    setChainId(network.chainId);
    setIsConnected(true);
  };

  const logout = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    await web3auth.logout();
    setWeb3Provider(null);
    setProvider(null);
    setAddress(null);
    setChainId(null);
    setIsConnected(false);
    window.location.reload();
  };

  const authenticateUser = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const idToken = await web3auth.authenticateUser();
    console.log(idToken);
    return idToken;
  };

  const getUserInfo = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const user = await web3auth.getUserInfo();
    console.log(user);
  };

  const getChainId = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const chainId = await rpc.getChainId();
    console.log(chainId);
    setChainId(chainId);
  };
  const getAccounts = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const address = await rpc.getAccounts();
    console.log(address);
    setAddress(address);
  };

  const getBalance = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const balance = await rpc.getBalance();
    console.log(balance);
  };

  const sendTransaction = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const receipt = await rpc.sendTransaction();
    console.log(receipt);
  };

  const signMessage = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const signedMessage = await rpc.signMessage();
    console.log(signedMessage);
  };

  const getPrivateKey = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const privateKey = await rpc.getPrivateKey();
    console.log(privateKey);
  };

  useEffect(() => {
    console.log(isConnected);

    if (!provider || !isConnected) {
      console.log("provider not initialized yet");
      return;
    }
    console.log("i am here");

    const handleAccountsChanged = async (accounts: string) => {
      const rpc = new RPC(provider);
      const web3accounts = await rpc.getAccounts();
      if (accounts.length === 0) {
        logout();
      } else if (accounts[0] !== address) {
        setAddress(accounts[0]);
        setIsConnected(true);
      }
    };

    const handleChainChanged = async (chainId: string) => {
      const rpc = new RPC(provider);
      const web3ChainId = await rpc.getChainId();
      setChainId(web3ChainId);
    };

    if (isConnected && provider) {
      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);
    }

    return () => {
      if (isConnected && provider) {
        provider.removeListener("accountsChanged", handleAccountsChanged);
        provider.removeListener("chainChanged", handleChainChanged);
      }
    };
  }, [isConnected]);

  // useEffect(() => {
  //   if (web3auth && web3auth.cachedAdapter) {
  //     login();
  //   }
  // }, [provider]);

  return {
    web3auth,
    provider,
    web3Provider,
    address,
    chainId,
    login,
    logout,
  };
};
