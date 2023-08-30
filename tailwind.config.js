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
        primary: '#FF3FCB', // text-pink-500
        primary_70: 'rgb(255,63,203, 0.7)', // text-pink-500
        primary_50: 'rgb(255,63,203, 0.5)',
        primary_30: 'rgb(255,63,203, 0.3)',
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
      'home-splash-hire-copychick': "url('img/home/splash_hire_copychick.png')",
      'home-splash-hire-copychick-bullets': "url('img/home/splash_hire_copychick_bullets.png')",
      'home-oprah-quote': "url('img/home/quote-oprah.png')",
      'home-copychick-perks': "url('img/home/copychick-perks.jpg')",
      'home-diy-hurts': "url('img/home/diy-hurts.jpg')",
    },
    safelist: [
      {
        pattern: /w-*/,
        pattern: /h-*/,
      },
    ],
  },
  plugins: [],
}
