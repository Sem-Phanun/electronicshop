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
      small: "430px",
      tablet: "768px",
    }
  },
  plugins: [],
}

