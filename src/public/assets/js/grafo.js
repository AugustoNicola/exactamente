import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";


function svgPos(dimension, porcentaje) {
    if (porcentaje < 0.0 || porcentaje > 100.0) {
        throw new Error("Porcentaje inválido!")
    }
    return Number((porcentaje / 100.0) * dimension)
}

function estilosNodo(v) {
    switch (v.estilo) {
        case "verde":
            return {
                "color-borde": "#67cbb0",
                "color-interno": "#b0eedd"
            }
        case "celeste":
            return {
                "color-borde": "#008296",
                "color-interno": "#78cfdc"
            }
        case "gris":
        default:
            return {
                "color-borde": "#464646",
                "color-interno": "#aeaeae"
            }
    }
}

function estilosArista(e) {
    switch (e.estilo) {
        case "verde":
            return {
                "stroke": "#387467",
                "stroke-width": 15
            }
        case "celeste":
            return {
                "stroke": "#008296",
                "stroke-width": 15
            }
        case "gris":
        default:
            return {
                "stroke": "#2c2c2c",
                "stroke-width": 15
            }
    }
}

export function renderGrafo(nodos, aristas) {
    const width = document.getElementById('canvas-container').clientWidth;
    const height = document.getElementById('canvas-container').clientHeight;
    
    document.querySelector("#canvas-visualizador").innerHTML = "";
    
    const svg = d3.select("#canvas-visualizador")
        .attr("width", width)
        .attr("height", height);
    
    // Aristas
    svg.selectAll("line")
    .data(aristas, e => `${e.fuente}-${e.destino}`) // creamos IDs unicos para las aristas
    .join(
        enter => enter.append("line")
        .attr("x1", e => svgPos(width, nodos[e.fuente].x))
        .attr("y1", e => svgPos(height, nodos[e.fuente].y))
        .attr("x2", e => svgPos(width, nodos[e.destino].x))
        .attr("y2", e => svgPos(height, nodos[e.destino].y))
        .attr("stroke", e => estilosArista(e)["stroke"])
        .attr("stroke-width", e => estilosArista(e)["stroke-width"]),
        update => update.attr("stroke", e => estilosArista(e)["stroke"]),
        exit => exit.remove()
    );
    
    if(aristas.length > 0 && aristas[0].label != null) {
        // Cajas de las aristas
        svg.selectAll(".edge-square")
            .data(aristas, e => `${e.source}-${e.target}`)
            .join(
                enter => enter.append("rect")
                .attr("x", e => {
                    const midX = (svgPos(width, nodos[e.fuente].x) + svgPos(width, nodos[e.destino].x))/2.0
                    return midX - 40.0/2.0;
                })
                .attr("y", e => {
                    const midY = (svgPos(height, nodos[e.fuente].y) + svgPos(height, nodos[e.destino].y))/2.0
                    return midY - 40.0/2.0;
                })
                .attr("width", 40)
                .attr("height", 40)
                .attr("fill", e => estilosArista(e)["stroke"])
            );
            
        // Pesos de las aristas
        svg.append("g")
            .selectAll("text")
            .data(aristas, e => `${e.source}-${e.target}`)
            .join(
                enter => enter.append("text")
                    .attr("x", e => {
                        const midX = (svgPos(width, nodos[e.fuente].x) + svgPos(width, nodos[e.destino].x))/2.0
                        return midX;
                    })
                    .attr("y", e => {
                        const midY = (svgPos(height, nodos[e.fuente].y) + svgPos(height, nodos[e.destino].y))/2.0
                        return midY + 8.0;
                    })
                    .text(e => e.label)
                    .attr("text-anchor", "middle")
                    .attr("font-size", "24px")
                    .attr("font-weight", "bold")
                    .attr("font-family", "Rubik, serif")
                    .attr("fill", "#ffffff")
            );
    }
    
    // Bordes de los nodos
    svg.append("g")
        .selectAll("circle")
        .data(Object.entries(nodos), ([id, nodo]) => id)
        .join(
            enter => enter.append("circle")
                .attr("cx", ([, nodo]) => svgPos(width, nodo.x))
                .attr("cy", ([, nodo]) => svgPos(height, nodo.y))
                .attr("r", 55)
                .attr("fill", ([, nodo]) => estilosNodo(nodo)["color-borde"])
        );
    
    // Cuerpo de los nodos
    svg.append("g")
    .selectAll("circle")
    .data(Object.entries(nodos), ([id, nodo]) => id)
    .join(
        enter => enter.append("circle")
            .attr("cx", ([, nodo]) => svgPos(width, nodo.x))
            .attr("cy", ([, nodo]) => svgPos(height, nodo.y))
            .attr("r", 45)
            .attr("fill", ([, nodo]) => estilosNodo(nodo)["color-interno"])
    );
    
    // IDs de los nodos
    svg.append("g")
        .selectAll("text")
        .data(Object.entries(nodos), ([id, nodo]) => id)
        .join(
            enter => enter.append("text")
                .attr("x", ([, nodo]) => svgPos(width, nodo.x))
                .attr("y", ([, nodo]) => svgPos(height, nodo.y) - 8)
                .text(([id, ]) => id)
                .attr("text-anchor", "middle")
                .attr("font-size", "32px")
                .attr("font-weight", "bold")
                .attr("font-family", "Rubik, serif")
                .attr("fill", "#000000")
        );
    
    // Labels de los nodos
    svg.append("g")
        .selectAll("text")
        .data(Object.entries(nodos), ([id, nodo]) => id)
        .join(
            enter => enter.append("text")
                .attr("x", ([, nodo]) => svgPos(width, nodo.x))
                .attr("y", ([, nodo]) => svgPos(height, nodo.y) + 30)
                .text(([, nodo]) => nodo.label)
                .attr("text-anchor", "middle")
                .attr("font-size", "24px")
                .attr("font-weight", "bold")
                .attr("font-family", "Rubik, serif")
                .attr("fill", "#000000")
        );
}