/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./index.html",
    "./src/*.{js,jsx}",
    "./src/routes/*.{js,jsx}",
    "./src/routes/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Nunito", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "landing": "url('/src/assets/images/landing.jpg')",
        "sign": "url('/src/assets/images/sign.jpg')",
        "main": "url('/src/assets/images/main.jpg')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#a3e635",
          "secondary": "#78716c",
          "accent": "#d6d3d1",
          "neutral": "#404040",
          "base-100": "#fafafa",
          "info": "#64748b",
          "success": "#22c55e",
          "warning": "#FBBD23",
          "error": "#ef4444",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
