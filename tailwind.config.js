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

      keyframes: {
        cursor: {
          "0%, 100%": {"border-color": "rgba(0, 0, 0, 1)"},
          "50%": {"border-color": "rgba(0, 0, 0, 0)"},
        },

        scaling: {
          "0%, 100%": {transform: "scale(1)"},
          "50%": {transform: "scale(1.1)"},
        },
      },

      animation: {
        cursor: "cursor 1s infinite linear",
        scaling: "scaling 1s infinite linear",
      },
    },
  },
  plugins: [],
};