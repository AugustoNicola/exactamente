//import getData from './data/listado.js'

document.addEventListener('alpine:init', () => {
	console.log("Rizzler")
	Alpine.data('listado', () => ({
		listadografos: [
			{
				titulo: "BFS",
				url: "/contenidos/bfs.html",
				imagen: "thumbnail_bfs.png"
			},
			{
				titulo: "DFS",
				url: "/contenidos/dfs.html",
				imagen: "thumbnail_dfs.png"
			},
			{
				titulo: "Dijkstra",
				url: "/contenidos/dijkstra.html",
				imagen: "thumbnail_dijkstra.png"
			},
			{
				titulo: "Edmonds-Karp",
				url: "/contenidos/edmondskarp.html",
				imagen: "thumbnail_edmondskarp.png"
			},
			{
				titulo: "Kruskal",
				url: "/contenidos/kruskal.html",
				imagen: "thumbnail_kruskal.png"
			}
		],
		listadosorting: [
			{
				titulo: "Merge Sort",
				url: "/contenidos/mergesort.html",
				imagen: "thumbnail_mergesort.png"
			},
			{
				titulo: "Radix Sort",
				url: "/contenidos/radixsort.html",
				imagen: "thumbnail_radixsort.png"
			}
		]
	}))
	//console.log(Alpine)
	console.log("Gyatt")
})