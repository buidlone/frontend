import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../src/components/navbar";
import { ProjectContextProdvider } from "../src/context/projectContext";
import SafeHydrate from "../src/components/safeHydrate";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ProjectContextProdvider>
        <SafeHydrate>
          <Navbar />
          <Component {...pageProps} />
        </SafeHydrate>
      </ProjectContextProdvider>
    </>
  );
}

export default MyApp;
