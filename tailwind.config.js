/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      backgroundImage: {
        vectorBg: "url('../images/vectorBg.png')",
        reactBg: "url('../images/reactBg.png')",
        footerBg: "url('../images/footerBg.png')",
      },
      backgroundSize: {
        back: "60rem",
      },
      fontFamily: {
        jetBrain: "'JetBrains Mono', monospace",
        kaushan: "'Kaushan Script', cursive",
      },
      backgroundColor: {
        yld: "#DFD42B",
        org: "#DF812B",
        blk: "#1E1E1E",
        gry: "#D9D9D9",
      },
      borderColor: {
        org: "#DF812B",
        yld: "#DFD42B",
      },
    },
  },
  plugins: [],
};
