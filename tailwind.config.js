/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        font_01: [ "Open Sans", "sans-serif"],
        font_02: ["Playfair Display", "serif"],
        font_03: ["Josefin Sans", "sans-serif"]

      },
      textShadow: {
        lg: '12px 12px 24px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}