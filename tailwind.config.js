module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        enseada: '#003E51'
      },
      
    },
    fontFamily:{
      body: ['Lato', ]
    },

    backgroundImage:{
      'bannerTop': "url('/banner_top.gif')",
      'banner2': "url('/banner2.png')",
      'banner3': "url('/banner3.png')",
      'banner4': "url('/banner4.png')",
      'banner5': "url('/banner5.png')",
      'banner6': "url('/banner6.png')",
      'placas': "url('/placas.png')",
      'logo': "url('/logo.png')"
    }
  },
  plugins: [],
}
