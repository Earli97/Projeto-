/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        primary: {
          50: '#e6eef4',
          100: '#ccdde9',
          200: '#99bbd3',
          300: '#6699be',
          400: '#3377a8',
          500: '#1a5276',
          600: '#15425e',
          700: '#103147',
          800: '#0a212f',
          900: '#051018',
        },
        secondary: {
          50: '#fef9e7',
          100: '#fdf3cf',
          200: '#fbe79f',
          300: '#f9db6f',
          400: '#f7cf3f',
          500: '#f1c40f',
          600: '#c19d0c',
          700: '#917609',
          800: '#604e06',
          900: '#302703',
        },
      },
    },
  },
  plugins: [],
}