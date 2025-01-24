# Utilidad para traducir del formato "incremental" de escritura (.json) al formato 
#  de estado que el visualizador usa (min.js).

import json
import argparse

def calcularRenderGrafo(incremento, ultimoEstado):
    # Modificamos los nodos
    nodos = ultimoEstado["render"]["nodos"].copy()
    for n in incremento["nodosCambiados"]:
        nodos[n] = nodos[n] | incremento["nodosCambiados"][n]
        
    # Modificamos las aristas
    aristas = ultimoEstado["render"]["aristas"].copy()
    for e in incremento["aristasCambiadas"]:
        # Buscamos la arista equivalente en aristas
        for indice, j in enumerate(aristas):
            if e["fuente"] == j["fuente"] and e["destino"] == j["destino"]:
                aristas[indice] = j | e
                
    # Confeccionamos el objeto de render de grafo
    objetoRender = {
        "nodos": nodos,
        "aristas": aristas 
    }
    return objetoRender

def calcularRenderLista(incremento, ultimoEstado):
    elementos = ultimoEstado["render"]["elementos"].copy()
    
    # Modificar elementos existentes
    if "elementosCambiados" in incremento:
        for indice, elemento in incremento["elementosCambiados"].items():
            elementos[int(indice)] = elemento
        
    # Eliminar elementos
    if "elementosBorrados" in incremento:
        for indice in sorted(incremento["elementosBorrados"], reverse=True):
            elementos.pop(indice)
    
    # Agregar elementos
    if "elementosAgregadosAntesDe" in incremento:
        for indiceAntesDe, elemento in incremento["elementosAgregadosAntesDe"].items():
            elementos.insert(int(indiceAntesDe), elemento)
        
    flechas = ultimoEstado["render"]["flechas"].copy()
    
    # Modificar flechas existentes
    if "flechasCambiadas" in incremento:
        for label, f in incremento["flechasCambiadas"].items():
            # Buscamos la flecha equivalente en flechas
            for indice, j in enumerate(flechas):
                if label == j["label"]:
                    flechas[indice] = j | f
        
    # Eliminar flechas
    if "flechasBorradas" in incremento:
        for label in incremento["flechasBorradas"]:
            for indice, j in enumerate(flechas):
                if j["label"] == label:
                    flechas.pop(indice)
    
    # Agregar flechas
    if "flechasAgregadas" in incremento:
        for flecha in incremento["flechasAgregadas"]:
            flechas.append(flecha)
    
    
    return {
        "elementos": elementos,
        "flechas": flechas,
        "minimo": ultimoEstado["render"]["minimo"],
        "maximo": ultimoEstado["render"]["maximo"]
    }


def calcularRender(incremento, ultimoEstado):
    if ultimoEstado["visualizacion"] == "grafo":
        # Visualizacion de tipo Grafo
        return calcularRenderGrafo(incremento, ultimoEstado)
    elif ultimoEstado["visualizacion"] == "lista":
        # Visualizacion de tipo Lista
        return calcularRenderLista(incremento, ultimoEstado)    
    else:
        # Ningun tipo de visualizacion corresponde
        return {}

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Convierte versiones 'normales' de casos de simulación (carpeta casos/) en las versiones 'minificadas' que el parser de estados usa (carpeta public/assets/js/simulaciones).")
    parser.add_argument("input_filename", help="Path al archivo 'normal'.")
    parser.add_argument("output_filename", help="Path a dónde guardar el archivo 'minificado'.")
    args = parser.parse_args()

    try:
        # Abrir el archivo de entrada
        with open(args.input_filename, 'r') as infile:
            data = json.load(infile)
        
        if not isinstance(data, list):
            raise ValueError("Formato del archivo de entrada inválido.")
        
        # Confeccionamos el objeto de estados
        estados = [data[0]]
        
        for incremento in data[1:]:
            if incremento.get("incremental", True):
                # Aplicamos el cambio incremental en base al ultimo estado ya calculado
                ultimoEstado = estados[-1]
                nuevoEstado = {
                    "linea": incremento["linea"],
                    "contexto": incremento["contexto"],
                    "variables": ultimoEstado["variables"] | incremento["variablesAlteradas"],
                    "variablesAlteradas": {clave: True for clave in incremento["variablesAlteradas"]},
                    "visualizacion": ultimoEstado["visualizacion"],
                    "render": calcularRender(incremento, ultimoEstado)
                }
                estados.append(nuevoEstado)
            else:
                # Si el cambio es no incremental, se lo aplica como un nuevo estado
                estados.apppend(incremento)
        
        # Escribir el archivo a la salida
        with open(args.output_filename, 'w') as outfile:
            outfile.write("export default () => ({estados: ")
            json.dump(estados, outfile, separators=(',', ':'), ensure_ascii=False)
            outfile.write("})")

        print(f"Archivo guardado en {args.output_filename}")

    except (json.JSONDecodeError, ValueError) as e:
        print(f"Error: {e}")
    except FileNotFoundError:
        print("Error: Archivo de entrada no hallado.")