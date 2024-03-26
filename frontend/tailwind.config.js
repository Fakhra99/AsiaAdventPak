/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'architects-daughter': ['"Architects Daughter"', 'cursive'],
      },
      colors: {
        'custom-yellow': '#F9F4F0',
        'customBlue': '#202F59',
      },
    },
  },
  plugins: [],
};
