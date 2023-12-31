/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yonder': '#4369B2',
        'united': '#5688E3',
        'queen': '#3E62A5',
      },
      fontFamily: {
        'body': ['Gill Sans MT', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

