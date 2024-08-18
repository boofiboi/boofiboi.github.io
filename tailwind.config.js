/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['"Inter"', 'sans-serif'],
        'raleway': ['"Raleway"', 'sans-serif'],
        'baloo': ['"Baloo 2"', "sans-serif"],
      },
      colors:{
        "hostblue": "#B1E3FF",
        "hostred": "#4d151d",
        "embed":"#3A3A3A"
      }
    },
  },
  plugins: [],
}