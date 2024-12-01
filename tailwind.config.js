/** @type {import('tailwindcss').Config} */
import tailwindcssAnimated from 'tailwindcss-animated';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondaryDarkColor: '#1F2937',
        sectionColor: '#1d4ed7'
      },
    },
  },
  plugins: [
    tailwindcssAnimated
  ],
}