/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      colors: {
        'turquoise': '#57B1B1',
        'turquoise-light': '#5EA7A7',
        'orange-earth': '#D9A47F',
        'orange-light': '#E6B592',
        'dark-gray': '#2F2F2F',
      },
      animation: {
        'wave': 'wave 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px) translateX(0px)'
          },
          '33%': {
            transform: 'translateY(-10px) translateX(5px)'
          },
          '66%': {
            transform: 'translateY(5px) translateX(-5px)'
          },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}