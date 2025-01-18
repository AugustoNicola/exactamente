import Alpine from 'https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/module.esm.js';

document.addEventListener('alpine:init', () => {
	document.querySelectorAll('.markdown').forEach(paragraph => {
		paragraph.innerHTML = paragraph.innerHTML
			.replace(/\*(.*?)\*(?!\*)/g, (_, match) => `<span class="font-bold">${match}</span>`) // bold
			.replace(/__(.*?)__(?!__)/g, (_, match) => `<span class="italic">${match}</span>`) // italic
			.replace(/`(.*?)`(?!`)/g, (_, match) => `<span class="font-exCodigo">${match}</span>`) // mono
			;	
	});
})

window.Alpine = Alpine;
Alpine.start();