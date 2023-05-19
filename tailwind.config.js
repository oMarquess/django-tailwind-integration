/** @type {import('tailwindcss').Config} */
const colors = require ('tailwindcss/colors')
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors:{
      sky: colors.sky,
      white: colors.white,
      black: colors.black,
      cfe: "#007cae",
      cfeBlue: {
        100: "#007cad"
    },
    extend: {},
  },
  plugins: [],
}
}
