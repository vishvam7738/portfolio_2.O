const defaultTheme = require('tailwindcss/defaultTheme')
const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'selector',
  theme: {
    screens: {
      'xs': '440px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        from: "hsla(0, 0%, 100%, 0.3)",
        to: "hsla(0, 0%, 100%, 0.05)"
      },
      fontFamily: {
        silka: ["var(--font-silka)"]
      },
      boxShadow: {
        memoji: "inset 1px 4px 6px rgba(0,0,0,.4), inset 0px -2px 16px -3px rgba(0,0,0,.2)",
        circle: "0 4px 24px -1px rgba(0, 0, 0, 0.1)",
        verylight: "2px 1px 4px 0px #3e3e3e1a",
        darkmode: "-4px 1px 10px 1px rgb(9 9 11 / 22%)",
      },
      background: {
        circle: "linear-gradient(120deg, hsla(0, 0%, 100%, 0.5), hsla(0, 0%, 100%, 0.1))",
      },
      animation: {
        eclipse: "eclipse 3s linear infinite",
        marquee: "marquee 8s linear infinite",
        "god-rays": "god-rays var(--duration) cubic-bezier(0.15, 0, 0.85, 1) infinite alternate",
      },
      keyframes: {
        eclipse: {
          "0%": {
            transform: "translateX(115%)",
          },
          "100%": {
            transform: "translateX(-115%)",
          },
        },
        marquee: {
          "from": {
            transform: "translateX(0)",
          },
          "to": {
            transform: "translateX(-45%)",
          },
        },
        "god-rays": {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-50%)",
          },
        },
      },
      gridTemplateColumns: {
        "1-64": "repeat(1, minmax(64px, 1fr))",
        "2-64": "repeat(2, minmax(64px, 1fr))",
      },
      gridTemplateRows: {
        "1-64": "repeat(1, minmax(64px, 1fr))",
        "2-64": "repeat(2, minmax(64px, 1fr))",
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        "bg-grid": (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
          )}")`,
        }),
        "bg-grid-small": (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
          )}")`,
        }),
        "bg-dot": (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
    );
  },],
}

