import "../styles/index.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import Navbar from "../src/Components/Main/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/3d8fd185f5.js"
          crossOrigin="anonymous"
          defer
        ></script>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
