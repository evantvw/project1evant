/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        default: "#f7f2e9",
        black: "#252525",
        yellow: "#edc84b",
        gray: "#888",
      },
    },
    fontFamily: {
      sans: ["Roboto Mono"],
    },
    borderWidth: {
      2: "2px",
      10: "1.6rem",
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      base2: "1.4rem",
      base3: "1.6rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      xxl: "5.2rem",
      custom: "62.5%",
    },
  },
  plugins: [],
};
