/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      colors: {
        Base: '#EDF2F4',
        White: '#FFFFFF',
        Primary_Red: '#D90429',
        Primary_Grey: '#2B2D42',
        Secondary_Red: '#EF233C',
        Secondary_Grey: '#8D99AE',
      },
      
      extend: {
        fontFamily: {
          'oswald': ['Oswald', 'sans-serif'],
          'maven': ['Maven Pro', 'sans-serif'],
        },
      },
  },
  plugins: [],
}
