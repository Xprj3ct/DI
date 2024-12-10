import Link from "next/link";
import { useState } from "react";

const Navbar = ({ toggleDegenLounge }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-di-purple shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold text-di-pink hover:text-di-blue"
        >
          $DI
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button
          className="text-di-pink text-2xl md:hidden"
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/nft" className="text-lg hover:text-di-pink">
            NFT
          </Link>
          <button
            onClick={toggleDegenLounge}
            className="text-lg hover:text-di-pink"
          >
            Degen Lounge
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-di-purple mt-4 px-4 py-2 rounded-md space-y-4">
          <Link href="/nft" className="block text-lg hover:text-di-pink">
            NFT
          </Link>
          <button
            onClick={toggleDegenLounge}
            className="block text-lg hover:text-di-pink"
          >
            Degen Lounge
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
