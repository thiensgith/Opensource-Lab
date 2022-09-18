/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'thumnails-png': "url('../thumnails.png')"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],  
  variants: {
    scrollbar: ['rounded']
  }
}
