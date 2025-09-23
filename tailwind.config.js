/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // include all React components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  extend: {
  backgroundImage: {
    'hero': "url('/src/assets/hero.jpg')",
    'students': "url('/src/assets/students.jpg')",
    'college': "url('/src/assets/college.jpg')",
  },
  },
  
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // <- Make sure all src files are included
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
