import Head from "next/head";
import App from "../src/App";
import { ScriptSnapshot } from "typescript";

export default function IndexPage() {
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/3d8fd185f5.js"
          crossorigin="anonymous"
          defer
        ></script>
      </Head>
      <App message="hihi~" user="testetest" />
    </>
  );
}
