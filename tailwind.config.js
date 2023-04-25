/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      colors: {
        purple1: "#6962f7",
        purple2: "#7000ff",
        blue1: "#00d4ff",
        gray: "#adbdcc",
        darkgray: "rgba(250, 250, 250, 0.25)",
        lightgray: "rgba(250, 250, 250, 0.5)",
        primarybtnhover: "#6d7a88",
        primary: {
          dark: "#000",
          light: "#fff",
          accent: "#0a2540",
        },
        bg: {
          white: "#fff",
          light: "#f7f9fc",
        },
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        heading: ["Anek Telugu", "sans-serif"],
      },
      fontSize: {
        h1: "64px",
        h1md: "96px",
        h2: "50px",
        h3: "34px",
        h3md: "40px",
        h4: "32px",
        h5: "28px",
        h6: "22px",
        subtitle: "17px",
      },
      maxWidth: {
        standard: "1144px",
      },
      boxShadow: {
        standard: "0px 2px 40px rgba(0, 0, 0, 0.15)",
      },
      gradientColorStopPositions: {
        33: "33%",
      },
    },
  },
  plugins: [],
};
