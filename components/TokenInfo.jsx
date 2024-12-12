const TokenInfo = () => {
  return (
    <section className="bg-di-purple rounded-lg shadow-lg p-10 text-center mt-10">
      <h2 className="md:text-4xl text-2xl text-di-pink mb-6">Tokenomics</h2>
      <div className="text-lg space-y-4">
        <p>
          Total Supply:{" "}
          <span className="font-bold">
            A limited amount of $DI for you, the brave degens.
          </span>
        </p>
        <p>
          CA:{" "}
          <span className="font-bold text-di-blue">
            degenintelligence
          </span>
        </p>
        <p>
          Token Symbol: <span className="font-bold text-di-pink">$DI</span>
        </p>
      </div>
      <p className="pt-4">
        NO promises, NO utility. Just degens having a blast. 🚀
      </p>
    </section>
  );
};

export default TokenInfo;
