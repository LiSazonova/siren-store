/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#747474',
        white: '#FFFFFF',
        black: '#000000',
        red: '#FF0000',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        desktop: '0px',
      },
    },
  },
  plugins: [],
};
