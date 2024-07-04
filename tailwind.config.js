/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/mian.jsx",
    "./src/App.jsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00246B",
        secondary: "#CADCFC",
        dark: "#212121",
        gray: "#727272",
      }
    },
  },
  plugins: [],
}