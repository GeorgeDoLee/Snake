/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        '25': 'repeat(25, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        '25': 'repeat(25, minimax(0, 1fr))',
      }
    },
  },
  plugins: [],
}