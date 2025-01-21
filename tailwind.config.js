/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Martian_Mono": ['"Martian Mono"', ...defaultTheme.fontFamily.serif],
        "Inter": ['"Inter"', ...defaultTheme.fontFamily.serif],
      },
      colors : {
        "neutral50" : "#FAF5F3",
        "neutral200" : "#E6E1DF",
        "neutral700" : "#385159",
        "neutral900" : "#062630", 
        "salmon50" : "#FFF5EF",
        "salmon100" : "#FFE2D1",
        "salmon500" : "#FEA36F"
      },
      borderRadius: {
        xs : '4px',
        xm : '6px',
        sm : '8px',
        base  : '10px',
         lg : '12px',  
         xl : '16px',
         '2xl' : '20px',
         '3xl' : '24px',
      },
      spacing : {
        1 : '2px',
        2 : '4px',
        3 : '6px',
        4 : '8px',
        5 : '12px',
        6 : '16px',
        7 : '20px',
        8 : '24px',
        9 : '32px',
        10 : '40px',
        11 : '48px',
        12 : '64px',
        13 : '80px'
      },
      fontSize : {
        '4xlD' : '82px',
        '3xlM' : '38px',
        '3xlD' : '50px',
        '2xlD' : '34px',
        'xlD' : '24px',
        lgD: '20px',
        baseD : '18px',
        baseM : '16px',
        smD : '14px'
      },
      backgroundImage : {
        patternLight : "url('src/assets/pattern-light-bg.svg')",
        patternDark : "url('src/assets/pattern-dark-bg.svg')",
      },
      screens : {
        sm : '768px',
        lg: '1440px'
      }

    },
  },
  plugins: [],
}