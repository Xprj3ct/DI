import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { DegenLounge } from "@/components/DegenLounge";

function MyApp({ Component, pageProps }) {
  const [showDegenLounge, setShowDegenLounge] = useState(false);

  const toggleDegenLounge = () => {
    setShowDegenLounge((prev) => !prev); // Toggle visibility of the Degen Lounge
  };

  return (
    <>
      <head>
        <link rel="icon" href="/favico.ico" />
        <Navbar toggleDegenLounge={toggleDegenLounge} />
      </head>
      <Component {...pageProps} />
      {/* Degen Lounge Popup */}
      {showDegenLounge && <DegenLounge toggleShow={toggleDegenLounge} />}
    </>
  );
}

export default MyApp;
