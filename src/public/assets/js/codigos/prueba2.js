export default () => ({
	titulo: "Algoritmo de Dijkstra",
	input: "#x{G} grafo pesado, #x{v} vértice",
	output: "#x{D} vector de distancias",
	linkExplicacion: "/layouts/conceptos/dijkstra.html",
	cantidadCasos: 3,
    lineas: [
		"inicializar arreglo ~Gris{distancia} en ~Violeta{Inf}",
		"~Gris{distancia}[~Gris{v}] = ~Violeta{0}",
		"inicializar cola ~Gris{Q} vacía",
		"agregar ~Gris{v} a ~Gris{Q}",
		"mientras ~Gris{Q} no esté ~Violeta{vacío}:",
		"  ~Celeste{u} = vertice en ~Gris{Q} con menor ~Gris{distancia}[~Celeste{u}]",
		"  remover ~Celeste{u} de ~Gris{Q}",
		"  para cada ~Verde{vecino a} de ~Celeste{u} que esté en ~Gris{Q}:",
		"    si ~Gris{distancia}[~Celeste{u}] + peso[~Celeste{u},~Verde{a}] < ~Gris{distancia}[~Verde{a}]:",
		"      ~Gris{distancia}[~Verde{a}] = ~Gris{distancia}[~Celeste{u}] + peso[~Celeste{u},~Verde{a}]",
		"devolver ~Gris{distancia}"
	]
})