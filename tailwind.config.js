module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {},
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '5rem',
          xl: '6rem',
          '2xl': '8rem'
        }
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      textColor: ['visited']
    }
  },
  plugins: []
};
