const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--gradient-color-stops))",
      },
      borderStyle: ["hover", "active"],
      colors: {
        "hyvv-yello": "#FFFA4C",
        "hyvv-lightblue": "#07f",
        "hyvv-darkblue": "#005fcc",
        "hyvv-main-light": "#DAEAEE",
        "hyvv-main-hover": "#D0E2E8",
        "hyvv-main": "#08657E",
        "hyvv-title-1": "#000929",
        "hyvv-title-2": "#1D1D1D",
        "hyvv-title-3": "#2E2C34",
        "hyvv-description": "#84818A",
        "hyvv-red": "#FC3400",
        "hyvv-red-2": "#F96F66",
        "hyvv-orange": "#FF9F38",
        "manage-blue-light": "#E6F6FF",
        "manage-blue-middle": "#D6F1FF",
        "manage-blue-dark": "#00A5FF",
        "manage-green-light": "#DEF8E9",
        "manage-green-middle": "#CDF4DD",
        "manage-green-dark": "#27AE60",
        "manage-orange-light": "#FDF4E2",
        "manage-orange-middle": "#FCEBCA",
        "manage-orange-dark": "#F4BE50",
        "manage-teal-dark": "#08657E",
        "manage-text-description": "#84818A",
        "manage-teal-light": "#E6F0F2",
      },
      gridTemplateRows: {
        appLayout: "42px auto",
        marketingLayout: "64px auto",
      },
      gridTemplateColumns: {
        appLayout: "42px auto auto",
        marketingLayout: "auto auto",
      },
      fontFamily: {
        Montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
        Manrope: ["Manrope", ...defaultTheme.fontFamily.sans],
        Plus_Jakarta_Sans: [
          "Plus Jakarta Sans",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
      },
    },
  },
  plugins: [],
};
