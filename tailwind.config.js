/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        saira: ['"Saira Condensed"', 'sans-serif'],
      },
      colors: {
        deaf51: '#DEAF51',
        a07d: '#55A07D',
        cf4350: '#CF4350',
        c4b2: '#53C4b2',  
        a87834: '#A87834',
        fff29c: '#fff29c',
        a06EB1: '#A06EB1',
        e95991: '#e95991'
      },
    },
  },
  plugins: [],
}

