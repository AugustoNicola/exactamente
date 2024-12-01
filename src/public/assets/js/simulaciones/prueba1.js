export default () => ({
    estados: [
		{
			linea: 0,
			contexto: "¡Comenzá a ~Celeste{ejecutar} para ver ~GrisOscuro{comentarios}!",
			variables: {
				"v": "1"
			},
			variablesAlteradas: {
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					1: {id: "1", label: "Gus", estilo: "gris", x: 60.0, y: 35.0},
					2: {id: "2", label: "Gon", estilo: "gris", x: 30.0, y: 50.0},
					3: {id: "3", label: "Mati", estilo: "gris", x: 70.0, y: 70.0},
					4: {id: "4", label: "Vicky", estilo: "gris", x: 80.0, y: 20.0}
				},
				aristas: [
					{fuente: 1, destino: 2, label: "3", estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: "5", estilo: "gris", dirigido: false},
					{fuente: 3, destino: 2, label: "1", estilo: "gris", dirigido: false},
					{fuente: 4, destino: 1, label: "9", estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 1,
			contexto: "Inicializamos el arreglo ~Gris{distancia} con todas sus posiciones en ~Violeta{Infinito}.",
			variables: {
				"v": "1",
				"distancia": "[]"
			},
			variablesAlteradas: {
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					1: {id: "1", label: "Gus", estilo: "gris", x: 60.0, y: 35.0},
					2: {id: "2", label: "Gon", estilo: "gris", x: 30.0, y: 50.0},
					3: {id: "3", label: "Mati", estilo: "gris", x: 70.0, y: 70.0},
					4: {id: "4", label: "Vicky", estilo: "gris", x: 80.0, y: 20.0}
				},
				aristas: [
					{fuente: 1, destino: 2, label: "3", estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: "5", estilo: "gris", dirigido: false},
					{fuente: 3, destino: 2, label: "1", estilo: "gris", dirigido: false},
					{fuente: 4, destino: 1, label: "9", estilo: "gris", dirigido: false}
				]
			}
		},
	]
})