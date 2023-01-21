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
    extend: {},
  },
  plugins: [],
}
