/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7d1c7',
          300: '#a3b3a3',
          400: '#7d917d',
          500: '#607560',
          600: '#4c5e4c',
          700: '#3f4d3f',
          800: '#354035',
          900: '#2e372e',
        },
      },
    },
  },
  plugins: [],
};