export default () => ({
	titulo: "Algoritmo de Selection Sort",
	input: "Arreglo #{A}.",
	output: "Arreglo #{A} ordenado ascendentemente.",
	linkExplicacion: "/layouts/conceptos/selectionsort.html",
	cantidadCasos: 3,
    lineas: [
		"Var{n} Con{<-} Con{|}Var{A}Con{|}",
		"para ~Naranja{i} en el rango Con{[}Valor{0}Con{,}Var{n}Con{)}:",
		"  GrisOscuro{# vamos a encontrar el elemento a ubicar en la posición i}",
		"  GrisOscuro{# recorremos la región no ordenada en busca del más chico}",
		"  Var{mejorValor} Con{<-} Valor{Infinito}",
		"  ~Violeta{mejorPosicion} Con{<-} Valor{?}",
		"  para ~Rojo{j} en el rango Con{[}~Naranja{i}Con{,}Var{n}Con{)}:",
		"    si Var{A}Con{[}~Rojo{j}Con{]} Con{<} Var{mejorValor}:",
		"      Var{mejorValor} Con{<-} Var{A}Con{[}~Rojo{j}Con{]}",
		"      ~Violeta{mejorPosicion} Con{<-} ~Rojo{j}",
		"  intercambiar Var{A}Con{[}~Naranja{i}Con{]} con Var{A}Con{[}~Violeta{mejorPosicion}Con{]}",
		"devolver Var{A}"
	]
})