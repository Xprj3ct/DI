import { useEffect, useState } from "react";

export function MemeGallery({ mentions }) {
  const [showFlyingMessage, setShowFlyingMessage] = useState(false);

  useEffect(() => {
    // Show the flying message when 5 mentions occur
    if (mentions >= 5) {
      setShowFlyingMessage(true);
      setTimeout(() => {
        setShowFlyingMessage(false); // Hide the message after a short delay
      }, 3000);
    }
  }, [mentions]);

  return (
    <div className="relative">

      {/* Flying Message */}
      {showFlyingMessage && (
        <div className="absolute left-0 right-0 text-center text-4xl text-di-pink font-bold animate-flyIn">
          <p>5+ mentions! Flying across the screen!</p>
        </div>
      )}
    </div>
  );
}
