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
        sans: ['"HK Grotesk"', 'sans-serif'],
        questrial: ['"Questrial"', 'sans-serif'],
      },
      keyframes: {
        bounceWhatsapp: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10%)' },
        },
      },
      animation: {
        bounceWhatsapp: 'bounceWhatsapp 1.8s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}
