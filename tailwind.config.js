/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#007BFF', // Blue
          light: '#66B2FF',
          dark: '#0056B3',
        },
        secondary: '#6C757D', // Gray
        accent: {
          orange: '#FFA500', // Orange
          green: '#28A745',  // Green
        },
        neutral: {
          light: '#F8F9FA', // Light Gray
          dark: '#212529',  // Dark Gray
        },
        highlight: {
          yellow: '#FFC107', // Yellow
          red: '#DC3545',    // Red
        },
      }
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

