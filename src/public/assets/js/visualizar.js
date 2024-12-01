import simulacionDummy from './simulaciones/dummy.js';
import codigoDummy from './codigos/dummy.js';
import Alpine from 'https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/module.esm.js';
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

function renderGrafo(nodos, aristas) {
    const width = document.getElementById('canvas-container').clientWidth;
    const height = document.getElementById('canvas-container').clientHeight;
    
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

function renderSintaxis(texto) {
    let textoConSaltos = texto.replace(/\n/g, '<br />');
    // RegEx para renderizar colores de acuerdo al formato COLOR{texto}
    const regex = /([~#]+)([A-Za-z]*)\{([^\}]+)\}/g;
    let textoRenderizado = textoConSaltos.replace(regex, (match, simbolos, color, texto) => {
        //console.log(simbolos)
        let clases = "";
        if(simbolos.includes("~")) clases += "font-bold ";
        if(simbolos.includes("#")) clases += "font-exCodigo ";
        if(color != "") clases += `text-ex${color} `;
        return `<span class="${clases}">${texto}</span>`
    });
    return textoRenderizado
}

function cargarEstado(estado) {
    // Renderizar en visualizador
    switch (estado.visualizacion) {
        case "grafo":
            renderGrafo(estado.render.nodos, estado.render.aristas)
            break;
        default:
            break;
    }
    
    // Mostrar variables
    const padreVariables = document.getElementById("variables");
    padreVariables.innerHTML = "";
    Object.entries(estado.variables).forEach(([variable, valor]) => {
        const pVariable = document.createElement("p");
        pVariable.textContent = `>>> ${variable}`;
        pVariable.classList.add("font-exCodigo");
        padreVariables.appendChild(pVariable);
        
        const pValor = document.createElement("p");
        pValor.textContent = `${valor}`;
        pValor.classList.add("font-exCodigo");
        pValor.classList.add(estado.variablesAlteradas[variable] ? "text-exVerde" : "text-exGrisOscuro");
        padreVariables.appendChild(pValor);
    })
    
    // Seleccionar línea de código
    const padreCodigo = document.getElementById("codigo");
    Array.from(padreCodigo.children).forEach((tag, indice) => {
        if (indice + 1 == estado.linea) {
            tag.classList.add("seleccionada")
        } else {
            tag.classList.remove("seleccionada")
        }
    });
    
    // Mostrar contexto
    const padreContexto = document.getElementById("contexto");
    const pContexto = padreContexto.children[0];
    pContexto.innerHTML = renderSintaxis(estado.contexto);
}

function renderCodigo(objetoCodigo) {
    // Cargamos el título principal
    let tituloVisualizador = document.getElementById("titulo-visualizador");
    tituloVisualizador.innerHTML = objetoCodigo.titulo;
    
    // Cargamos el enlace correcto para el botón de 'Ver Explicación'
    let verExplicacion = document.getElementById("link-ver-explicacion");
    if (objetoCodigo.linkExplicacion != null) {
        verExplicacion.href = objetoCodigo.linkExplicacion
        verExplicacion.classList.remove('hidden');
    } else {
        verExplicacion.classList.add('hidden');
    }
    
    // Cargamos la descripción del input
    let descripcionInput = document.getElementById("descripcion-input");
    descripcionInput.innerHTML = `<b>Input:</b> ${renderSintaxis(objetoCodigo.input)}`;
    
    // Cargamos la descripción del output
    let descripcionOutput = document.getElementById("descripcion-output");
    descripcionOutput.innerHTML = `<b>Output:</b> ${renderSintaxis(objetoCodigo.output)}`;
    
    // Cargamos las líneas de código en el visualizador
    let padreCodigo = document.getElementById("codigo");
    padreCodigo.innerHTML = "";
    objetoCodigo.lineas.forEach((linea, indice) => {
        padreCodigo.innerHTML += `<div class="block select-none"><div class="w-6 mr-3 inline-block text-end text-exVerdeOscuro">${indice + 1}</div><div class="inline whitespace-pre select-text">${renderSintaxis(linea)}</div></div>`
    })
}

function calcularVelocidadMs(velocidadBase, multiplicador) {
    return (1.0 / multiplicador.substring(0, multiplicador.length-1)) * velocidadBase;
}


var simulacion = null;
var codigo = null;
var velocidadBaseMs = 1000;
var intervalID = null; // acá guardamos el handle de setInterval


document.addEventListener('alpine:init', () => {
    // Cargamos simulacion y codigo dummy
    simulacion = simulacionDummy().estados
    codigo = codigoDummy()
    
    Alpine.store('simulacion', {
        rip: 0,
        ultimoEstado: simulacion.length - 1,
        reproduciendo: false,
        velocidad: '1.0x'
    })
    
    renderCodigo(codigo);
    cargarEstado(simulacion[Alpine.store('simulacion').rip]);
    
    document.getElementById("btn-adelante").addEventListener("click", () => {
        if(Alpine.store('simulacion').rip >= simulacion.length - 1) return;
        Alpine.store('simulacion').rip++;
        cargarEstado(simulacion[Alpine.store('simulacion').rip]);
    });
    
    document.getElementById("btn-atras").addEventListener("click", () => {
        if(Alpine.store('simulacion').rip <= 0) return;
        Alpine.store('simulacion').rip--;
        cargarEstado(simulacion[Alpine.store('simulacion').rip]);
    })
    
    document.getElementById("btn-reiniciar").addEventListener("click", () => {
        Alpine.store('simulacion').rip = 0;
        cargarEstado(simulacion[Alpine.store('simulacion').rip]);
    })
    
    document.getElementById("btn-final").addEventListener("click", () => {
        Alpine.store('simulacion').rip = simulacion.length - 1;
        cargarEstado(simulacion[Alpine.store('simulacion').rip]);
    })
    
    document.getElementById("btn-ejecutar").addEventListener("click", () => {
        Alpine.store("simulacion").reproduciendo = ! Alpine.store("simulacion").reproduciendo
        if (Alpine.store("simulacion").reproduciendo) {
            // Reanudar reproduccion
            if(intervalID) clearInterval(intervalID);
            intervalID = setInterval(() => {
                if (Alpine.store('simulacion').rip < simulacion.length - 1) {
                    // No llegamos al ultimo estado, avanzamos
                    Alpine.store('simulacion').rip++;
                    cargarEstado(simulacion[Alpine.store('simulacion').rip]);
                } else {
                    // Llegamos al ultimo estado, detenemos el interval
                    clearInterval(intervalID);
                    Alpine.store('simulacion').reproduciendo = false;
                }
            }, calcularVelocidadMs(velocidadBaseMs, Alpine.store('simulacion').velocidad));
        } else {
            // Pausar reproduccion
            if (intervalID) {
                clearInterval(intervalID);
                intervalID = null;
            }
        }
    })
    
    document.addEventListener("btn-velocidad", e => {
        Alpine.store('simulacion').velocidad = e.detail
    })
    
    
    import(`./simulaciones/prueba2.js`)
        .then((modulo) => {
            simulacion = modulo.default().estados;
            Alpine.store('simulacion', {
                rip: 0,
                ultimoEstado: simulacion.length - 1,
                reproduciendo: false,
                velocidad: '1.0x'
            });
            cargarEstado(simulacion[Alpine.store('simulacion').rip])
            
        });
    import(`./codigos/prueba2.js`)
        .then((modulo) => {
            codigo = modulo.default();
            renderCodigo(codigo);
        });
    
    
    
})

window.Alpine = Alpine;
Alpine.start();