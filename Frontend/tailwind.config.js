/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          100: "#AA8453",
          200: "#BB915B",
          800: "#222222"
        }
      }
    },
  },
  plugins: [],
}

