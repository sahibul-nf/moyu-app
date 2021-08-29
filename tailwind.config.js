module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        outline: "0 0 0 1px rgba(66, 153, 225, 0.5)",
        bg: "0 4px 25px 0 rgba(0, 0, 0, 0.15)"
      },
      colors: {
        // "orange-button": "#FF872E",
        "green-button": "#1ABC9C",
        "purple-button": "#4C52F8",
        "purple-hover": "#4C52F8",
        "purple-hover-stroke": "#8286FF",
        "purple-progress": "#3B41E3",
        "black-font": "#223762",
        "gray-bg": "#EAF1FC",
      },
      borderRadius: {
        20: "20px",
      },
      loading: {
        color: 'blue',
        height: '5px'
      },
    },
  },
  fontFamily: {
    sans: ["Poppins", "sans-serif"],
  },
  loading: {
    color: 'blue',
    height: '5px'
  },
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
