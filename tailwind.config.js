/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Manrope", "sans-serif"],
      },
      colors: {
        ink: "#102f37",
        deep: "#082e37",
        mint: "#b4ddd0",
        cream: "#e8f0ed",
        teal: "#145d61",
        peach: "#e6b99e",
      },
    },
  },
  plugins: [],
};