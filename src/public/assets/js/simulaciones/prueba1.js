export default () => ({
    estados: [
		{
			linea: 0,
			contexto: "¡Comenzá a ~Celeste{ejecutar} para ver ~GrisOscuro{comentarios}!",
			variables: {
				"v": "0"
			},
			variablesAlteradas: {
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: "Gus", estilo: "gris", x: 60.0, y: 35.0},
					1: {id: "1", label: "Gon", estilo: "gris", x: 30.0, y: 50.0},
					2: {id: "2", label: "Mati", estilo: "gris", x: 70.0, y: 70.0},
					3: {id: "3", label: "Vicky", estilo: "gris", x: 80.0, y: 20.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: "3", estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: "5", estilo: "gris", dirigido: false},
					{fuente: 2, destino: 1, label: "1", estilo: "gris", dirigido: false},
					{fuente: 3, destino: 0, label: "9", estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 1,
			contexto: "Inicializamos el arreglo ~Gris{distancia} con todas sus posiciones en ~Violeta{Infinito}.",
			variables: {
				"v": "0",
				"distancia": "[Inf, Inf, Inf, Inf]"
			},
			variablesAlteradas: {
				"v": false,
				"distancia": true
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: "Gus", estilo: "gris", x: 60.0, y: 35.0},
					1: {id: "1", label: "Gon", estilo: "gris", x: 30.0, y: 50.0},
					2: {id: "2", label: "Mati", estilo: "gris", x: 70.0, y: 70.0},
					3: {id: "3", label: "Vicky", estilo: "gris", x: 80.0, y: 20.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: "3", estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: "5", estilo: "gris", dirigido: false},
					{fuente: 2, destino: 1, label: "1", estilo: "gris", dirigido: false},
					{fuente: 3, destino: 0, label: "9", estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 2,
			contexto: "Configuramos la ~Gris{distancia} hasta ~Gris{v} en ~Violeta{0}.",
			variables: {
				"v": "0",
				"distancia": "[0, Inf, Inf, Inf]"
			},
			variablesAlteradas: {
				"v": false,
				"distancia": true
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: "Gus", estilo: "gris", x: 60.0, y: 35.0},
					1: {id: "1", label: "Gon", estilo: "gris", x: 30.0, y: 50.0},
					2: {id: "2", label: "Mati", estilo: "gris", x: 70.0, y: 70.0},
					3: {id: "3", label: "Vicky", estilo: "gris", x: 80.0, y: 20.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: "3", estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: "5", estilo: "gris", dirigido: false},
					{fuente: 2, destino: 1, label: "1", estilo: "gris", dirigido: false},
					{fuente: 3, destino: 0, label: "9", estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 3,
			contexto: "Inicializamos una cola ~Gris{Q} sin elementos.",
			variables: {
				"v": "0",
				"distancia": "[0, Inf, Inf, Inf]",
				"Q": "[]"
			},
			variablesAlteradas: {
				"v": false,
				"distancia": false,
				"Q": true
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: "Gus", estilo: "gris", x: 60.0, y: 35.0},
					1: {id: "1", label: "Gon", estilo: "gris", x: 30.0, y: 50.0},
					2: {id: "2", label: "Mati", estilo: "gris", x: 70.0, y: 70.0},
					3: {id: "3", label: "Vicky", estilo: "gris", x: 80.0, y: 20.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: "3", estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: "5", estilo: "gris", dirigido: false},
					{fuente: 2, destino: 1, label: "1", estilo: "gris", dirigido: false},
					{fuente: 3, destino: 0, label: "9", estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 4,
			contexto: "Agregamos ~Gris{v} a la cola ~Gris{Q}.",
			variables: {
				"v": "0",
				"distancia": "[0, Inf, Inf, Inf]",
				"Q": "[0]"
			},
			variablesAlteradas: {
				"v": false,
				"distancia": false,
				"Q": true
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: "Gus", estilo: "gris", x: 60.0, y: 35.0},
					1: {id: "1", label: "Gon", estilo: "gris", x: 30.0, y: 50.0},
					2: {id: "2", label: "Mati", estilo: "gris", x: 70.0, y: 70.0},
					3: {id: "3", label: "Vicky", estilo: "gris", x: 80.0, y: 20.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: "3", estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: "5", estilo: "gris", dirigido: false},
					{fuente: 2, destino: 1, label: "1", estilo: "gris", dirigido: false},
					{fuente: 3, destino: 0, label: "9", estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 5,
			contexto: "Hay elementos en ~Gris{Q}, así que entramos en el ciclo.",
			variables: {
				"v": "0",
				"distancia": "[0, Inf, Inf, Inf]",
				"Q": "[0]"
			},
			variablesAlteradas: {
				"v": false,
				"distancia": false,
				"Q": false
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: "Gus", estilo: "gris", x: 60.0, y: 35.0},
					1: {id: "1", label: "Gon", estilo: "gris", x: 30.0, y: 50.0},
					2: {id: "2", label: "Mati", estilo: "gris", x: 70.0, y: 70.0},
					3: {id: "3", label: "Vicky", estilo: "gris", x: 80.0, y: 20.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: "3", estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: "5", estilo: "gris", dirigido: false},
					{fuente: 2, destino: 1, label: "1", estilo: "gris", dirigido: false},
					{fuente: 3, destino: 0, label: "9", estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 6,
			contexto: "El elemento en ~Gris{Q} con menor ~Gris{distancia} es ~Celeste{0}, lo tomamos como ~Celeste{u}.",
			variables: {
				"v": "0",
				"distancia": "[0, Inf, Inf, Inf]",
				"Q": "[0]",
				"u": "0"
			},
			variablesAlteradas: {
				"v": false,
				"distancia": false,
				"Q": false,
				"u": true
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: "Gus", estilo: "celeste", x: 60.0, y: 35.0},
					1: {id: "1", label: "Gon", estilo: "gris", x: 30.0, y: 50.0},
					2: {id: "2", label: "Mati", estilo: "gris", x: 70.0, y: 70.0},
					3: {id: "3", label: "Vicky", estilo: "gris", x: 80.0, y: 20.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: "3", estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: "5", estilo: "gris", dirigido: false},
					{fuente: 2, destino: 1, label: "1", estilo: "gris", dirigido: false},
					{fuente: 3, destino: 0, label: "9", estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 7,
			contexto: "Eliminamos al ~Celeste{nodo 0} de ~Gris{Q}.",
			variables: {
				"v": "0",
				"distancia": "[0, Inf, Inf, Inf]",
				"Q": "[]",
				"u": "0"
			},
			variablesAlteradas: {
				"v": false,
				"distancia": false,
				"Q": true,
				"u": false
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: "Gus", estilo: "celeste", x: 60.0, y: 35.0},
					1: {id: "1", label: "Gon", estilo: "gris", x: 30.0, y: 50.0},
					2: {id: "2", label: "Mati", estilo: "gris", x: 70.0, y: 70.0},
					3: {id: "3", label: "Vicky", estilo: "gris", x: 80.0, y: 20.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: "3", estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: "5", estilo: "gris", dirigido: false},
					{fuente: 2, destino: 1, label: "1", estilo: "gris", dirigido: false},
					{fuente: 3, destino: 0, label: "9", estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 8,
			contexto: "Recorremos los ~Verde{vecinos} de ~Celeste{u}.\nEn esta iteración, tomamos al ~Verde{nodo 1} como ~Verde{a}.",
			variables: {
				"v": "0",
				"distancia": "[0, Inf, Inf, Inf]",
				"Q": "[]",
				"u": "0",
				"a": "1"
			},
			variablesAlteradas: {
				"v": false,
				"distancia": false,
				"Q": false,
				"u": false,
				"a": true
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: "Gus", estilo: "celeste", x: 60.0, y: 35.0},
					1: {id: "1", label: "Gon", estilo: "verde", x: 30.0, y: 50.0},
					2: {id: "2", label: "Mati", estilo: "gris", x: 70.0, y: 70.0},
					3: {id: "3", label: "Vicky", estilo: "gris", x: 80.0, y: 20.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: "3", estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: "5", estilo: "gris", dirigido: false},
					{fuente: 2, destino: 1, label: "1", estilo: "gris", dirigido: false},
					{fuente: 3, destino: 0, label: "9", estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 9,
			contexto: "La ~Gris{distancia} hasta ~Verde{1} es actualmente ~Violeta{infinita}.\nEn cambio, la ~Gris{distancia} hasta ~Celeste{0} y sumado al peso entre ~Celeste{0} y ~Verde{1} es ~Violeta{3}.\nComo es mejor, vamos a actualizar la ~Gris{distancia}.",
			variables: {
				"v": "0",
				"distancia": "[0, Inf, Inf, Inf]",
				"Q": "[]",
				"u": "0",
				"a": "1"
			},
			variablesAlteradas: {
				"v": false,
				"distancia": false,
				"Q": false,
				"u": false,
				"a": false
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: "Gus", estilo: "celeste", x: 60.0, y: 35.0},
					1: {id: "1", label: "Gon", estilo: "verde", x: 30.0, y: 50.0},
					2: {id: "2", label: "Mati", estilo: "gris", x: 70.0, y: 70.0},
					3: {id: "3", label: "Vicky", estilo: "gris", x: 80.0, y: 20.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: "3", estilo: "verde", dirigido: false},
					{fuente: 0, destino: 2, label: "5", estilo: "gris", dirigido: false},
					{fuente: 2, destino: 1, label: "1", estilo: "gris", dirigido: false},
					{fuente: 3, destino: 0, label: "9", estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 10,
			contexto: "Actualizamos la mejor ~Gris{distancia} hasta ~Verde{1} con el nuevo camino encontrado.",
			variables: {
				"v": "0",
				"distancia": "[0, 3, Inf, Inf]",
				"Q": "[]",
				"u": "0",
				"a": "1"
			},
			variablesAlteradas: {
				"v": false,
				"distancia": true,
				"Q": false,
				"u": false,
				"a": false
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: "Gus", estilo: "celeste", x: 60.0, y: 35.0},
					1: {id: "1", label: "Gon", estilo: "verde", x: 30.0, y: 50.0},
					2: {id: "2", label: "Mati", estilo: "gris", x: 70.0, y: 70.0},
					3: {id: "3", label: "Vicky", estilo: "gris", x: 80.0, y: 20.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: "3", estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: "5", estilo: "gris", dirigido: false},
					{fuente: 2, destino: 1, label: "1", estilo: "gris", dirigido: false},
					{fuente: 3, destino: 0, label: "9", estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 8,
			contexto: "Recorremos los ~Verde{vecinos} de ~Celeste{u}.\nEn esta iteración, tomamos al ~Verde{nodo 3} como ~Verde{a}.",
			variables: {
				"v": "0",
				"distancia": "[0, 3, Inf, Inf]",
				"Q": "[]",
				"u": "0",
				"a": "3"
			},
			variablesAlteradas: {
				"v": false,
				"distancia": false,
				"Q": false,
				"u": false,
				"a": true
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: "Gus", estilo: "celeste", x: 60.0, y: 35.0},
					1: {id: "1", label: "Gon", estilo: "gris", x: 30.0, y: 50.0},
					2: {id: "2", label: "Mati", estilo: "gris", x: 70.0, y: 70.0},
					3: {id: "3", label: "Vicky", estilo: "verde", x: 80.0, y: 20.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: "3", estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: "5", estilo: "gris", dirigido: false},
					{fuente: 2, destino: 1, label: "1", estilo: "gris", dirigido: false},
					{fuente: 3, destino: 0, label: "9", estilo: "gris", dirigido: false}
				]
			}
		},
	]
})