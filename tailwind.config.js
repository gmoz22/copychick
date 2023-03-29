const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        // primary: '#EE0059',
        primary: '#EC4899', // text-pink-500
        primary_70: 'rgba(237,74,155,0.7)', // text-pink-500
        secondary: '#A3105A',
        // tertiary: '#FF4DA6',
        tertiary: '#DB2777', // text-pink-600
        lightest: '#FFB3DA',
        white: '#FFFFFF',
        black: '#000000',
        blue_home_i_do_copy: '#63E1E5FF',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        arimo: ['Arimo']
      },
    },
    backgroundImage: {
      'home-splash-copy-brand-strategy': "url('img/home/splash_copy-brand-strategy.jpg')",
      'home-splash-jen-pic': "url('img/home/splash_jen-profile-pic.jpg')",
      'home-splash-hire-copychick': "url('img/home/splash_hire-copychick.jpg')",
      'home-oprah-quote': "url('img/home/quote-oprah.png')",
      'home-delegate-for-success': "url('img/home/delegate-for-success.png')",
      'home-copychick-perks': "url('img/home/copychick-perks.jpg')",
      'home-diy-hurts': "url('img/home/diy-hurts.jpg')",
    },
    safelist: [
      // 'text-2xl',
      // 'text-3xl',
      {
        pattern: /w-*/,
        pattern: /h-*/,
        // pattern: /bg-(red|green|blue)-(100|200|300)/,
      },
    ],
  },
  plugins: [],
}
