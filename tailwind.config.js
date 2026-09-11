/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F4F1E8',
        forest: '#10271C',
        olive: '#7C8B61',
        sage: '#A9B59A',
      },
      fontFamily: {
        display: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 12px 40px rgba(16, 39, 28, 0.08)',
      },
    },
  },
  plugins: [],
};
