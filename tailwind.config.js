/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "dutch-flag": "url('~assets/netherlands.svg')",
        "english-flag": "url('~assets/united.svg')",
      },
    },
  },
  plugins: [],
};
