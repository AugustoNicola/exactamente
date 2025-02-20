module.exports = {
  content: [
    './public/**/*.html'
  ],
  safelist: [
    'mr-3',
    'text-exComentario',
    'text-exRojo',
    'text-exNaranja',
    'text-exAmarillo',
    'text-exVerde',
    'text-exCeleste',
    'text-exIndigo',
    'text-exVioleta',
    'text-exGris',
    'text-exGrisOscuro',
    'text-exVar',
    'text-exCon',
    'text-exValor',
    'text-exKey',
    'text-exStruct',
    'hidden',
    'italic'
  ],
  theme: {
    extend: {
      colors: {
        'exRojo': "#ff3838",
        'exNaranja': "#ff8b44",
        'exAmarillo': "#efd50e",
        'exVerde': "#67cbb0",
        'exCeleste': "#008296",
        'exIndigo': "#4373e3",
        'exVioleta': "#8056a2",
        'exGris': "#d6d6d6",
        'exClaro': "#f0fafa",
        'exOscuro': "#0a1f1f",
        'exVerdeOscuro': "#387467",
        'exFondoOscuro': "#2c554a",
        'exGrisOscuro': "#ababab",
        'exComentario': "#6b6b6b",
        'exVar': '#67cbb0',
        'exCon': '#88d9f2',
        'exKey': '#ffffff',
        'exValor': '#d2879b',
        'exStruct': '#f9bc41'
        
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
