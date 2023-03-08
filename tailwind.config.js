/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      inter: ["Inter", 'sans-serif'],
      neue: ['Bebas Neue', 'cursive'],
    },
    container : {
      center : true,
      padding : `16px`,
    },
    
    extend: {
      colors : {
        // primary : '#14b8a6',
        // primary : ' rgb(23, 142, 146)',
        primary : ` rgb(21, 21, 21)`,
        text : '#949495',
        text2 : `rgba(148,148,149)`,
        dark : `#0f172a`,
        secondary : `#64748b`,
        body : `#42455a`,
        div : `rgb(32,32,34)`,
      },
      screens : {
        '2xl' : `1320px`,
      },
    },
  },
  plugins: [],

  
}