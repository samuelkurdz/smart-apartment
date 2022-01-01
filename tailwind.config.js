module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateColumns: {
        'map-container': '450px 1fr',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};