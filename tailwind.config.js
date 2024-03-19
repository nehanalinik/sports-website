/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xsm: "325px",
      sm: "480px",
      smd: "600px",
      md: "768px",
      lg: "976px",
      xl: "1024px",
    },
    extend: {},
  },
  plugins: [],
}

