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
    // fontSize: {
    //   'custom': "62.5%",
    // },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '5.2rem',
      custom: '62.5%',
    }
  },
  plugins: [],
};
