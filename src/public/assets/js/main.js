import listado from './data/listado.js';
import Alpine from 'https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/module.esm.js';

document.addEventListener('alpine:init', () => {
	Alpine.data('listado', listado)
})

window.Alpine = Alpine;
Alpine.start();