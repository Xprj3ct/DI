/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "di-purple": "#1e005f",
        "di-pink": "#ff006e",
        "di-blue": "#00d8ff",
      },
      animation: {
        flyIn: "flyIn 2s ease-out",
      },
      keyframes: {
        flyIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        
      },
    },
  },
  plugins: [],
};
