module.exports = {
  content: [
    './public/**/*.html'
  ],
  safelist: [
    'mr-3',
    'text-exComentario',
    'text-exVioleta',
    'text-exGris'
  ],
  theme: {
    extend: {
      colors: {
        'exCeleste': "#008296",
        'exVerde': "#67cbb0",
        'exClaro': "#f0fafa",
        'exOscuro': "#0a1f1f",
        'exGris': "#d6d6d6",
        'exVerdeOscuro': "#387467",
        'exFondoOscuro': "#2c554a",
        'exGrisOscuro': "#ababab",
        'exComentario': "#6b6b6b",
        'exVioleta': "#8056a2"
      },
      fontFamily: {
        exTitulos: ['Raleway', 'serif'],
        exTexto: ['Rubik', 'sans-serif'],
        exCodigo: ['JetBrains Mono', 'monospace']
      }
    },
  },
  plugins: [],
};
