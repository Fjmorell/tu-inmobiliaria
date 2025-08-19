/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emeraldDark: '#014D40',
        gold: '#D4AF37',
        boneWhite: '#E0E0E0',
      },
      fontFamily: {
        sans: ['"HK Grotesk"', 'sans-serif'],    // Principal
        questrial: ['"Questrial"', 'sans-serif'], // Secundaria
      },
    },
  },
  plugins: [],
}
