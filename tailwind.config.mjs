/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F2ECDA',
        terracota: '#C1512F',
        charcoal: '#2B211B',
        mustard: '#C79A3E',
        ink: '#4A4038',
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
