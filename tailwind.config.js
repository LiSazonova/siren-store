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
        DEFAULT: '20px', // Отступы для всех экранов
      },
      screens: {
        sm: '320px', // Минимальная ширина для мобильных
        md: '768px', // Для планшетов
        lg: '1228px', // Для десктопов
      },
    },
  },
  plugins: [],
};
