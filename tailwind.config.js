/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    escreens: {
      sm: '480px',
      // md: '768px',
      // xl: '1440px',
    },
    colors: {
      forestGreen: '#1C7933',
      lightGreen: '#ECF99C',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {}
  },
  plugins: [],
}
