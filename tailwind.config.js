/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "conic-gradient(at right center, rgb(199, 210, 254), rgb(71, 85, 105), rgb(199, 210, 254))",
     },
    },
  },
  plugins: [],
}

