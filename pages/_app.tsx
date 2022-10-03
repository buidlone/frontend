import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../src/components/navbar";
import { ProjectContextProdvider } from "../src/context/projectContext";
import SafeHydrate from "../src/components/safeHydrate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Web3ContextProvider } from "../src/context/web3Context";
import { LoadedValuesContextProvider } from "../src/context/loadedValuesContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <LoadedValuesContextProvider>
        <Web3ContextProvider>
          <ProjectContextProdvider>
            <SafeHydrate>
              <Navbar />
              <Component {...pageProps} />
              <ToastContainer
                hideProgressBar
                position="bottom-right"
                autoClose={2000}
              />
            </SafeHydrate>
          </ProjectContextProdvider>
        </Web3ContextProvider>
      </LoadedValuesContextProvider>
    </>
  );
}

export default MyApp;
