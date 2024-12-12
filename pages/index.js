import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import TokenInfo from "../components/TokenInfo";
import ValhallaTracker from "../components/ValhallaTracker";
import { MemeGallery } from "@/components/MemeGallery";
import Image from "next/image";


export default function Home() {
  const [mentions, setMentions] = useState(0);
  const [flyingMessage, setFlyingMessage] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const [index, setIndex] = useState(0);
  const [showDegenLounge, setShowDegenLounge] = useState(false);
  const [chilledTokens, setChilledTokens] = useState([]);

  const textContent =
    "Enter the realm where chaos meets crypto, and the degens reign supreme! You’re here for one reason: to have fun, make moves, and send $DI to Valhalla! It's all about the ride—no guarantees, no gimmicks, just pure speculation, pure vibes. Strap in and let’s rocket to the moon (or maybe a crash landing) but one thing’s for sure—you'll make it there with $DI in your wallet.";

  useEffect(() => {
    // Simulate a mention counter. Replace with actual blockchain interaction.
    const interval = setInterval(() => {
      setMentions((prev) => prev + 1); // Increment the count of mentions
    }, 5000); // Add new mentions every 5 seconds for demo

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Trigger flying message after 5 mentions
    if (mentions >= 5) {
      setFlyingMessage(true);
      setTimeout(() => setFlyingMessage(false), 3000); // Hide after 3 seconds
    }
  }, [mentions]);

  // Typewriter effect
  useEffect(() => {
    if (index < textContent.length) {
      const timeout = setTimeout(() => {
        setTypewriterText((prev) => prev + textContent[index]);
        setIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div>
      <main className="bg-gradient-to-b from-black to-di-purple text-white relative">
        {/* Floating Logo */}
        <div className="absolute inset-0  w-full h-full pointer-events-auto">
          <div className="floating-logo w-16 h-16 md:w-40 md:h-40">
            <Image
              src="2.jpg"
              alt="$DI Logo"
              className="w-full h-full rounded-full object-contain"
            />
          </div>
        </div>

        <header className="text-center py-20 relative">
          <h1 className="md:text-6xl text-4xl font-bold text-di-pink">
            Welcome to $DI
          </h1>
          <p className="text-xl mt-4">
            No Promises. No Utility. Just Degens. 🚀
          </p>
          <p className="text-m p-10 mt-4">{typewriterText}</p>
          <a
            href="https://meme.cooking/"
            className="mt-8 bg-di-pink px-8 py-3 rounded-md text-lg font-bold hover:bg-di-blue"
          >
            Buy $DI
          </a>

          {/* Flying Message */}
          {flyingMessage && (
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 animate-fly text-lg bg-di-blue text-white px-4 py-2 rounded-md shadow-lg">
              "$DI Token is now CHILLED!"
            </div>
          )}
          {/* Chilled Tokens */}
          {chilledTokens.length > 0 && (
            <div className="absolute top-32 left-1/2 transform -translate-x-1/2 bg-di-blue text-white px-4 py-2 rounded-md shadow-lg">
              {chilledTokens.map((token, index) => (
                <p key={index} className="text-lg font-bold">
                  {token.name} ({token.address})
                </p>
              ))}
            </div>
          )}
        </header>

        {/* Meme Gallery & Flying Tokens */}
        <div className="top-20 max-w-7xl mx-auto px-6">
          <TokenInfo />
          <ValhallaTracker />
        </div>
      </main>
      <Footer />
    </div>
  );
}
