/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        // light: {
        //   primary: "#7fe2a0",
        //   secondary: "#d56eea",
        //   neutral: "#263640",
        //   "base-100": "#FFFFFF",
        // },
        dark: {
          primary: "#47B5FF",
          secondary: "#DFF6FF",
          neutral: "#DFF6FF",
          accent: "#8892B0",
          success: "#133040",
          "base-100": "#06283D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
