/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'brand-blue': '#1E4D8F',
        'brand-orange': '#F47C20',
        'brand-dark': '#050B17',
        'brand-light': '#F6F9FC',
      },
      boxShadow: {
        glow: '0 0 60px rgba(30, 77, 143, 0.35)',
      },
    },
  },
  plugins: [],
}
