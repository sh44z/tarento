/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "blueColor": "#22d3ee",
        "greyIsh" : "#94a3b8",
        "cardShadow" : "#f7f8f9",
        "textColor" : "#334155",
      }
    },
  },
  plugins: [],
}

