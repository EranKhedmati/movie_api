/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/mian.jsx",
    "./src/App.jsx",
    "./src/components/Header.jsx"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00246B",
        secondary: "#CADCFC",
        dark: "#212121",
        gray: "#727272",
      },
      gridTemplateColumns: {
        'header': "200px minmax(auto, 500px) minmax(auto, 400px)"
      },
    },
  },
  plugins: [],
}