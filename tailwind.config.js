import ('tailwindcss').Config
export default {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        primaryTitle: '#EF9595',
        primaryContent: '#EFB495',
        primarySubcontent: '#EFD595',
        primaryBase: '#fffa9d',
        primaryAccent: '#EBEF95',
        primaryBg: '#f6f6f6',
      }
    },
  },
  plugins: [],
}

