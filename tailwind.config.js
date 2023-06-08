module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  purge:{
  enabled: true,
    options:{
    keyframes:true,
      fontFace:true
    }
  },
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {},
  },
  plugins: [],
}
