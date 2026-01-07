/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arimo', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        ui: ['Montserrat', 'sans-serif'],
      },
      colors: {
        axilon: {
          yellow: '#FFB600',
          black: '#1a1a1a',
          dark: '#111111',
          gray: '#f5f5f5'
        }
      }
    },
  },
  plugins: [],
}
