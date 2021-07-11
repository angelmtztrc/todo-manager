module.exports = {
  purge: ['./src/**/*.{ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  // mode: process.env.NODE_ENV ? 'jit' : undefined,
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
