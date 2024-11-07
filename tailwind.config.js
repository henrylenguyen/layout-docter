/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#029CF6',
        secondary: '#032184',
        heading: '#FFDE05',
        light: '#F5F5F5',
        greenLight: '#07F9FE'
      },
      screens: {
        ssm: {
          min: '320px',
          max: '376px'
        },
        sm: {
          min: '377px',
          max: '480px'
        },
        md: {
          min: '481px',
          max: '768px'
        },
        lg: {
          min: '769px',
          max: '1024px'
        },
        xl: {
          min: '1025px',
          max: '1280px'
        },
        '2xl': {
          min: '1281px',
          max: '1536px'
        },
        '3xl': {
          min: '1537px',
          max: '1792px'
        }
      }
    }
  },
  plugins: []
}
