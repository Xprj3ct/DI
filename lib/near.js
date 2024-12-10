import { Near, Account, connect } from "near-api-js";
import { useState, useEffect } from "react";

const CONTRACT_ID = "<your-smart-contract-id>"; // Replace with the smart contract deployed account

// NEAR setup
const getNearConnection = async () => {
  const config = {
    networkId: "testnet", // Change to "mainnet" for mainnet
    keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
    helperUrl: "https://helper.testnet.near.org",
  };

  const near = await connect(config);
  const account = await near.account("<your-account-id>.testnet");

  return { near, account };
};

const ChillToken = () => {
  const [mentions, setMentions] = useState(0);
  const [inputToken, setInputToken] = useState("");

  useEffect(() => {
    const fetchMentions = async () => {
      const { account } = await getNearConnection();
      const result = await account.viewFunction(CONTRACT_ID, "get_mentions", {
        token: inputToken,
      });
      setMentions(result);
    };

    fetchMentions();
  }, [inputToken]);

  const handleChillToken = async () => {
    const { account } = await getNearConnection();
    await account.functionCall(
      CONTRACT_ID,
      "chill_token",
      { token: inputToken },
      300000000000000, // Gas limit
      "1000000000000000000000000" // Attached deposit
    );
  };

  return (
    <div className="chill-token-container">
      <input
        type="text"
        value={inputToken}
        onChange={(e) => setInputToken(e.target.value)}
        placeholder="Enter token to chill"
      />
      <button onClick={handleChillToken}>Chill Token</button>

      <p>Token Mentions: {mentions}</p>
    </div>
  );
};

export default ChillToken;
