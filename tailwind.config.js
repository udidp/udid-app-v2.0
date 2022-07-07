module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#00a054',
        gray: {
          DEFAULT: '#c5c5c5',
          '#1c1c1c': '#1c1c1c'
        },
        purple: {
          DEFAULT: '#8D73C2'
        },
        green: {
          '#43CF7C': '#43CF7C'
        }
      }
    },
    screens: {
      sm: '640px',

      md: '768px',

      lg: '768px',

      l: '1024px',

      xl: '1280px',
      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    borderColor: (theme) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.300', 'currentColor'),
      '#00e3e3': '#00e3e3'
    })
  },
  variants: {
    extend: {}
  },
  plugins: []
}
