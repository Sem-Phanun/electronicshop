/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
    },
    screens: {
      small: "320px",
      mobileM: "375px",
      mobileL: "425px",
      tablet: "768px",
    }
  },
  plugins: [],
}

