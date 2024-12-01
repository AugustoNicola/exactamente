export default () => ({
    estados: [
		{
			linea: 5,
			contexto: "¡Comenzá a Verde{ejecutar} para ver Celeste{comentarios}!",
			variables: {
				"aaa": "3.3",
				"listaEnlazada": "[2, 4, 2]"
			},
			variablesAlteradas: {
				"aaa": false,
				"listaEnlazada": true
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					1: {id: "1", label: "Gus", estilo: "gris", x: 60.0, y: 35.0},
					2: {id: "2", label: "A", estilo: "gris", x: 30.0, y: 50.0},
					3: {id: "3", label: "C", estilo: "gris", x: 70.0, y: 70.0},
					4: {id: "4", label: "Mati", estilo: "gris", x: 80.0, y: 20.0}
				},
				aristas: [
					{fuente: 1, destino: 2, label: "3", estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: "5", estilo: "gris", dirigido: false},
					{fuente: 3, destino: 2, label: "1", estilo: "gris", dirigido: false},
					{fuente: 4, destino: 1, label: "9", estilo: "gris", dirigido: false}
				]
			}
			
		}
	]
})