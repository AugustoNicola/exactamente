export default () => ({
    estados: [
		{
			linea: 0,
			contexto: "Sección vacía.",
			variables: {
			},
			variablesAlteradas: {
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: "A", estilo: "gris", x: 60.0, y: 35.0},
					1: {id: "1", label: "B", estilo: "gris", x: 30.0, y: 50.0},
				},
				aristas: [
					{fuente: 0, destino: 1, label: "W", estilo: "gris", dirigido: false},
				]
			}
		}
	]
})