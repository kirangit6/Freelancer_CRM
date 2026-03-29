/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
 
  plugins: [],
  theme: {
  extend: {
    colors: {
      primary: "#7c3aed", // purple
    },
  },
}
};