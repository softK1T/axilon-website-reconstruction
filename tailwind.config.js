/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#066aab',
        teal: '#4FBDC6',
        dark: '#32373c',
        gold: '#c9a962',
      },
    },
  },
  plugins: [],
}
