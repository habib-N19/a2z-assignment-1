/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   yellow: '#FFFF00',
      //   white: '#FFFFFF'
      // },
    },
  },
  plugins: [require("daisyui")],
};









