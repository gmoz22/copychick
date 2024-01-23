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
        secondary: '#A3105A',
        // tertiary: '#FF4DA6',
        tertiary: '#DB2777', // text-pink-600
        lightest: '#FFB3DA',
        white: '#FFFFFF',
        lightyellow: '#FCE38A',
        gold: '#F4BF2A',
        black: '#000000',
        blue_home_i_do_copy: '#63E1E5FF',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        arimo: ['Arimo', ...defaultTheme.fontFamily.sans],
        bodoni: ['Bodoni Moda', ...defaultTheme.fontFamily.serif],
        luckiestguy: ['Luckiest Guy', ...defaultTheme.fontFamily.serif]
      },
      borderWidth: {
        8.5: '12px',
        12: '24px',
      },
      fontSize: {
        '10xl': '144px',
        '11xl': '160px',
        '12xl': '176px',
      }
    },
    backgroundImage: {
      'home-splash-copy-brand-strategy': "url('img/home/splash_copy-brand-strategy.jpg')",
      'home-splash-jen-pic': "url('img/home/splash_jen-profile-pic.jpg')",
      'home-splash-hire-copychick': "url('img/home/splash_hire_copychick.jpg')",
      'home-splash-hire-copychick-mobile': "url('img/home/splash_hire_copychick_mobile.jpg')",
      'home-splash-hire-copychick-bullets': "url('img/home/splash_hire_copychick_bullets.jpg')",
      'home-oprah-quote': "url('img/home/quote-oprah.jpg')",
      'home-splash-superpowers': "url('img/home/splash-superpowers.jpg')",
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
