/** @type {import('tailwindcss').Config} */
const colors = require("./src/styles/veriables/colors");
const breakpoints = require("./src/styles/veriables/breakpoints");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        background: colors.background,
        primary: colors.primary,
        secondary: colors.secondary,
        tertiary: colors.tertiary,
      },
      fontSize: {
        h1: "4.5em",
        h2: "3em",
        b1: "1em",
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(0, 1fr))",
        "auto-fill": "repeat(auto-fill, minmax(0, 25vw))",
      },
      rotate: {
        "x-90": "transform: rotateX(75deg)",
      },
      screens: {
        glg: { max: breakpoints.glg },
        gmd: { max: breakpoints.gmd },
        flg: { max: breakpoints.flg },
        fmd: { max: breakpoints.fmd },
        nlg: { max: breakpoints.nlg },
        nmd: { max: breakpoints.nmd },
      },
      animation: {
        marquee: "marquee 10s infinite linear",
        marquee2: "marquee2 10s infinite linear",
      },
      keyframes: {
        marquee: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        marquee2: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
      addVariant("all-child", "& *");
    },
  ],
};
