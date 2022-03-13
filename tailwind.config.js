module.exports = {
  mode:'jit',
  purge:['./src/**/*.{js,jsx,ts,tsx}','./public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing:{
        '0.1':'0.063rem'
      },
      backgroundImage:{
        'mobile-app':'url(https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png)'
      },
      colors:{
        'brand-color': "#4c3398",
        'primary-brand-color': "#5d3ebc",
        'secondary-brand-color': "#7849f7",
        'primary-button-color':"#ffd300",
        'purple-light':"#dbdbff",
        'color-gray':'#697488',
        'color-black':'#191919'
      },
      fontSize:{
        'x15':'0.938rem',
        'x18':'1.125rem',
        'x13':'0.813'
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
