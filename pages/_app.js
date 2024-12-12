import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { DegenLounge } from "@/components/DegenLounge";
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  const [showDegenLounge, setShowDegenLounge] = useState(false);

  const toggleDegenLounge = () => {
    setShowDegenLounge((prev) => !prev); // Toggle visibility of the Degen Lounge
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/favico.ico" />
        <Navbar toggleDegenLounge={toggleDegenLounge} />
      </Head>
      <Component {...pageProps} />
      {/* Degen Lounge Popup */}
      {showDegenLounge && <DegenLounge toggleShow={toggleDegenLounge} />}
    </>
  );
}

export default MyApp;
