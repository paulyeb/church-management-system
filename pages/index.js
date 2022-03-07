import Head from "next/head";
import HomePage from "../components/HomePage";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faUser, faMoneyBill1} from "@fortawesome/free-regular-svg-icons"
library.add(faUser, faMoneyBill1)

export default function Home() {
  return (
    <>
      <Head>
        <title>Faithhouse International Centre</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
}
