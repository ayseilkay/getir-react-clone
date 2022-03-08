module.exports = {
  mode:'jit',
  purge:['./src/**/*.{js,jsx,ts,tsx}','./public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'brand-color': "#5d3ebc"
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
