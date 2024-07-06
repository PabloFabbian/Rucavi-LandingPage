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
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
        '3000': '3000ms',
        '5000': '5000ms', // 5 seconds
        '10000': '10000ms', // 10 seconds
      },
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

