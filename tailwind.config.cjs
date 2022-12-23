/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue, js, ts, jsx, tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bs: ["bright-summer"],
      },
      colors: {
        wave: "#5bc2b2",
        sand: "#fcf3c5",
      },
      backgroundImage: {
        "img-sand": "url('./assets/SVG/sand.svg')",
        "img-sand-decor-2": "url('./assets/SVG/sand-decor-2.svg')",
        "img-wave": "url('./assets/SVG/wave.svg')",
      },
    },
  },
  plugins: [],
};
