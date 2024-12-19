import Alpine from 'https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/module.esm.js';
import { renderGrafo } from './grafo.js'; './grafo.js'
//import codigoDummy from './codigos/dummy.js';
//import simulacionDummy from './simulaciones/dummy.js';


function calcularVelocidadMs(velocidadBase, multiplicador) {
    return (1.0 / multiplicador.substring(0, multiplicador.length-1)) * velocidadBase;
}

function renderSintaxis(texto) {
    let textoConSaltos = texto.replace(/\n/g, '<br />');
    // RegEx para renderizar colores de acuerdo al formato COLOR{texto}
    const regex = /(?=(?:[~#]+|[A-Za-z]+))([~#]*)([A-Za-z]*)\{([^\}]+)\}/g;
    let textoRenderizado = textoConSaltos.replace(regex, (match, simbolos, color, texto) => {
        let clases = "";
        if(simbolos.includes("~")) clases += "font-bold ";
        if(simbolos.includes("#")) clases += "font-exCodigo ";
        if(color != "") clases += `text-ex${color} `;
        return `<span class="${clases}">${texto}</span>`
    });
    return textoRenderizado
}

function renderEstado(estado) {
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
    // Ajustamos la cantidad de casos seleccionables
    Alpine.store('simulacion').casos = Array.from({ length: objetoCodigo.cantidadCasos }, (_, index) => `Caso ${index + 1}`);
    Alpine.store('simulacion').casoActual = "Caso 1";
    
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

var simulacion = null;
var codigo = null;
var velocidadBaseMs = 600;
var intervalID = null; // acá guardamos el handle de setInterval


document.addEventListener('alpine:init', () => {
    // Cargamos simulacion y codigo dummy
    //simulacion = simulacionDummy().estados
    //codigo = codigoDummy()
    
    // definimos el store de simulación en un estado inicial dummy
    Alpine.store('simulacion', {
        nombreCodigo: 'dummy',                // nombre de la estructura código a usar
        rip: 0,                               // indice del estado actual
        ultimoEstado: 0,                      // indice del último estado
        reproduciendo: false,                 // booleano que controla la reproducción automática
        velocidad: '1.0x',                    // texto seleccionado en el selector de velocidad
        casoActual: 'Caso 1',                 // texto seleccionado en el selector de casos
        casos: ['Caso 1'],
        actualizarCasos(cod) {
            this.casoActual = 'Caso 1'
            this.casos = Array.from({ length: cod != null ? codigo.cantidadCasos : 1 }, (_, index) => `Caso ${index + 1}`)
        }
    });
    
    // Cargamos codigo del query string
    const queryParams = new URLSearchParams(window.location.search);
    const nombreCodigo = queryParams.get('codigo');
    Alpine.store('simulacion').nombreCodigo = nombreCodigo;
    
    import(`./codigos/${nombreCodigo}.js`)
        .then((modulo) => {
            codigo = modulo.default();
            renderCodigo(codigo);
            Alpine.store('simulacion').actualizarCasos(codigo);
            // Cargamos dinámicamente el componente
            htmx.ajax('GET', '/components/selector_dropdown.html', { target: '#selector-casos' });
        });
    
    import(`./simulaciones/${nombreCodigo}/${nombreCodigo}${1}.js`)
        .then((modulo) => {
            simulacion = modulo.default().estados;
            Alpine.store('simulacion').ultimoEstado = simulacion.length - 1;
            renderEstado(simulacion[Alpine.store('simulacion').rip])
        });
    
    // Definimos los handlers de botones y controladores varios
    
    // Handler del selector de casos [Caso X v]
    document.addEventListener("btn-caso", e => {
        Alpine.store('simulacion').casoActual = e.detail;
        let nombre = Alpine.store('simulacion').nombreCodigo;
        let caso = parseInt(e.detail.match(/\d+/)[0]);
        import(`./simulaciones/${nombre}/${nombre}${caso}.js`)
            .then((modulo) => {
                simulacion = modulo.default().estados;
                Alpine.store('simulacion').rip = 0;
                Alpine.store('simulacion').ultimoEstado = simulacion.length - 1;
                Alpine.store('simulacion').reproduciendo = false;
                if (intervalID) {
                    clearInterval(intervalID);
                    intervalID = null;
                }
                renderEstado(simulacion[Alpine.store('simulacion').rip])
            });
    })
    
    // Handler del botón de reiniciar [<<]
    document.getElementById("btn-reiniciar").addEventListener("click", () => {
        Alpine.store('simulacion').rip = 0;
        renderEstado(simulacion[Alpine.store('simulacion').rip]);
    })
    
    // Handler del botón de paso anterior [<]
    document.getElementById("btn-atras").addEventListener("click", () => {
        if(Alpine.store('simulacion').rip <= 0) return;
        Alpine.store('simulacion').rip--;
        renderEstado(simulacion[Alpine.store('simulacion').rip]);
    })
    
    // Handler del botón de ejecución automática [II]
    document.getElementById("btn-ejecutar").addEventListener("click", () => {
        Alpine.store("simulacion").reproduciendo = ! Alpine.store("simulacion").reproduciendo
        if (Alpine.store("simulacion").reproduciendo) {
            // Reanudar reproduccion
            if(intervalID) clearInterval(intervalID);
            intervalID = setInterval(() => {
                if (Alpine.store('simulacion').rip < simulacion.length - 1) {
                    // No llegamos al ultimo estado, avanzamos
                    Alpine.store('simulacion').rip++;
                    renderEstado(simulacion[Alpine.store('simulacion').rip]);
                } else {
                    // Llegamos al ultimo estado, detenemos el interval
                    if (intervalID) {
                        clearInterval(intervalID);
                        intervalID = null;
                    }
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
    
    // Handler del botón de siguiente paso [>]
    document.getElementById("btn-adelante").addEventListener("click", () => {
        if(Alpine.store('simulacion').rip >= simulacion.length - 1) return;
        Alpine.store('simulacion').rip++;
        renderEstado(simulacion[Alpine.store('simulacion').rip]);
    });
    
    // Handler del botón de último paso [>>]
    document.getElementById("btn-final").addEventListener("click", () => {
        Alpine.store('simulacion').rip = simulacion.length - 1;
        renderEstado(simulacion[Alpine.store('simulacion').rip]);
    })
    
    // Handler del selector de velocidad [1.0x v]
    document.addEventListener("btn-velocidad", e => {
        Alpine.store('simulacion').velocidad = e.detail
    })
})

window.Alpine = Alpine;
Alpine.start();