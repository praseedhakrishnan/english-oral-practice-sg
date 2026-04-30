/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: {
          50: '#f0faf5',
          100: '#d4f0e4',
          200: '#aadec9',
          300: '#7BC8A4',
          400: '#52B788',
          500: '#3a9e72',
          600: '#2d7a58',
        },
        coral: {
          50: '#fff3f0',
          100: '#ffe0d9',
          200: '#ffbfb3',
          300: '#FF8A70',
          400: '#ff6a4d',
          500: '#e84e2e',
        },
        primary: {
          50: '#eef4fb',
          100: '#cde0f4',
          200: '#9dc3e9',
          300: '#6B9FD4',
          400: '#4A90D9',
          500: '#3579c8',
          600: '#2861a8',
        },
      },
    },
  },
  plugins: [],
}
