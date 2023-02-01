 import { useEffect, useReducer, useCallback } from "react";
// import { ethers } from "ethers";
// import { WALLET_ADAPTERS } from "@web3auth/base";
// import {
//   Web3ProviderState,
//   Web3Action,
//   web3InitialState,
//   web3Reducer,
// } from "../reducers";
// import { toast } from "react-toastify";
// import { NEXT_PUBLIC_INFURA_ID } from "../constants/contractAddresses";
// import { Web3Auth } from "@web3auth/modal";
// import { subscribeAuthEvents } from "../web3/subscribeAuthEvents";

// let web3auth: Web3Auth | null;

// if (typeof window !== "undefined") {
//   web3auth = new Web3Auth({
//     chainConfig: {
//       chainNamespace: "eip155",
//       chainId: "0x5",
//       rpcTarget: `https://goerli.infura.io/v3/${NEXT_PUBLIC_INFURA_ID}`,
//     },
//     clientId:
//       "BNRwqjC6-H_d1xf64PyLKW7zTtvwca7GT-V4XUDgXBS0X8iyCU8r-y_f_F8MnSKUjyPTQvTzcq0IHdok8j8YU50",
//     authMode: "DAPP",
//     uiConfig: {
//       appLogo: "/_next/static/media/brandmark_blue.d7fc2847.svg",
//       theme: "dark",
//       appName: "Build1",
//     },
//   });
// }

// export const useWeb3 = () => {
//   const [state, dispatch] = useReducer(web3Reducer, web3InitialState);
//   const { provider, web3Provider, address, network } = state;

//   useEffect(() => {
//     // const init = async () => {
//     //   if (web3auth) {
//     //     try {
//     //       await web3auth.initModal({
//     //         modalConfig: {
//     //           [WALLET_ADAPTERS.OPENLOGIN]: {
//     //             label: "openlogin",
//     //             loginMethods: {
//     //               reddit: {
//     //                 name: "reddit Login",
//     //                 showOnModal: false,
//     //               },
//     //               twitch: {
//     //                 name: "Twitch Login",
//     //                 showOnModal: false,
//     //               },
//     //               apple: {
//     //                 name: "apple Login",
//     //                 showOnModal: false,
//     //               },
//     //               line: {
//     //                 name: "line Login",
//     //                 showOnModal: false,
//     //               },
//     //               github: {
//     //                 name: "github Login",
//     //                 showOnModal: false,
//     //               },
//     //               kakao: {
//     //                 name: "kakao Login",
//     //                 showOnModal: false,
//     //               },
//     //               weibo: {
//     //                 name: "weibo Login",
//     //                 showOnModal: false,
//     //               },
//     //               wechat: {
//     //                 name: "wechat Login",
//     //                 showOnModal: false,
//     //               },
//     //             },
//     //             showOnModal: true,
//     //           },
//     //         },
//     //       });
//     //       console.log(web3auth);
//     //       subscribeAuthEvents(web3auth);
//     //     } catch (error) {
//     //       console.log(error);
//     //     }
//     //   }
//     // };
//     // init();
//     // console.log(web3auth);
//   }, []);

//   const connect = useCallback(async () => {
//     if (web3auth) {
//       try {
//         const provider = await web3auth.connect();
//         const web3Provider = new ethers.providers.Web3Provider(provider as any);
//         const signer = web3Provider.getSigner();
//         const address = await signer.getAddress();
//         const network = await web3Provider.getNetwork();
//         const user = await web3auth.getUserInfo();

//         console.log(address);
//         console.log(network);

//         toast.success("Connected to Web3");
//         dispatch({
//           type: "SET_WEB3_PROVIDER",
//           provider,
//           web3Provider,
//           address,
//           network,
//         } as Web3Action);
//       } catch (e) {
//         toast.error("Connection error");
//         console.log("connect error", e);
//         window.location.reload();
//         return false;
//       }
//     } else {
//       toast.error("No Web3Auth");
//       console.error("No Web3Auth");
//       return false;
//     }
//   }, []);

//   const disconnect = useCallback(async () => {
//     if (web3auth) {
//       if (provider?.disconnect && typeof provider.disconnect === "function") {
//         await provider.disconnect();
//       }
//       web3auth.clearCache();
//       await web3auth.logout();
//       console.log(`cache ${web3auth}`);

//       dispatch({
//         type: "RESET_WEB3_PROVIDER",
//       } as Web3Action);
//       window.location.reload();
//       toast.error("Disconnected from Web3");
//     } else {
//       toast.error("No Web3Modal");
//       console.error("No Web3Modal");
//     }
//   }, []);

//   // useEffect(() => {
//   //   if (web3auth && web3auth.cachedAdapter) {
//   //     connect();
//   //   }
//   // }, [connect]);

//   useEffect(() => {
//     if (provider?.on) {
//       const handleAccountsChanged = (accounts: string[]) => {
//         toast.info("Changed Web3 Account");
//         dispatch({
//           type: "SET_ADDRESS",
//           address: accounts[0],
//         } as Web3Action);
//         window.location.reload();
//       };

//       const handleChainChanged = (_hexChainId: string) => {
//         if (typeof window !== "undefined") {
//           console.log("switched to chain...", _hexChainId);

//           toast.info("Web3 Network Changed");
//           window.location.reload();
//         } else {
//           toast.error("Error occured while changing the network");
//           console.log("window is undefined");
//         }
//       };

//       const handleDisconnect = (error: { code: number; message: string }) => {
//         console.log("disconnect", error);
//         disconnect();
//       };

//       provider.on("accountsChanged", handleAccountsChanged);
//       provider.on("chainChanged", handleChainChanged);
//       provider.on("disconnect", handleDisconnect);

//       return () => {
//         if (provider.removeListener) {
//           provider.removeListener("accountsChanged", handleAccountsChanged);
//           provider.removeListener("chainChanged", handleChainChanged);
//           provider.removeListener("disconnect", handleDisconnect);
//         }
//       };
//     }
//   }, [provider, disconnect]);

//   return {
//     provider,
//     web3Provider,
//     address,
//     network,
//     connect,
//     disconnect,
//   } as Web3ProviderState;
// };
