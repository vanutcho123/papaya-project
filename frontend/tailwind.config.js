/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        labelDarkPrimary: "#FFFFFF",
        labelDarkSecondary: "#EBEBF5",
        labelDarkTertiary: "#EBEBF5",
        labelDarkQuaternary: "#EBEBF5",
        fillBlue: "#22D7FF",
        papayaColorDarkPurple: "#48319D",
        fillPurple: "#8015A7",
        papayaColorDark2: "#1D1C34",
        papayaColorGradient:
          "linear-gradient(132deg, #A73EE7 14.48%, #00EBFF 83.43%)",
        papayaColorDark1: "#2E335A",
        papayaColorDeepPurple: "#613690",
        papayaColorPurple: "#8322FF",
        fillOrange: "#ED695E",
        fillYellow: "#F4BF4F",
        fillGreen: "#61C554",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require("flowbite/plugin")],
};
