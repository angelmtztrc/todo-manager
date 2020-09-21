module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ['./src/*.js', './src/components/**/*.js', './src/hooks/**/*.js'],
  theme: {
    extend: {}
  },
  variants: {},
  plugins: []
};
