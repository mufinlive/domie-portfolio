/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "dutch-flag": "url('/netherlands.svg')",
        "english-flag": "url('/united.svg')",
      },
    },
  },
  plugins: [],
};
