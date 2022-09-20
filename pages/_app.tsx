import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../src/components/navbar";
import { ProjectContextProdvider } from "../src/context/projectContext";
import SafeHydrate from "../src/components/safeHydrate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Web3ContextProvider } from "../src/context/web3Context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
    </>
  );
}

export default MyApp;
