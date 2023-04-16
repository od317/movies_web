/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors")

module.exports = {
  mode:'jit',
  content: [
    './index.html',
     './src/App.vue',
    './src/assets/base.css',
    './src/**/*.{vue,js}'
  ],
  theme: {
    extend: {
      animation: {
        t: 't 5s ease-in-out infinite',
      },
      keyframes: {
        t: {
          '0%, 100%': { transform: 'translateX(-100%)' }
        }
      },
      transitionProperty: {
        'width': 'width',

      },
      screens: {
        'sm1': '410px',
        'sm2': '600px',
      },
      colors:{
        c1:'#432C7A',
        c2:'#8F43EE',
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
      }
    },
  },
  plugins: [],
}
