export default () => ({
    codigo: [
		"inicializar arreglo ~Gris{distancia} en ~Violeta{Inf}",
		"inicializar cola ~Gris{Q} vacía",
		"agregar ~Gris{v} a ~Gris{Q}",
		"mientras ~Gris{Q} no esté ~Violeta{vacío}:",
		"  ~Celeste{u} = vertice en ~Gris{Q} con menor ~Gris{distancia}[~Celeste{u}]",
		"  remover ~Celeste{u} de ~Gris{Q}",
		"  para cada ~Verde{vecino v} de ~Celeste{u} que esté en ~Gris{Q}:",
		"    si ~Gris{distancia}[~Celeste{u}] + peso[~Celeste{u},~Verde{v}] < ~Gris{distancia}[~Verde{v}]:",
		"      ~Gris{distancia}[~Verde{v}] = ~Gris{distancia}[~Celeste{u}] + peso[~Celeste{u},~Verde{v}]",
		"devolver ~Gris{distancia}"
	]
})