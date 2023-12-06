/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: {
    files: ["./**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
    transform: (content) => content.replace(/taos:/g, ''),
  },  
  theme: {
    extend: {
      screens:{
        'xs': '575px'
      },
      colors:{
        grayDance: {
          100: '#e8e8e8',
          80: '#868484',
          60: '#c0b9b1'
        }
      },
      transitionProperty: {
        'mixBlend': 'mix-blend',
        'height': 'height',
      },
      fontFamily: {
        'nobel': ['nobel', 'black'],
        'inter': ['Inter', 'sans-serif'],
        'sofia': ['"Sofia Sans Condensed"', 'sans-serif'],
      },
      keyframes: {
        home: {
          '100%': { transform: 'translateX(-3ch)', transform: 'translateY(-2ch)', transform: 'scale(0.5)' },
        },
        dance: {
          '0%': { color: '#e8e8e8', 'mix-blend-mode': 'normal'},
          '100%': { color: '#000', 'mix-blend-mode': 'lighten'}
        },
        danceShrink: {
          '100%': { 'height': '200px', 'margin-top': '50px'}
        },
        smDanceShrink: {
          '100%': { 'height': '180px', 'margin-top': '50px'}
        },
        mdDanceShrink: {
          '100%': { 'height': '250px', 'margin-top': '50px'}
        },
        lgDanceShrink: {
          '100%': { 'height': '350px', 'margin-top': '50px'}
        },
        xl2DanceShrink: {
          '100%': { 'height': '400px', 'margin-top': '50px'}
        },
        hide: {
          '0%': { opacity: '1'},
          '100%': { opacity: '0'}
        },
        show: {
          '0%': { opacity: '0'},
          '100%': { opacity: '1'}
        },
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
	plugins: [
    require('tailwind-hamburgers'),
    require('@kamona/tailwindcss-perspective'),
    require('@tailwindcss/aspect-ratio'),
    require("tw-elements/dist/plugin"),
    require('tailwindcss-animated'),
    require('tailwindcss-intersect'),
    require('tailwind-scrollbar'),
	],
  safelist: [
    '!duration-0',
    '!delay-0',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
}