/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Base
        crema: '#FBF8F3',   // "Crema Llama" — fondo, papel de recetario
        grafito: '#262626', // texto principal / líneas de interfaz
        // Contraste — geografía gastronómica
        terracota: '#C86D51', // Terracota Valle
        verde: '#3E5C43',     // Verde Sultana / Amazonía
        // Acento — interacción y funcionalidad
        maracuya: '#E6A135', // Amarillo Maracuyá / Mocochinchi
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'], // titulares y marca
        body: ['"Inter"', 'sans-serif'],                // cuerpo de texto
        mono: ['"JetBrains Mono"', 'monospace'],        // fichas técnicas / etiquetas
      },
    },
  },
  plugins: [],
};
