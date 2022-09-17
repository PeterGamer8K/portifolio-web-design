/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
      phone: { max: '600px' },
      // => @media (max-width: 600px) { ... }
      tablet: { max: '1200px' },
      // => @media (max-width: 1200px) { ... }
      laptop: { max: '1800px' },
    },
    colors: {
      transparent: 'transparent',
      accent: '#FC3A79',
      secondary: '#FE572E',
      lightBG: '#F3F2F1',
      black: '#261F22',
    },
    fontFamily: {
      josefin: ['Josefin Sans', 'Roboto'],
      montserrat: ['Montserrat', 'Roboto'],
    },

    extend: {},
  },
  plugins: [],
}
