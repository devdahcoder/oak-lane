/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: 'hsl(197, 95%, 8%)',
          200: 'hsl(0, 0%, 27%)',
        },
        gray: {
          100: 'hsl(0, 0%, 68%)',
          200: 'hsl(0, 0%, 47%)',
          300: 'hsl(0, 0%, 53%)',
          400: 'hsl(0, 0%, 56%)',
        },
        green: {
          100: 'hsl(90, 25%, 52%)',
          200: 'hsla(90, 25%, 52%, 0.35)',
        },
        red: {
          100: 'hsl(0, 100%, 50%)',
        },
        blue: {
          100: 'hsl(210, 20%, 98%)',
          200: 'hsl(0, 0%, 96%)',
          300: 'hsl(196, 95%, 36%)',
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        cabin: ['Cabin', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      animation: {
        'scale-out': 'scale-out 800ms ease',
        'scale-in': 'scale-in 3s linear',
        'wave': 'wave 3s linear infinite',
        'slide': 'slide 1s linear infinite',
        'rotate-forward-backward' : 'rotate-forward-backward 5s linear infinite',
        
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
        'slide': {
          '0%': { transform: 'translateX(0)'},
          '50%': { transform: 'translateX(-8px)'},
          '100%': { transform: 'translateX(0)'},
        },
        'rotate-forward-backward' : {
          '0%': { transform: 'rotate(0deg)'},
          '50%': { transform: 'rotate(50deg)'},
          '100%': { transform: 'rotate(0deg)'},
        }
      },
    },
  },
  plugins: [],
}
