import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Tokenomics() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-black to-di-purple text-white">
        <section className="text-center py-10">
          <h1 className="text-4xl mb-4">Tokenomics</h1>
          <p>Total Supply: 1,000,000,000 $DI</p>
          <p>Burn Mechanism: 5% of every transaction</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
