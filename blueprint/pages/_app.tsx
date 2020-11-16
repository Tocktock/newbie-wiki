import "../styles/index.css";
import "../src/Components/Navbar";
import Head from "next/head";
import type { AppProps } from "next/app";
import Navbar from "../src/Components/Navbar";

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
      <Navbar></Navbar>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
