const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
        '3000': '3000ms',
        '5000': '5000ms',
        '10000': '10000ms',
      },
      borderRadius: {
        '5xl': '12rem',
        '7xl': '16rem',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};