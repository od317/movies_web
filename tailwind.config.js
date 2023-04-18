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
        'gradient-x':'gradient-x 5s linear infinite',
        'trans-x1':'trans-x1 12s linear infinite',
        'trans-x2':'trans-x2 10s linear infinite',
        'trans-x3':'trans-x3 10s  linear infinite',

    },
      keyframes: {
        'gradient-x': {
            '0%': {
                'background-size':'200% 200%',
                'background-position': 'left center'
            },
            '50%': {
                'background-size':'200% 200%',
                'background-position': 'right center'
            },'100%': {
              'background-size':'200% 200%',
              'background-position': 'left center'
          },
        },
        'trans-x1': {
            '0%': {
                'transform':'translateX(330%)',
            },
            '100%': {
              'transform':'translateX(-130%)',
          },
        },'trans-x2': {
          '0%': {
              'transform':'translateX(430%)',
          },
          '100%': {
            'transform':'translateX(-160%)',
        },
      },'trans-x3': {
        '0%': {
            'transform':'translateX(460%)',
        },
        '100%': {
          'transform':'translateX(-130%)',
      },
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
