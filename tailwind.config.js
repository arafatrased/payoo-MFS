/** @type {import('tailwindcss').Config} */
module.exports = {
  content:['*',
    './pages/**/*.{html,js}',
    './home.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

