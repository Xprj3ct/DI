import { useState } from "react";

const DegenLounge = ({ toggleShow, onTokenSubmit }) => {
  const [tokenName, setTokenName] = useState("");
  const [tokenContract, setTokenContract] = useState("");

  const handleSubmit = () => {
    if (!tokenName.trim() || !tokenContract.trim()) {
      alert("Please enter both a Token Name and a Contract Address!");
      return;
    }

    onTokenSubmit({ name: tokenName, address: tokenContract });
    setTokenName("");
    setTokenContract("");
  };

  return (
    <div
      className="fixed bottom-4 right-4 bg-di-purple p-6 rounded-lg text-white w-80 shadow-lg"
      style={{ zIndex: 9999 }}
    >
      <div className="relative">
        {/* Close Button */}
        <button
          onClick={toggleShow}
          className="absolute top-2 right-2 text-lg hover:text-di-pink"
        >
          X
        </button>

        {/* Lounge Content */}
        <h2 className="text-2xl font-bold text-center">
          Welcome to the Degen Lounge!
        </h2>
        <p className="mt-4 text-center">
          Chill and share with the crew. Drop the Lambo CA!
        </p>

        {/* Input Fields */}
        <input
          type="text"
          placeholder="Token Name"
          className="w-full mt-4 p-2 bg-di-purple text-white border border-di-pink rounded-md"
          value={tokenName}
          onChange={(e) => setTokenName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Contract Address"
          className="w-full mt-4 p-2 bg-di-purple text-white border border-di-pink rounded-md"
          value={tokenContract}
          onChange={(e) => setTokenContract(e.target.value)}
        />

        <button
          
          className="w-full mt-4 bg-gray-500 px-4 py-2 rounded-md font-bold "
        >
          coming soon...
        </button>
      </div>
    </div>
  );
};

export { DegenLounge };
