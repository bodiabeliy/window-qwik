/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'logo-mobile': "url('@/public/img/logo-mobile.png')"
      },
      colors: {
        'purple-light': '#8B5CF6',
        'purple-dark': '#4B3D6B',
        'gray-light': '#DEDEDE',
        'gray-medium': 'rgb(64, 64, 64)',
        'gray-bold':' rgb(23 23 23)',
        'gray-dark': '#171717',
        "bg-radial-center":"rgba(255, 48, 77, 1)",
        "bg-radial-out":"rgba(255, 48, 77, 0)"
      },
      blur: {
        "extra":"90px"
      }
    },
  },
 
  plugins: [],
};