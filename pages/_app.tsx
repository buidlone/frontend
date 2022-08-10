import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../src/components/navbar';
import { ProjectContextProdvider } from '../src/context/projectContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ProjectContextProdvider>
        <Navbar />
        <Component {...pageProps} />
      </ProjectContextProdvider>
    </>
  );
}

export default MyApp;
