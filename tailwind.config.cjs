/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        primary: "#141414",
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right bottom, rgba(59, 163, 149, 0.8), rgba(117, 216, 213, 0.9)), url('./src/assets/wood-bg.jpg');",
      },
      backgroundColor: {
        pinked: "#c38d9e",
        grayed: "#eee",
        whited: "#f7f7f7"
      },
      borderColor: {
        "gray-border": "#b9b9b9",
        "white-border": "#f7f7f7"
      },
      gridTemplateRows: {
        "row-item": "4.5rem 40.5rem;",
      },
      gridTemplateColumns: {
        "column-item": "21rem 1fr",
      },
      width: {
        content: "82.5rem",
      },
      height: {
        content: "45rem",
      },
      boxShadow: {
        content: "0 2rem 4rem rgb(0 0 0 / 60%)",
      },
    },
  },
  plugins: [],
};
