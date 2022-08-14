/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: 'hsl(197, 95%, 8%)',
        },
        gray: {
          100: 'hsl(0, 0%, 68%)',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'scale-out': 'scale-out 800ms ease',
        'scale-in': 'scale-in 3s linear',
        'wave': 'wave 3s linear infinite',
      },
      keyframes: {
        'scale-out': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'wave': {
          '0%': { transform: 'translateY(0) rotate(0)'},
          '50%': { transform: 'translateY(-10px) rotate(30deg)' },
          '100%': { transform: 'translateY(0) transform: rotate(0)'},
        },
      },
    },
  },
  plugins: [],
}
