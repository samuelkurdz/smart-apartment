module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateColumns: {
        'map-container': '400px 1fr',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};