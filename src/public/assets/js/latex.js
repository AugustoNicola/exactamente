// Configuracion de MathJax
window.MathJax = {
    tex: { inlineMath: [['\\(', '\\)'], ['$', '$']] },
    startup: {
        ready: () => {
            MathJax.startup.defaultReady();
            MathJax.typeset();
        }
    }
};
