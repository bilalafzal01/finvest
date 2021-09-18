const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      violet: {
        // theme('colors.violet.DEFAULT')
        DEFAULT: '#7C3AED',
      }
    },
    extend: {
      fontFamily: {
        primary: ['Ubuntu', ...fontFamily.mono],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
