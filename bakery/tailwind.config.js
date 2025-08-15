/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",              // Vite entry point
    "./src/**/*.{js,jsx,ts,tsx}" // All React component files
  ],
  theme: {
    extend: { 
      colors: {
        bakeryBrown: "#D99A6C",
        bakeryCream: "#F3E5AB",
        bakeryLight: "#FFF8F0",
      },
  fontFamily: {
        spartan: ['League Spartan', 'sans-serif'],
      },
},
  },
  plugins: [
  ],
}

