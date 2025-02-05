/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a472a',
          light: '#2a5a3c',
          dark: '#0d2415',
        },
        secondary: {
          DEFAULT: '#e9f1ec',
          dark: '#c8d8cf',
        },
      },
    },
  },
  plugins: [],
};