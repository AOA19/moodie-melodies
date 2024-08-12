/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orchid: {
          500: "#c86fc9",
          600: "#ab4eaa",
        },
        tangerine: "#f49d6e",
        palegreen: "#a9dfbf",
        charcoal: "#34495E",
        seasalt: "#F7F9F9",
        offwhite: "#FFFBF0",
      },
      screens: {
        'md': "700px",
      }
    },
  },
  plugins: [],
};
