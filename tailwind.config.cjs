/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    screens: {
      '2xl': { min: '1535px' },
      // => @media (min-width: 1535px) { ... }

      xl: { min: '1279px' },
      // => @media (min-width: 1279px) { ... }

      lg: { min: '1023px' },
      // => @media (min-width: 1023px) { ... }

      md: { min: '767px' },
      // => @media (min-width: 767px) { ... }

      sm: { min: '500px' },
      // => @media (min-width: 639px) { ... }

      phone: { min: '0px', max: '700px' },
      // => @media (min-width: px and max-width: 650px) { ... }
      tablet: { min: '700px', max: '1300px' },
      // => @media (min-width: 650px and max-width: 1200px) { ... }
      laptop: { min: '1300px' },
      // => @media (min-width: 1200px) { ... }
    },
    colors: {
      transparent: 'transparent',

      accent: '#FC3A79',
      secondary: '#FE572E',
      'light-BG': '#F3F2F1',
      white: '#fff',
      black: {
        100: '#261F22',
        75: 'rgba(38, 31, 34, 0.75);',
        50: 'rgba(38, 31, 34, 0.50);',
        25: 'rgba(38, 31, 34, 0.25);',
        10: 'rgba(38, 31, 34, 0.1);',
      },
    },
    fontFamily: {
      josefin: ['Josefin Sans', 'Roboto'],
      montserrat: ['Montserrat', 'Roboto'],
    },
    fontSize: {
      h1: ['119px', '144px'],
      'h1-tablet': ['102px', '132px'],
      'h1-phone': ['55px', 'auto'],
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
      'menu-item': ['15px', '24px'],
      'button-text': ['21px', '30px'],
      'button-text-tablet': ['18px', '26px'],
    },
    backgroundImage: {
      brandGradient: 'linear-gradient(90deg, #FE572E 0%, #FF4C80 100%);',
    },
    boxShadow: {
      'button-shadow':
        '0px 100px 80px rgba(38, 31, 34, 0.0167767), 0px 50.0488px 40.0391px rgba(38, 31, 34, 0.0243888), 0px 30.1471px 24.1177px rgba(38, 31, 34, 0.0300374), 0px 19.3198px 15.4559px rgba(38, 31, 34, 0.035), 0px 12.5216px 10.0172px rgba(38, 31, 34, 0.0399626), 0px 7.88218px 6.30574px rgba(38, 31, 34, 0.0456112), 0px 4.5288px 3.62304px rgba(38, 31, 34, 0.0532233), 0px 1.99324px 1.59459px rgba(38, 31, 34, 0.07);',
    },

    extend: {},
  },
  plugins: [],
}
