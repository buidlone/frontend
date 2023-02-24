import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../src/components/navbar";
import SafeHydrate from "../src/components/safeHydrate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoadedValuesContextProvider } from "../src/context/loadedValuesContext";
import { DisclaimerContextProdvider } from "../src/context/disclaimerContext";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apolloClient";
import { Web3AuthContextProvider } from "../src/context/web3Context";
import { InvestorContextProvider } from "../src/context/investorContext";
import DemoStateContext from "../src/demo/context/demoStateContext";
import { ReactElement, ReactNode, useContext, useState } from "react";
import { NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [isDemo, setIsDemo] = useState<boolean>(false);

  if (Component.getLayout) {
    return Component.getLayout(
      <DemoStateContext.Provider value={{ isDemo, setIsDemo }}>
        <Component {...pageProps} />
      </DemoStateContext.Provider>
    );
  }

  return (
    <ApolloProvider client={client}>
      <LoadedValuesContextProvider>
        <Web3AuthContextProvider>
          <InvestorContextProvider>
            <DisclaimerContextProdvider>
              <DemoStateContext.Provider value={{ isDemo, setIsDemo }}>
                <SafeHydrate>
                  <Navbar />
                  <Component {...pageProps} />
                  <ToastContainer
                    hideProgressBar
                    position="bottom-right"
                    autoClose={2000}
                  />
                </SafeHydrate>
              </DemoStateContext.Provider>
            </DisclaimerContextProdvider>
          </InvestorContextProvider>
        </Web3AuthContextProvider>
      </LoadedValuesContextProvider>
    </ApolloProvider>
  );
}

export default MyApp;
