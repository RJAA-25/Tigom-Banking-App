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
        "landing": "url('./src/assets/images/landing.avif')",
      },
    },
  },
  plugins: [
    // require("@tailwindcss/forms"),
    require("daisyui"),
  ],
};
