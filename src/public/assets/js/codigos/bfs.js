export default () => ({
	titulo: "Algoritmo de Breadth-First-Search",
	input: "Grafo #{G=(V,E)}, vértice de inicio del recorrido #{r}.",
	output: "Árbol de padres, representado con un arreglo #{padre}.",
	linkExplicacion: "/layouts/conceptos/bfs.html",
	cantidadCasos: 3,
    lineas: [
		"Key{inicializar} Var{Q}Key{, una} Struct{cola} Valor{vacía}",
		"Key{inicializar} ~Violeta{explorado}Key{, un} Struct{arreglo de} Con{|}Var{V}Con{|} Struct{elementos con valores} Valor{False}",
		"Key{inicializar} Verde{padre}Key{, un} Struct{arreglo de} Con{|}Var{V}Con{|} Struct{elementos con valores} Valor{indefinidos}",
		"GrisOscuro{# marcamos a r como explorado y lo usamos para iniciar la búsqueda}",
		"~Violeta{explorado}Con{[}Var{r}Con{]} Con{<-} Valor{True}",
		"Var{padre}Con{[}Var{r}Con{]} Con{<-} Var{r}",
		"Key{agregar} Var{r} Key{a} Var{Q}",
		"Key{mientras} Var{Q} Key{no esté} Valor{vacío}Key{:}",
		"  ~Naranja{v} Con{<-} ~Naranja{primer elemento de} Var{Q} Key{(y eliminarlo de} Var{Q}Key{)}",
		"  Key{para cada} ~Indigo{vecino w} Key{de} ~Naranja{v}:",
		"    Key{si} ~Violeta{explorado}Con{[}~Indigo{w}Con{]} Con{==} Valor{False}Key{:}",
		"      ~Violeta{explorado}Con{[}~Indigo{w}Con{]} Con{<-} Valor{True}",
		"      Var{padre}Con{[}~Indigo{w}Con{]} Con{<-} ~Naranja{v}",
		"      Key{agregar} ~Indigo{w} Key{a} Var{Q}",
		"Key{devolver} Var{padre}"
	]
})