/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#28293E',
        'custom-orange': '#EF6D58',
        'custom-border': '#3A3C56',
        'light-pink': '#FDF0E9',
        'light-grey': '#F3D1BF',
        'light-brown': '#F9E5DA',
        'custom-brown': '#391400',
        'orange-border': '#FF7932'
      },
      boxShadow: {
        'button-contact': '0px 3px 9px 0px rgba(57, 20, 0, 0.08)',
        'skill-box': '0px 0px 15px 1px rgba(0, 0, 0, 0.75)'
      },
    },
  },
  plugins: [],
}

