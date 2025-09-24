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
        'brand-blue': '#2E6982', // Primary (base)
        'brand-blue-light': '#4F89A2', // Lighter Tint
        'brand-blue-dark': '#1D4E63', // Darker Shade
        'brand-blue-soft': '#E4EEF1', // Soft Tint
        'brand-orange': '#CC7736', // Accent (base)
        'brand-orange-light': '#E28D4C', // Lighter Tint
        'brand-orange-dark': '#A85F24', // Darker Shade
        'brand-orange-soft': '#F7E4D4', // Soft Tint
        'brand-dark': '#0F172A', // Background Dark
        'brand-light': '#F9FAFB', // Background Light
        'text-primary': '#111827',
        'text-secondary': '#6B7280',
        'divider': '#D1D5DB',
        'success': '#10B981',
        'warning': '#FACC15',
        'error': '#DC2626',
      },
      boxShadow: {
        glow: '0 0 60px rgba(30, 77, 143, 0.35)',
      },
    },
  },
  plugins: [],
}
