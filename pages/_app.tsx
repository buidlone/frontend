import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../src/components/navbar";
import { ProjectContextProdvider } from "../src/context/projectContext";
import SafeHydrate from "../src/components/safeHydrate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Web3ContextProvider } from "../src/context/web3Context";
import { LoadedValuesContextProvider } from "../src/context/loadedValuesContext";
import { DisclaimerContextProdvider } from "../src/context/disclaimerContext";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apolloClient";
import { InvestorContextProvider } from "../src/context/investorContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <LoadedValuesContextProvider>
        <Web3ContextProvider>
          <InvestorContextProvider>
            <ProjectContextProdvider>
              <DisclaimerContextProdvider>
                <SafeHydrate>
                  <Navbar />
                  <Component {...pageProps} />
                  <ToastContainer
                    hideProgressBar
                    position="bottom-right"
                    autoClose={2000}
                  />
                </SafeHydrate>
              </DisclaimerContextProdvider>
            </ProjectContextProdvider>
          </InvestorContextProvider>
        </Web3ContextProvider>
      </LoadedValuesContextProvider>
    </ApolloProvider>
  );
}

export default MyApp;
