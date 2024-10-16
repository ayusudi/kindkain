/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      maxWidth: {
        "2xl": "1440px",
        "mxl": "1440px"
      },
      colors: {
        "cream": "#FFF3E9",
        "nude": "#FFE8D3",
        "darktext": "#272525",
        "darkpurple": "#301C51",
        "purplepale": "#594974",
        "gray": "#707070",
        "grey": "#D9D9D9",
        "yellow": "#FBE146",
        "whitegray": "#E2E2E2"
      },
      backgroundImage: {
        "cream": "#FFF3E9",
        "nude": "#FFE8D3",
        "dark": "#272525",
        "darktext": "#301C51",
        "gray": "#707070",
        "yellow": "#FBE146",
        "ig": 'linear-gradient(315deg, #FBE18A 0.96%, #FCBB45 21.96%, #F75274 38.96%, #D53692 52.96%, #8F39CE 74.96%, #5B4FE9 100.96%)',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        "23": "92px"
      },
      fontFamily: {
        quicksand: ['var(--font-quicksand)', 'sans-serif'],
        nunito: ['var(--font-nunito)', 'sans-serif'],
      },
    },
  },
  plugins: [
    flowbite.plugin()
  ],
};
