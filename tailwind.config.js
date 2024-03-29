/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      rotate:{
        '270':'270deg',
        '90':'90deg',
      },
      colors: {
        Base: '#EDF2F4',
        White: '#FFFFFF',
        Green : '#90C53F',
        Light_Green: '#cefad0',
        Primary_Red: '#D90429',
        Primary_Grey: '#2B2D42',
        Secondary_Red: '#EF233C',
        Secondary_Grey: '#8D99AE',
        Blue:'#7dd3fc',
        warn: '#FFCCCB',
        Orange: '#FF7817',
        GradOrange: '#f6af73',
        Dark_Green:'#90C53F',
        Grad_Blue: '#1886EA',
        Grad_Green:'#b8e17c',
        Grad_Orange:'#E47A3E',
        Sky_Blue:'#1EA6C6',
        Grad:'gradient-to-r from-purple-400 to-pink-600'
      },
      
      extend: {
        fontFamily: {
          'oswald': ['Oswald', 'sans-serif'],
          'maven': ['Maven Pro', 'sans-serif'],
        },
      },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
}
