import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../src/components/navbar";
import { ProjectContextProdvider } from "../src/context/projectContext";
import SafeHydrate from "../src/components/safeHydrate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { LoadedValuesContextProvider } from "../src/context/loadedValuesContext";
import { DisclaimerContextProdvider } from "../src/context/disclaimerContext";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apolloClient";
import { Web3AuthContextProvider } from "../src/context/web3Context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <LoadedValuesContextProvider>
        <Web3AuthContextProvider>
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
        </Web3AuthContextProvider>
      </LoadedValuesContextProvider>
    </ApolloProvider>
  );
}

export default MyApp;
