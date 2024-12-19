export default () => ({
    estados: [
		{
			linea: 0,
			contexto: "¡Comenzá a ~Celeste{ejecutar} para ver ~GrisOscuro{comentarios}!",
			variables: {
				"r": "0"
			},
			variablesAlteradas: {
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "gris", x: 20.0, y: 50.0},
					
					1: {id: "1", label: null, estilo: "gris", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "gris", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "gris", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "gris", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 1,
			contexto: "Inicializamos una Struct{cola} con nombre #Var{Q}.\n Esta cola dictará el orden en el que se recorreran los nodos del grafo.",
			variables: {
				"r": "0",
				"Q": "[]"
			},
			variablesAlteradas: {
				"r": false,
				"Q": true
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "gris", x: 20.0, y: 50.0},
					
					1: {id: "1", label: null, estilo: "gris", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "gris", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "gris", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "gris", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 2,
			contexto: "Inicializamos un Struct{array de tamaño fijo} con nombre #~Violeta{explorado} con #Valor{5} elementos (uno por cada nodo del grafo).\nEste arreglo indica con un booleano qué nodos ya aparecieron en algún momento de la búsqueda hasta el momento.\nTodos las posiciones de #~Violeta{explorado} se inicializan en #Valor{False}.",
			variables: {
				"r": "0",
				"Q": "[]",
				"explorado": "[False, False, False, False, False]"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": true,
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "gris", x: 20.0, y: 50.0},
					
					1: {id: "1", label: null, estilo: "gris", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "gris", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "gris", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "gris", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 3,
			contexto: "Inicializamos un Struct{array de tamaño fijo} con nombre #Verde{padre} con #Valor{5} elementos (uno por cada nodo del grafo).\nEste arreglo indica cuál fue el nodo que encontró por primera vez a cada nodo.\nTodos las posiciones de #Verde{padre} se inicializan en #Valor{?} Valor{(indefinido)} hasta que el nodo se encuentre en la búsqueda.",
			variables: {
				"r": "0",
				"Q": "[]",
				"explorado": "[False, False, False, False, False]",
				"padre": "[?, ?, ?, ?, ?]"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": false,
				"padre": true,
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "gris", x: 20.0, y: 50.0},
					
					1: {id: "1", label: null, estilo: "gris", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "gris", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "gris", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "gris", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 5,
			contexto: "Como vamos a iniciar la búsqueda en el Verde{nodo }#Verde{0}, lo marcamos como ya explorado.\nPor ello, asignamos la posición #Verde{0} de ~#Violeta{explorado} en #Valor{True}.",
			variables: {
				"r": "0",
				"Q": "[]",
				"explorado": "[True, False, False, False, False]",
				"padre": "[?, ?, ?, ?, ?]"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": true,
				"padre": false,
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "violeta", x: 20.0, y: 50.0},
					
					1: {id: "1", label: null, estilo: "gris", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "gris", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "gris", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "gris", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 6,
			contexto: "No es necesario, pero es común marcar al #Verde{padre} del Verde{nodo raíz} como sí mismo.\nPor ello, marcamos al #Verde{padre} del #Verde{0} como el #Verde{0}.",
			variables: {
				"r": "0",
				"Q": "[]",
				"explorado": "[True, False, False, False, False]",
				"padre": "[0, ?, ?, ?, ?]"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": false,
				"padre": true,
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "violeta", x: 20.0, y: 50.0},
					
					1: {id: "1", label: null, estilo: "gris", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "gris", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "gris", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "gris", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 7,
			contexto: "Además, agregamos #Verde{0} como único elemento de #Verde{Q}, para dejar listo el ciclo.",
			variables: {
				"r": "0",
				"Q": "[0]",
				"explorado": "[True, False, False, False, False]",
				"padre": "[0, ?, ?, ?, ?]"
			},
			variablesAlteradas: {
				"r": false,
				"Q": true,
				"explorado": false,
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "violeta", x: 20.0, y: 50.0},
					
					1: {id: "1", label: null, estilo: "gris", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "gris", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "gris", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "gris", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 8,
			contexto: "Entramos en el ciclo principal del programa, el cual no va a terminar hasta haber recorrido toda la componente conexa donde arrancamos del grafo.\nComo #Verde{Q} no está vacío, entramos en el cuerpo del ciclo, y en esta iteración exploraremos el ~Naranja{primer elemento de la cola}.",
			variables: {
				"r": "0",
				"Q": "[0]",
				"explorado": "[True, False, False, False, False]",
				"padre": "[0, ?, ?, ?, ?]"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": false,
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "violeta", x: 20.0, y: 50.0},
					
					1: {id: "1", label: null, estilo: "gris", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "gris", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "gris", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "gris", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 9,
			contexto: "Tomamos como ~#Naranja{v} al ~Naranja{primer elemento de la cola}, es decir ~#Naranja{0}.\nAdemás, eliminamos este valor de #Verde{Q}.",
			variables: {
				"r": "0",
				"Q": "[]",
				"explorado": "[True, False, False, False, False]",
				"padre": "[0, ?, ?, ?, ?]",
				"v": "0"
			},
			variablesAlteradas: {
				"r": false,
				"Q": true,
				"explorado": false,
				"v": true
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "naranja", x: 20.0, y: 50.0},
					
					1: {id: "1", label: null, estilo: "gris", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "gris", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "gris", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "gris", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 10,
			contexto: "Comenzamos ahora a recorrer los ~Indigo{vecinos} del ~Naranja{Nodo} ~#Naranja{0}, en cualquier orden.\nEn esta iteración, tomamos como ~#Indigo{w} al ~Indigo{Nodo} ~#Indigo{2}.",
			variables: {
				"r": "0",
				"Q": "[]",
				"explorado": "[True, False, False, False, False]",
				"padre": "[0, ?, ?, ?, ?]",
				"v": "0",
				"w": "2"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": false,
				"v": false,
				"w": true
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "naranja", x: 20.0, y: 50.0},

					1: {id: "1", label: null, estilo: "gris", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "gris", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "gris", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "gris", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "indigo", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 11,
			contexto: "Como el ~Indigo{Nodo} ~#Indigo{2} todavía no fue ~Violeta{explorado}, entramos en el cuerpo del condicional.",
			variables: {
				"r": "0",
				"Q": "[]",
				"explorado": "[True, False, False, False, False]",
				"padre": "[0, ?, ?, ?, ?]",
				"v": "0",
				"w": "2"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": false,
				"v": false,
				"w": false
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "naranja", x: 20.0, y: 50.0},

					1: {id: "1", label: null, estilo: "gris", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "gris", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "gris", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "gris", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "indigo", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 12,
			contexto: "Al haber encontrado un nodo que no fue explorado antes, lo marcamos como ~Violeta{explorado}.",
			variables: {
				"r": "0",
				"Q": "[]",
				"explorado": "[True, False, True, False, False]",
				"padre": "[0, ?, ?, ?, ?]",
				"v": "0",
				"w": "2"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": true,
				"v": false,
				"w": false
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "naranja", x: 20.0, y: 50.0},

					1: {id: "1", label: null, estilo: "gris", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "violeta", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "gris", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "gris", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "indigo", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 13,
			contexto: "Además, marcamos al ~Naranja{Nodo} ~#Naranja{0} como aquel que descubrió al ~Indigo{Nodo} ~#Indigo{2}.\nPara ello, marcamos al ~#Naranja{0} como #Verde{padre} del ~#Indigo{2}.",
			variables: {
				"r": "0",
				"Q": "[]",
				"explorado": "[True, False, True, False, False]",
				"padre": "[0, ?, 0, ?, ?]",
				"v": "0",
				"w": "2"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": false,
				"padre": true,
				"v": false,
				"w": false
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "naranja", x: 20.0, y: 50.0},

					1: {id: "1", label: null, estilo: "gris", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "violeta", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "gris", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "gris", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "indigo", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 14,
			contexto: "Por último, como acabamos de Violeta{explorar} al ~Indigo{Nodo} ~#Indigo{2}, lo introducimos en la cola #Verde{Q}.\nDe esta manera, eventualmente serán recorridos sus vecinos.",
			variables: {
				"r": "0",
				"Q": "[2]",
				"explorado": "[True, False, True, False, False]",
				"padre": "[0, ?, 0, ?, ?]",
				"v": "0",
				"w": "2"
			},
			variablesAlteradas: {
				"r": false,
				"Q": true,
				"explorado": false,
				"padre": false,
				"v": false,
				"w": false
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "naranja", x: 20.0, y: 50.0},

					1: {id: "1", label: null, estilo: "gris", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "violeta", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "gris", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "gris", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "indigo", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 10,
			contexto: "Seguimos iterando sobre los ~Indigo{vecinos} del ~Naranja{Nodo} ~#Naranja{0}.\nEn esta iteración, tomamos como ~#Indigo{w} al ~Indigo{Nodo} ~#Indigo{1}.",
			variables: {
				"r": "0",
				"Q": "[2]",
				"explorado": "[True, False, True, False, False]",
				"padre": "[0, ?, 0, ?, ?]",
				"v": "0",
				"w": "1"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": false,
				"padre": false,
				"v": false,
				"w": true
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "naranja", x: 20.0, y: 50.0},

					1: {id: "1", label: null, estilo: "gris", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "violeta", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "gris", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "gris", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "indigo", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 11,
			contexto: "Como el ~Indigo{Nodo} ~#Indigo{1} todavía no fue ~Violeta{explorado}, entramos en el cuerpo del condicional.",
			variables: {
				"r": "0",
				"Q": "[2]",
				"explorado": "[True, False, True, False, False]",
				"padre": "[0, ?, 0, ?, ?]",
				"v": "0",
				"w": "1"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": false,
				"v": false,
				"w": false
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "naranja", x: 20.0, y: 50.0},

					1: {id: "1", label: null, estilo: "gris", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "violeta", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "gris", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "gris", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "indigo", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 12,
			contexto: "Al haber encontrado un nodo que no fue explorado antes, lo marcamos como ~#Violeta{explorado}.",
			variables: {
				"r": "0",
				"Q": "[2]",
				"explorado": "[True, True, True, False, False]",
				"padre": "[0, ?, 0, ?, ?]",
				"v": "0",
				"w": "1"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": true,
				"v": false,
				"w": false
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "naranja", x: 20.0, y: 50.0},

					1: {id: "1", label: null, estilo: "violeta", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "violeta", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "gris", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "gris", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "indigo", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 13,
			contexto: "Además, marcamos al ~Naranja{Nodo} ~#Naranja{0} como aquel que descubrió al ~Indigo{Nodo} ~#Indigo{1}.\nPara ello, marcamos al ~#Naranja{0} como #Verde{padre} del ~#Indigo{1}.",
			variables: {
				"r": "0",
				"Q": "[2]",
				"explorado": "[True, True, True, False, False]",
				"padre": "[0, 0, 0, ?, ?]",
				"v": "0",
				"w": "1"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": false,
				"padre": true,
				"v": false,
				"w": false
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "naranja", x: 20.0, y: 50.0},

					1: {id: "1", label: null, estilo: "violeta", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "violeta", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "gris", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "gris", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "indigo", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 14,
			contexto: "Por último, como acabamos de Violeta{explorar} al ~Indigo{Nodo} ~#Indigo{1}, lo introducimos en la cola #Verde{Q}.\nDe esta manera, eventualmente serán recorridos sus vecinos.",
			variables: {
				"r": "0",
				"Q": "[2, 1]",
				"explorado": "[True, True, True, False, False]",
				"padre": "[0, 0, 0, ?, ?]",
				"v": "0",
				"w": "1"
			},
			variablesAlteradas: {
				"r": false,
				"Q": true,
				"explorado": false,
				"padre": false,
				"v": false,
				"w": false
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "naranja", x: 20.0, y: 50.0},

					1: {id: "1", label: null, estilo: "violeta", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "violeta", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "gris", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "gris", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "indigo", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 8,
			contexto: "Como #Verde{Q} no está vacío, entramos en el cuerpo del ciclo, y en esta iteración exploraremos el ~Naranja{primer elemento de la cola}.",
			variables: {
				"r": "0",
				"Q": "[2, 1]",
				"explorado": "[True, True, True, False, False]",
				"padre": "[0, 0, 0, ?, ?]",
				"v": "0",
				"w": "1"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": false,
				"padre": false,
				"v": false,
				"w": false
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "violeta", x: 20.0, y: 50.0},

					1: {id: "1", label: null, estilo: "violeta", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "violeta", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "gris", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "gris", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 9,
			contexto: "Tomamos como ~#Naranja{v} al ~Naranja{primer elemento de la cola}, es decir ~#Naranja{2}.\nAdemás, eliminamos este valor de #Verde{Q}.",
			variables: {
				"r": "0",
				"Q": "[1]",
				"explorado": "[True, True, True, False, False]",
				"padre": "[0, 0, 0, ?, ?]",
				"v": "2",
				"w": "1"
			},
			variablesAlteradas: {
				"r": false,
				"Q": true,
				"explorado": false,
				"padre": false,
				"v": true,
				"w": false
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "violeta", x: 20.0, y: 50.0},

					1: {id: "1", label: null, estilo: "violeta", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "naranja", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "gris", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "gris", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 10,
			contexto: "Comenzamos ahora a recorrer los ~Indigo{vecinos} del ~Naranja{Nodo} ~#Naranja{2}, en cualquier orden.\nEn esta iteración, tomamos como ~#Indigo{w} al ~Indigo{Nodo} ~#Indigo{1}.",
			variables: {
				"r": "0",
				"Q": "[1]",
				"explorado": "[True, True, True, False, False]",
				"padre": "[0, 0, 0, ?, ?]",
				"v": "2",
				"w": "1"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": false,
				"padre": false,
				"v": false,
				"w": true
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "violeta", x: 20.0, y: 50.0},

					1: {id: "1", label: null, estilo: "violeta", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "naranja", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "gris", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "gris", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "indigo", dirigido: false}
				]
			}
		},
		{
			linea: 11,
			contexto: "Como el ~Indigo{Nodo} ~#Indigo{1} ya fue ~Violeta{explorado}, salteamos el condicional.",
			variables: {
				"r": "0",
				"Q": "[1]",
				"explorado": "[True, True, True, False, False]",
				"padre": "[0, 0, 0, ?, ?]",
				"v": "2",
				"w": "1"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": false,
				"padre": false,
				"v": false,
				"w": false
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "violeta", x: 20.0, y: 50.0},

					1: {id: "1", label: null, estilo: "violeta", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "naranja", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "gris", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "gris", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "indigo", dirigido: false}
				]
			}
		},
		{
			linea: 10,
			contexto: "Seguimos iterando sobre los ~Indigo{vecinos} del ~Naranja{Nodo} ~#Naranja{2}.\nEn esta iteración, tomamos como ~#Indigo{w} al ~Indigo{Nodo} ~#Indigo{4}.",
			variables: {
				"r": "0",
				"Q": "[1]",
				"explorado": "[True, True, True, False, False]",
				"padre": "[0, 0, 0, ?, ?]",
				"v": "2",
				"w": "4"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": false,
				"padre": false,
				"v": false,
				"w": true
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "violeta", x: 20.0, y: 50.0},

					1: {id: "1", label: null, estilo: "violeta", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "naranja", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "gris", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "gris", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "indigo", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 11,
			contexto: "Como el ~Indigo{Nodo} ~#Indigo{4} todavía no fue ~Violeta{explorado}, entramos en el cuerpo del condicional.",
			variables: {
				"r": "0",
				"Q": "[1]",
				"explorado": "[True, True, True, False, False]",
				"padre": "[0, 0, 0, ?, ?]",
				"v": "2",
				"w": "4"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": false,
				"padre": false,
				"v": false,
				"w": false
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "violeta", x: 20.0, y: 50.0},

					1: {id: "1", label: null, estilo: "violeta", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "naranja", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "gris", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "gris", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "indigo", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 12,
			contexto: "Al haber encontrado un nodo que no fue explorado antes, lo marcamos como ~Violeta{explorado}.",
			variables: {
				"r": "0",
				"Q": "[1]",
				"explorado": "[True, True, True, False, True]",
				"padre": "[0, 0, 0, ?, ?]",
				"v": "2",
				"w": "4"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": true,
				"padre": false,
				"v": false,
				"w": false
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "violeta", x: 20.0, y: 50.0},

					1: {id: "1", label: null, estilo: "violeta", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "naranja", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "gris", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "violeta", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "indigo", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 13,
			contexto: "Además, marcamos al ~Naranja{Nodo} ~#Naranja{2} como aquel que descubrió al ~Indigo{Nodo} ~#Indigo{4}.\nPara ello, marcamos al ~#Naranja{2} como #Verde{padre} del ~#Indigo{4}.",
			variables: {
				"r": "0",
				"Q": "[1]",
				"explorado": "[True, True, True, False, True]",
				"padre": "[0, 0, 0, ?, 2]",
				"v": "2",
				"w": "4"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": false,
				"padre": true,
				"v": false,
				"w": false
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "violeta", x: 20.0, y: 50.0},

					1: {id: "1", label: null, estilo: "violeta", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "naranja", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "gris", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "violeta", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "indigo", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 14,
			contexto: "Por último, como acabamos de Violeta{explorar} al ~Indigo{Nodo} ~#Indigo{4}, lo introducimos en la cola #Verde{Q}.\nDe esta manera, eventualmente serán recorridos sus vecinos.",
			variables: {
				"r": "0",
				"Q": "[1, 4]",
				"explorado": "[True, True, True, False, True]",
				"padre": "[0, 0, 0, ?, 2]",
				"v": "2",
				"w": "4"
			},
			variablesAlteradas: {
				"r": false,
				"Q": true,
				"explorado": false,
				"padre": false,
				"v": false,
				"w": false
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "violeta", x: 20.0, y: 50.0},

					1: {id: "1", label: null, estilo: "violeta", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "naranja", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "gris", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "violeta", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "indigo", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 8,
			contexto: "Como #Verde{Q} no está vacío, entramos en el cuerpo del ciclo, y en esta iteración exploraremos el ~Naranja{primer elemento de la cola}.",
			variables: {
				"r": "0",
				"Q": "[1, 4]",
				"explorado": "[True, True, True, False, True]",
				"padre": "[0, 0, 0, ?, 2]",
				"v": "2",
				"w": "4"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": false,
				"padre": false,
				"v": false,
				"w": false
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "violeta", x: 20.0, y: 50.0},

					1: {id: "1", label: null, estilo: "violeta", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "violeta", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "gris", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "violeta", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 9,
			contexto: "Tomamos como ~#Naranja{v} al ~Naranja{primer elemento de la cola}, es decir ~#Naranja{1}.\nAdemás, eliminamos este valor de #Verde{Q}.",
			variables: {
				"r": "0",
				"Q": "[4]",
				"explorado": "[True, True, True, False, True]",
				"padre": "[0, 0, 0, ?, 2]",
				"v": "1",
				"w": "4"
			},
			variablesAlteradas: {
				"r": false,
				"Q": true,
				"explorado": false,
				"padre": false,
				"v": true,
				"w": false
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "violeta", x: 20.0, y: 50.0},

					1: {id: "1", label: null, estilo: "naranja", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "violeta", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "gris", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "violeta", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 10,
			contexto: "Comenzamos ahora a recorrer los ~Indigo{vecinos} del ~Naranja{Nodo} ~#Naranja{1}, en cualquier orden.\nEn esta iteración, tomamos como ~#Indigo{w} al ~Indigo{Nodo} ~#Indigo{0}.",
			variables: {
				"r": "0",
				"Q": "[4]",
				"explorado": "[True, True, True, False, True]",
				"padre": "[0, 0, 0, ?, 2]",
				"v": "1",
				"w": "0"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": false,
				"padre": false,
				"v": false,
				"w": true
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "violeta", x: 20.0, y: 50.0},

					1: {id: "1", label: null, estilo: "naranja", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "violeta", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "gris", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "violeta", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "indigo", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 11,
			contexto: "Como el ~Indigo{Nodo} ~#Indigo{0} ya fue ~Violeta{explorado}, salteamos el condicional.",
			variables: {
				"r": "0",
				"Q": "[4]",
				"explorado": "[True, True, True, False, True]",
				"padre": "[0, 0, 0, ?, 2]",
				"v": "1",
				"w": "0"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": false,
				"padre": false,
				"v": false,
				"w": false
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "violeta", x: 20.0, y: 50.0},

					1: {id: "1", label: null, estilo: "naranja", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "violeta", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "gris", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "violeta", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "indigo", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 10,
			contexto: "Seguimos iterando sobre los ~Indigo{vecinos} del ~Naranja{Nodo} ~#Naranja{1}.\nEn esta iteración, tomamos como ~#Indigo{w} al ~Indigo{Nodo} ~#Indigo{3}.",
			variables: {
				"r": "0",
				"Q": "[4]",
				"explorado": "[True, True, True, False, True]",
				"padre": "[0, 0, 0, ?, 2]",
				"v": "1",
				"w": "3"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": false,
				"padre": false,
				"v": false,
				"w": true
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "violeta", x: 20.0, y: 50.0},
					
					1: {id: "1", label: null, estilo: "naranja", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "violeta", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "gris", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "violeta", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "indigo", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 11,
			contexto: "Como el ~Indigo{Nodo} ~#Indigo{3} todavía no fue ~Violeta{explorado}, entramos en el cuerpo del condicional.",
			variables: {
				"r": "0",
				"Q": "[4]",
				"explorado": "[True, True, True, False, True]",
				"padre": "[0, 0, 0, ?, 2]",
				"v": "1",
				"w": "3"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": false,
				"padre": false,
				"v": false,
				"w": false
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "violeta", x: 20.0, y: 50.0},
					
					1: {id: "1", label: null, estilo: "naranja", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "violeta", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "gris", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "violeta", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "indigo", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 12,
			contexto: "Al haber encontrado un nodo que no fue explorado antes, lo marcamos como ~Violeta{explorado}.",
			variables: {
				"r": "0",
				"Q": "[4]",
				"explorado": "[True, True, True, True, True]",
				"padre": "[0, 0, 0, ?, 2]",
				"v": "1",
				"w": "3"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": true,
				"padre": false,
				"v": false,
				"w": false
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "violeta", x: 20.0, y: 50.0},
					
					1: {id: "1", label: null, estilo: "naranja", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "violeta", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "violeta", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "violeta", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "indigo", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 13,
			contexto: "Además, marcamos al ~Naranja{Nodo} ~#Naranja{1} como aquel que descubrió al ~Indigo{Nodo} ~#Indigo{3}.\nPara ello, marcamos al ~#Naranja{1} como #Verde{padre} del ~#Indigo{3}.",
			variables: {
				"r": "0",
				"Q": "[4]",
				"explorado": "[True, True, True, True, True]",
				"padre": "[0, 0, 0, 1, 2]",
				"v": "1",
				"w": "3"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": false,
				"padre": true,
				"v": false,
				"w": false
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "violeta", x: 20.0, y: 50.0},
					
					1: {id: "1", label: null, estilo: "naranja", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "violeta", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "violeta", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "violeta", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "indigo", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 14,
			contexto: "Por último, como acabamos de Violeta{explorar} al ~Indigo{Nodo} ~#Indigo{3}, lo introducimos en la cola #Verde{Q}.\nDe esta manera, eventualmente serán recorridos sus vecinos.",
			variables: {
				"r": "0",
				"Q": "[4, 3]",
				"explorado": "[True, True, True, True, True]",
				"padre": "[0, 0, 0, 1, 2]",
				"v": "1",
				"w": "3"
			},
			variablesAlteradas: {
				"r": false,
				"Q": true,
				"explorado": false,
				"padre": false,
				"v": false,
				"w": false
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "violeta", x: 20.0, y: 50.0},
					
					1: {id: "1", label: null, estilo: "naranja", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "violeta", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "violeta", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "violeta", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "indigo", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 8,
			contexto: "Como #Verde{Q} no está vacío, entramos en el cuerpo del ciclo, y en esta iteración exploraremos el ~Naranja{primer elemento de la cola}.",
			variables: {
				"r": "0",
				"Q": "[4, 3]",
				"explorado": "[True, True, True, True, True]",
				"padre": "[0, 0, 0, 1, 2]",
				"v": "1",
				"w": "3"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": false,
				"padre": false,
				"v": false,
				"w": false
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "violeta", x: 20.0, y: 50.0},
					
					1: {id: "1", label: null, estilo: "violeta", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "violeta", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "violeta", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "violeta", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 9,
			contexto: "Tomamos como ~#Naranja{v} al ~Naranja{primer elemento de la cola}, es decir ~#Naranja{4}.\nAdemás, eliminamos este valor de #Verde{Q}.",
			variables: {
				"r": "0",
				"Q": "[3]",
				"explorado": "[True, True, True, True, True]",
				"padre": "[0, 0, 0, 1, 2]",
				"v": "4",
				"w": "3"
			},
			variablesAlteradas: {
				"r": false,
				"Q": true,
				"explorado": false,
				"padre": false,
				"v": true,
				"w": false
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "violeta", x: 20.0, y: 50.0},
					
					1: {id: "1", label: null, estilo: "violeta", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "violeta", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "violeta", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "naranja", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 10,
			contexto: "Comenzamos ahora a recorrer los ~Indigo{vecinos} del ~Naranja{Nodo} ~#Naranja{4}, en cualquier orden.\nEn esta iteración, tomamos como ~#Indigo{w} al ~Indigo{Nodo} ~#Indigo{2}.",
			variables: {
				"r": "0",
				"Q": "[3]",
				"explorado": "[True, True, True, True, True]",
				"padre": "[0, 0, 0, 1, 2]",
				"v": "4",
				"w": "2"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": false,
				"padre": false,
				"v": false,
				"w": true
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "violeta", x: 20.0, y: 50.0},
					
					1: {id: "1", label: null, estilo: "violeta", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "violeta", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "violeta", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "naranja", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "indigo", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 11,
			contexto: "Como el ~Indigo{Nodo} ~#Indigo{4} ya fue ~Violeta{explorado}, salteamos el condicional.",
			variables: {
				"r": "0",
				"Q": "[3]",
				"explorado": "[True, True, True, True, True]",
				"padre": "[0, 0, 0, 1, 2]",
				"v": "4",
				"w": "2"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": false,
				"padre": false,
				"v": false,
				"w": false
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "violeta", x: 20.0, y: 50.0},
					
					1: {id: "1", label: null, estilo: "violeta", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "violeta", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "violeta", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "naranja", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "indigo", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 10,
			contexto: "Seguimos iterando sobre los ~Indigo{vecinos} del ~Naranja{Nodo} ~#Naranja{4}.\nEn esta iteración, tomamos como ~#Indigo{w} al ~Indigo{Nodo} ~#Indigo{3}.",
			variables: {
				"r": "0",
				"Q": "[3]",
				"explorado": "[True, True, True, True, True]",
				"padre": "[0, 0, 0, 1, 2]",
				"v": "4",
				"w": "3"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": false,
				"padre": false,
				"v": false,
				"w": true
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "violeta", x: 20.0, y: 50.0},
					
					1: {id: "1", label: null, estilo: "violeta", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "violeta", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "violeta", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "naranja", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "indigo", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 11,
			contexto: "Como el ~Indigo{Nodo} ~#Indigo{3} ya fue ~Violeta{explorado}, salteamos el condicional.",
			variables: {
				"r": "0",
				"Q": "[3]",
				"explorado": "[True, True, True, True, True]",
				"padre": "[0, 0, 0, 1, 2]",
				"v": "4",
				"w": "3"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": false,
				"padre": false,
				"v": false,
				"w": false
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "violeta", x: 20.0, y: 50.0},
					
					1: {id: "1", label: null, estilo: "violeta", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "violeta", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "violeta", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "naranja", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "indigo", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 8,
			contexto: "Como #Verde{Q} no está vacío, entramos en el cuerpo del ciclo, y en esta iteración exploraremos el ~Naranja{primer elemento de la cola}.",
			variables: {
				"r": "0",
				"Q": "[3]",
				"explorado": "[True, True, True, True, True]",
				"padre": "[0, 0, 0, 1, 2]",
				"v": "4",
				"w": "3"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": false,
				"padre": false,
				"v": false,
				"w": false
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "violeta", x: 20.0, y: 50.0},
					
					1: {id: "1", label: null, estilo: "violeta", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "violeta", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "violeta", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "violeta", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 9,
			contexto: "Tomamos como ~#Naranja{v} al ~Naranja{primer elemento de la cola}, es decir ~#Naranja{3}.\nAdemás, eliminamos este valor de #Verde{Q}.",
			variables: {
				"r": "0",
				"Q": "[]",
				"explorado": "[True, True, True, True, True]",
				"padre": "[0, 0, 0, 1, 2]",
				"v": "3",
				"w": "3"
			},
			variablesAlteradas: {
				"r": false,
				"Q": true,
				"explorado": false,
				"padre": false,
				"v": true,
				"w": false
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "violeta", x: 20.0, y: 50.0},
					
					1: {id: "1", label: null, estilo: "violeta", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "violeta", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "naranja", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "violeta", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 10,
			contexto: "Comenzamos ahora a recorrer los ~Indigo{vecinos} del ~Naranja{Nodo} ~#Naranja{3}, en cualquier orden.\nEn esta iteración, tomamos como ~#Indigo{w} al ~Indigo{Nodo} ~#Indigo{1}.",
			variables: {
				"r": "0",
				"Q": "[]",
				"explorado": "[True, True, True, True, True]",
				"padre": "[0, 0, 0, 1, 2]",
				"v": "3",
				"w": "1"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": false,
				"padre": false,
				"v": false,
				"w": true
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "violeta", x: 20.0, y: 50.0},
					
					1: {id: "1", label: null, estilo: "violeta", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "violeta", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "naranja", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "violeta", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "indigo", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 11,
			contexto: "Como el ~Indigo{Nodo} ~#Indigo{1} ya fue ~Violeta{explorado}, salteamos el condicional.",
			variables: {
				"r": "0",
				"Q": "[]",
				"explorado": "[True, True, True, True, True]",
				"padre": "[0, 0, 0, 1, 2]",
				"v": "3",
				"w": "1"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": false,
				"padre": false,
				"v": false,
				"w": false
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "violeta", x: 20.0, y: 50.0},
					
					1: {id: "1", label: null, estilo: "violeta", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "violeta", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "naranja", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "violeta", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "indigo", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 10,
			contexto: "Seguimos iterando sobre los ~Indigo{vecinos} del ~Naranja{Nodo} ~#Naranja{3}.\nEn esta iteración, tomamos como ~#Indigo{w} al ~Indigo{Nodo} ~#Indigo{4}.",
			variables: {
				"r": "0",
				"Q": "[]",
				"explorado": "[True, True, True, True, True]",
				"padre": "[0, 0, 0, 1, 2]",
				"v": "3",
				"w": "4"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": false,
				"padre": false,
				"v": false,
				"w": true
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "violeta", x: 20.0, y: 50.0},
					
					1: {id: "1", label: null, estilo: "violeta", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "violeta", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "naranja", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "violeta", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "indigo", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 11,
			contexto: "Como el ~Indigo{Nodo} ~#Indigo{4} ya fue ~Violeta{explorado}, salteamos el condicional.",
			variables: {
				"r": "0",
				"Q": "[]",
				"explorado": "[True, True, True, True, True]",
				"padre": "[0, 0, 0, 1, 2]",
				"v": "3",
				"w": "4"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": false,
				"padre": false,
				"v": false,
				"w": false
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "violeta", x: 20.0, y: 50.0},
					
					1: {id: "1", label: null, estilo: "violeta", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "violeta", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "naranja", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "violeta", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "indigo", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 8,
			contexto: "Como #Verde{Q} está vacío, no entramos en el cuerpo del ciclo.\nHemos recorrido toda la componente conexa del Verde{nodo} #Verde{0}.",
			variables: {
				"r": "0",
				"Q": "[]",
				"explorado": "[True, True, True, True, True]",
				"padre": "[0, 0, 0, 1, 2]",
				"v": "3",
				"w": "4"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": false,
				"padre": false,
				"v": false,
				"w": false
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "violeta", x: 20.0, y: 50.0},
					
					1: {id: "1", label: null, estilo: "violeta", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "violeta", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "violeta", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "violeta", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
		{
			linea: 15,
			contexto: "Habiendo recorrido todo lo accesible desde el Verde{nodo} #Verde{0}, podemos devolver el arreglo #Verde{padre}.\nEn este grafo hay una única componente conexa, así que no quedaron Valor{valores indefinidos} en #Verde{padre}.",
			variables: {
				"r": "0",
				"Q": "[]",
				"explorado": "[True, True, True, True, True]",
				"padre": "[0, 0, 0, 1, 2]",
				"v": "3",
				"w": "4"
			},
			variablesAlteradas: {
				"r": false,
				"Q": false,
				"explorado": false,
				"padre": false,
				"v": false,
				"w": false
			},
			visualizacion: "grafo",
			render: {
				nodos: {
					0: {id: "0", label: null, estilo: "violeta", x: 20.0, y: 50.0},
					
					1: {id: "1", label: null, estilo: "violeta", x: 50.0, y: 35.0},
					2: {id: "2", label: null, estilo: "violeta", x: 50.0, y: 65.0},
					
					3: {id: "3", label: null, estilo: "violeta", x: 80.0, y: 35.0},
					4: {id: "4", label: null, estilo: "violeta", x: 80.0, y: 65.0}
				},
				aristas: [
					{fuente: 0, destino: 1, label: null, estilo: "gris", dirigido: false},
					{fuente: 0, destino: 2, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 3, label: null, estilo: "gris", dirigido: false},
					{fuente: 2, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 3, destino: 4, label: null, estilo: "gris", dirigido: false},
					{fuente: 1, destino: 2, label: null, estilo: "gris", dirigido: false}
				]
			}
		},
	]
})