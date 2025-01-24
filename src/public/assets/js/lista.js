import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

function centro(inicio, ancho) {
    return inicio + (ancho / 2)
}

function estilosElemento(e) {
    switch (e.estilo) {
        case "rojo":
            return {
                "color-interno": "#e02e1b",
            }
        case "naranja":
            return {
                "color-interno": "#e0561b",
            }
        case "amarillo":
            return {
                "color-interno": "#e0a21b",
            }
        case "verde":
            return {
                "color-interno": "#67cbb0",
            }
        case "celeste":
            return {
                "color-interno": "#008296",
            }
        case "indigo":
            return {
                "color-interno": "#004e96",
            }
        case "violeta":
            return {
                "color-interno": "#511281",
            }
        case "gris":
        default:
            return {
                "color-interno": "#aeaeae",
            }
    }
}

function estilosFlecha(f) {
    switch (f.estilo) {
        case "rojo":
            return {
                "color-interno": "#e02e1b",
            }
        case "naranja":
            return {
                "color-interno": "#e0561b",
            }
        case "amarillo":
            return {
                "color-interno": "#e0a21b",
            }
        case "verde":
            return {
                "color-interno": "#67cbb0",
            }
        case "celeste":
            return {
                "color-interno": "#008296",
            }
        case "indigo":
            return {
                "color-interno": "#004e96",
            }
        case "violeta":
            return {
                "color-interno": "#511281",
            }
        case "gris":
        default:
            return {
                "color-interno": "#aeaeae",
            }
    }
}


export function renderLista(render) {
    const width = document.getElementById('canvas-container').clientWidth;
    const height = document.getElementById('canvas-container').clientHeight;

    document.querySelector("#canvas-visualizador").innerHTML = "";

    const svg = d3.select("#canvas-visualizador")
        .attr("width", width)
        .attr("height", height);
        
    // Margenes (relativos a la seccion de dibujo de las barras)
    const margenInferior = 250; // Espacio a dejar en la seccion inferior de la pantalla
    const margenSuperior = 50;  // Espacio a dejar en la seccion superior de la pantalla
    const margenHorizontal = 15; // Espacio a dejar en cada lado horizontal de la pantalla
    const paddingBarra = 3; // Espacio a dejar en cada lado entre barra y barra
    
    const alturaLabel = -10 // Altura a la que aparecen los labels por encima de las barras
    const alturaIndice = 40 // Altura a la que aparecen los indices por debajo de las barras
    const alturaFlecha = 115 // Altura a la que aparecen las flechas por debajo de las barras
    
    const largoFlecha = 50 // Largo vertical de las flechas
    
    //const arrowSpacing = 50; // Horizontal spacing between arrows targeting the same index
    //const arrowHeight = 20; // Height of the arrow

    // Construimos la escala relativa para el eje vertical
    const escalaY = d3.scaleLinear()
        .domain([render.minimo, render.maximo])
        .range([0, height - (margenInferior + margenSuperior)]);
    
    // Notacion: usamos "zona barra" para referirse a la region ocupada por una barra y su espaciado con otras barras,
    //  y usamos "barra" para referirse a la region efectivamente ocupada (i.e. coloreada) por una barra
    // Por ello, las n "zonas barras" no tienen espaciado entre si, mientras que las "barras" si tienen espacio entre ellas
    
    const widthZonaBarra = (width - (2 * margenHorizontal)) / render.elementos.length // Ancho que ocupa la zona de cada barra (incluyendo el espaciado entre barras)
    const widthBarra = widthZonaBarra - (2 * paddingBarra) // Ancho que ocupa cada barra efectivamente (sin incluir el espaciado)
    let inicioZonaBarra = new Array(render.elementos.length) // Posicion x de inicio de la zona de cada barra (incluyendo el espaciado entre barras)
    let inicioBarra = new Array(render.elementos.length) // Posicion x de inicio de cada barra efectivamente (sin incluir el espaciado)
    
    // Calculamos los inicios de zonas y de barras
    for (let i = 0; i < render.elementos.length; i++) {
        inicioZonaBarra[i] = margenHorizontal + (i * widthZonaBarra) 
        inicioBarra[i] = inicioZonaBarra[i] + paddingBarra
    }

    
    // Cuerpo de los elementos
    svg.selectAll("rect")
        .data(render.elementos)
        .enter()
        .append("rect")
        .attr("x", (_, i) => inicioBarra[i])
        .attr("y", e => height - margenInferior - escalaY(e.valor))
        .attr("width", widthBarra)
        .attr("height", e => escalaY(e.valor))
        .attr("fill", e => estilosElemento(e)["color-interno"]);
    
    // Labels numericos de los elementos
    svg.selectAll(".num-label")
        .data(render.elementos)
        .enter()
        .append("text")
        .attr("class", "num-label")
        .attr("x", (_, i) => centro(inicioZonaBarra[i], widthZonaBarra))
        .attr("y", e => height - margenInferior - escalaY(e.valor) + alturaLabel)
        .attr("text-anchor", "middle")
        .attr("font-size", "32px")
        .attr("font-weight", "bold")
        .attr("font-family", "Rubik, serif")
        .attr("fill", "black")
        .text(e => e.label);
    
    // Labels de indices del arreglo
    svg.selectAll(".index-label")
        .data(render.elementos)
        .enter()
        .append("text")
        .attr("class", "index-label")
        .attr("x", (_, i) => centro(inicioZonaBarra[i], widthZonaBarra))
        .attr("y", height - margenInferior + alturaIndice)
        .attr("text-anchor", "middle")
        .attr("font-size", "28px")
        .attr("font-weight", "bold")
        .attr("font-family", "Rubik, serif")
        .attr("fill", "#464646")
        .text((_, i) => i);
    
    
    // Agrupamos las flechas por indice
    const flechasPorIndice = d3.group(render.flechas, f => f.indice);
    
    // Renderizamos las flechas debajo de las barras, considerando cantidad de flechas por barra para espaciar
    flechasPorIndice.forEach((flechasIndice, _) => {
        flechasIndice.forEach((flecha, i) => {
            // Calculamos el centro de cada flecha relativo al centro de su zona barra
            //  usando espaciado segun la cantidad de flechas que apuntan a esta barra
            let centroZonaBarra = centro(inicioZonaBarra[flecha.indice], widthZonaBarra);
            let centroFlecha
            switch (flechasIndice.length) {
                case 1:
                    centroFlecha = centroZonaBarra
                    break;
                case 2:
                    centroFlecha = centroZonaBarra + (i == 0 ? -1 : 1) * 20 
                    break;
                case 3:
                    centroFlecha = centroZonaBarra + ((i == 0 ? -1 : 1) * 28 * (i != 1 ? 1 : 0))
                    break;
                default:
                    console.error("¡Cantidad de flechas no soportada!")
                    break;
            }
            
            
            // Draw arrow line
            svg.append("line")
            .attr("x1", centroFlecha)
            .attr("x2", centroFlecha)
            .attr("y1", height - margenInferior + alturaFlecha) // Start below the rectangle
            .attr("y2", height - margenInferior + alturaFlecha - largoFlecha - 2) // Arrow height
            .attr("stroke", estilosFlecha(flecha)["color-interno"])
            .attr("stroke-width", 4);

            // Draw arrowhead
            svg.append("line")
                .attr("x1", centroFlecha - 10)
                .attr("x2", centroFlecha)
                .attr("y1", height - margenInferior + alturaFlecha - largoFlecha + 15)
                .attr("y2", height - margenInferior + alturaFlecha - largoFlecha)
                .attr("stroke", estilosFlecha(flecha)["color-interno"])
                .attr("stroke-width", 4);
            svg.append("line")
                .attr("x1", centroFlecha + 10)
                .attr("x2", centroFlecha)
                .attr("y1", height - margenInferior + alturaFlecha - largoFlecha + 15)
                .attr("y2", height - margenInferior + alturaFlecha - largoFlecha)
                .attr("stroke", estilosFlecha(flecha)["color-interno"])
                .attr("stroke-width", 4);


            // Label de la flecha, presentados verticalmente
            svg.append("text")
                .attr("x", centroZonaBarra)
                .attr("y", height - margenInferior + alturaFlecha + 30 + i * 35)
                .attr("text-anchor", "middle")
                .attr("font-size", flecha.tamanio != null ? flecha.tamanio : "28px")
                .attr("font-weight", "bold")
                .attr("font-family", "Rubik, serif")
                .attr("fill", estilosFlecha(flecha)["color-interno"])
                .text(flecha.label);
        });
    });

}