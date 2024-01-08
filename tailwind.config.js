/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        default: "#f7f2e9",
        black: "#252525",
        yellow: "#edc84b",
      },
    },
    fontFamily: {
      sans: ["Roboto Mono"],
    },
    borderWidth: {
      10: "1.6rem",
    },
  },
  plugins: [],
};
