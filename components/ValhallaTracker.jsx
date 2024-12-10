import { useState, useEffect } from "react";

const ValhallaTracker = () => {
  const [burned, setBurned] = useState(0);

  useEffect(() => {
    // Simulate fetching burned token data
    setBurned(12500000); // Replace with API call later
  }, []);

  const progressPercentage = ((burned / 100000000) * 100).toFixed(2);

  return (
    <section className="text-center mt-16">
      <h2 className="text-3xl font-bold text-di-pink">Team wally Tracker</h2>
      <p className="text-xl mt-4">{burned.toLocaleString()} of $DI supply 🔥</p>
      <div className="relative mt-6 h-6 w-full max-w-lg mx-auto bg-di-purple rounded-full shadow-lg">
        <div
          className="h-6 bg-di-pink rounded-full"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <p className="mt-2 text-sm">
        {progressPercentage}% to Valhalla{" "}
        <span className="font-bold text-di-blue">[Marketing Only]</span>
      </p>
    </section>
  );
};

export default ValhallaTracker;
