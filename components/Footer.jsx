import { FaTelegramPlane, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-di-purple to-black py-8 text-center text-white">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Social Links with Logos */}
        <div className="flex justify-center space-x-10 items-center">
          <a
            href="https://twitter.com/your_handle"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-di-pink hover:text-di-blue text-lg font-bold space-x-2"
          >
            <FaTwitter size={24} />
            <span>Follow us on X</span>
          </a>
          <a
            href="https://t.me/your_telegram_channel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-di-pink hover:text-di-blue text-lg font-bold space-x-2"
          >
            <FaTelegramPlane size={24} />
            <span>Join the Telegram Degens</span>
          </a>
        </div>

        {/* Trash Talk */}
        <p className="text-md italic text-gray-400">
          This isn’t financial advice—heck, it’s barely advice. But if you’re
          here, you’re already vibing with the degens. 🚀
        </p>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} $DI - No Promises, Just Degens.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
