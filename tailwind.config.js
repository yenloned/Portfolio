/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './comps/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'background': {
          100: '#161616',
          200: '#1c1c1c',
          300: '#202020',
          400: '#0c0c0c',
        },
        'black' : '#000000',
        'white' : '#FFFFFF'
      }
    },
    fontFamily: {
      family_header1: ['"Kdam Thmor Pro"', 'sans-serif'],
      family_header2: ["'Ubuntu'", 'sans-serif'],
      family_header3: ["'Kanit'", 'sans-serif'],
      family_body1:["'Rubik'", 'sans-serif'], //thick
      family_body2:["'Barlow'", 'sans-serif'], //thin
      family_body3:["'Manrope'", 'sans-serif'], //thicker
      family_body4:["'Roboto Condensed'", 'sans-serif'],
    }
  },
  plugins: [require("daisyui")],
}
