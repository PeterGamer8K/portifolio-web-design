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
    fontSize: {
      h1: ['119px', '144'],
      'h1-tablet': ['102px', '132px'],
      'h2-phone': ['55px', 'auto'],
      h2: ['84px', '122px'],
      'h2-tablet': ['72px', '100px'],
      'h2-phone': ['44px', '56px'],
      h3: ['59px', '72px'],
      'h3-tablet': ['51px', '72px'],
      'h3-phone': ['35px', '48px'],
      h4: ['42px', '48px'],
      'h4-tablet': ['36px', '48px'],
      'h4-phone': ['28px', '40px'],
      h5: ['30px', '40px'],
      'h5-tablet': ['25px', '32px'],
      'h5-phone': ['23px', '28px'],
      h6: ['21px', '30px'],
      'h6-tablet': ['18px', '24px'],
      paragraph: ['21px', '30px'],
      'paragraph-tablet': ['18px', '26px'],
    },

    extend: {},
  },
  plugins: [],
}
