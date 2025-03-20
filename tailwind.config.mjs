/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',

  content: [
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
    './node_modules/astro-boilerplate-components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '400px',
      },
      aspectRatio: {
        banner: '3 / 1',
        portrait: '2 / 3',
        "portrait-3-4": '3 / 4',
        landscape: '9 / 16',
        product: '250 / 334',
      },
      fontFamily: {
        lora: '"Lora Variable"',
        urbanist: 'Urbanist Variable'
      },
      animation: {
        'fade-in': 'fade-in 0.1s ease-in',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      colors: {
        primary: '#fff',
        secondary: '#eff2ed',
        "dark-primary": '#111',
        "dark-secondary": '#000',
        raw_white: '#eff2ed',
        amatista: '#9E5C99',
        golden: '#e5ae5e',
        green_forest: '#20B2AA',
        midnight_green: {
          DEFAULT: '#003a42',
          900: '#000c0d',
          800: '#00171b',
          700: '#002328',
          600: '#002f35',
          500: '#003a42',
          400: '#064138',
          300: '#0B7666',
          200: '#4eeaff',
          100: '#a6f5ff',
        },
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
      },
    },
  },
}
