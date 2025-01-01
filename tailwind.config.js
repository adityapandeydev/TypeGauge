/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGray: "#eeeeee",
        lighterGray: "#f6fbff",
        greenA: "#3cc1a3",
        greenB: "#40a82b",
        result: "#005995",
        race: "#3b5998",
      },
    },
  },
  plugins: [],
};