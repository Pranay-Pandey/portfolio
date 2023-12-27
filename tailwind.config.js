/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,vue,css}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'sevillana': ['Sevillana', 'cursive'],
        'carattere': ['Carattere', 'cursive']
      }
    },
  },
  plugins: [],
}