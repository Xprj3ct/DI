import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NFTPage() {
  return (
    <div>
      <main className="min-h-screen bg-gradient-to-b from-black to-di-purple text-white">
        <section className="text-center py-10">
          <h1 className="text-4xl mb-4">$DI NFT Drop</h1>
          <p>
            Mint your free pfp $DI NFT! Coming soon..{" "}
            <span className="font-bold text-di-pink">Not a utility</span>.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
