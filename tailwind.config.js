module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#C0DAD6',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}