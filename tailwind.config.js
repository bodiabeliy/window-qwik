/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'purple-light': '#8B5CF6',
        'purple-dark': '#4B3D6B',
        'gray-light': '#DEDEDE',
        'gray-medium': 'rgb(64, 64, 64)',
        'gray-bold':' rgb(23 23 23)',
        'gray-dark': '#171717',
      },
    },
  },
 
  plugins: [],
};