/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Tsukimi Rounded', 'sans-serif'], // text
        serif: ['Anek Gujarati', 'serif'] // title
      },
      colors: {
        background:'var(--background)',
        button:'var(--button)',
        text:'var(--text-color)',
        hover:'var(--hover)',
        image:'var(--background-image)',
        border_color:'var(--border-color)',
        title:'var(--title)'
      }
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}

