/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#080d22",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "gray": "rgba(17, 25, 40, 0.75)",
      },
      fontFamily: {
        poppins: ["Poppins", 'sans-serif'],
      },
      backgroundImage: {
        'blue-purple': 'linear-gradient(90deg, rgba(173,49,255,1) 0%, rgba(78,84,255,1) 100%)',
      },
      keyframes: {
        'scroll-horizontal-icon': {
          '0%': { transform: 'translateX(80%)' },
          '100%': { transform: 'translateX(calc(-100% + 400px))' }, 
        },
        'scroll-horizontal': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'moveTop': {
          from : { marginTop: '0', opacity: '100%'},
          to : { marginTop: '-270px', opacity: '0%' }
        },
        'moveBottom': {
          from : { marginTop: '-270px', opacity: '0%' },
          to : { marginTop: '0', opacity: '100%' }
        },
      },
      animation: {
        'scroll-horizontal-icon': 'scroll-horizontal-icon 70s linear infinite',
        'scroll-horizontal': 'scroll-horizontal 40s linear infinite',
        'moveTop': 'moveTop 1s ease-in-out forwards',
        'moveBottom': 'moveBottom 1s ease-in-out forwards',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-blue-purple': {
          'background-image': 'linear-gradient(90deg, rgba(173,49,255,1) 0%, rgba(78,84,255,1) 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
      })
    }
  ],
}
