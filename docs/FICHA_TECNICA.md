## Estructura de Archivos

```python
├── assets # Diseños gráficos, mock-ups, etc.
├── docs   # Documentación
└── src
	├── casos    # Casos de visualización
	├── public   # Acá empieza el sitio web estático
	│	├── assets
	│	│	├── css    # Archivos CSS compilados por TailwindCSS
	│	│	├── images # Assets visuales
	│	│	├── js     # Toda la lógica de aplicación está acá
	│	│	│	├── codigos       # Pseudocódigos
	│	│	│	├── data          # Data estática (e.g. qué conceptos listar)
	│	│	│	├── simulaciones  # Versiones minificadas de los archivos en src/casos
	│	│	│	├── grafo.js      # Visualización de grafos
	│	│	│	├── htmx.js       # Biblioteca HTMX
	│	│	│	├── main.js       # Lógica de la página principal
	│	│	│	└── visualizar.js # Lógica general de visualización
	│	├── components      # Componentes reutilizables (e.g. header)
	│	├── layouts         # Vistas de la página
	│	│	└── conceptos      # Acá están todas las explicaciones de conceptos
	│	├── templates       # Templates usados a lo largo de la página
	│	├── conceptos.html  # Vista de conceptos 
	│	├── index.html      # Vista inicial
	│	└── visualizar.html # Vista de visualización
	└── tailwind # Estilos CSS personalizados 
```
Los directorios y archivos más importantes para entender cómo funciona la aplicación son:
* `src/public/layouts/conceptos`: Acá escribís texto explicativo en formato HTML.
* `src/public/assets/js/visualizar.js`: Toda la lógica que lee los pseudocódigos y casos de visualización, y lo renderiza.
* `src/public/assets/js/codigos`: Acá escribís pseudocódigos con toda la información sobre los algoritmos. 
* `src/casos`: Acá escribís casos de visualización en [Formato Incremental](#escribir-casos-de-visualización). Estos archivos no se leen por el visualizador, sino que antes deben ser minificados con `minificar.py`.
* `src/public/assets/js/data`: Información estática para cosas como listado de secciones.
* `src/public/assets/js/simulaciones`: A este directorio van a parar las versiones minificadas (a través de `minificar.py` o `npm run minificar`) de los casos de visualización. Estos son los archivos que el visualizador lee para renderizar.

## Escribir Explicaciones
Para crear la explicación de un nuevo concepto, solo hace falta crear un nuevo archivo `src/public/layouts/conceptos/nuevoconcepto.html`, y escribirlo como cualquier otro en ese directorio. Se puede usar archivos en `src/public/assets`. No olvidar cambiar el título de la página, y también el link de los botones de "Probar visualizador" para que lleven a `/visualizar.html?codigo=nuevoconcepto`. Además, para que la sección aparezca listada, es necesario agregarla a `src/public/assets/js/data/listado.js`.

## Escribir Pseudocódigo
Para crear el pseudocódigo que debería verse al cargar `/visualizar.html?codigo=nuevoconcepto`, hace falta crear un nuevo archivo `src/public/assets/js/codigos/nuevoconcepto.js`, y escribirlo como cualquier otro en ese directorio. Los archivos de código son simplemente un objeto en formato JSON con los siguientes campos:
* `titulo`: El título que aparece en la página
* `input` y `output`: Explicación sobre qué entradas y salidas tiene el algoritmo, en [Formato Colorinche](#formato-colorinche)
* `linkExplicacion`: enlace al layout de explicación correspondiente, si tiene
* `cantidadCasos`: cantidad de casos de visualización del algoritmo. Si se setea en `N`, entonces se espera que dentro de `src/public/assets/js/simulaciones/nuevoconcepto/` existan los archivos `nuevoconcepto1.min.js` hasta `nuevoconceptoN.min.js`
* `lineas`: Arreglo de líneas de pseudocódigo, en [Formato Colorinche](#formato-colorinche)

## Escribir Casos de Visualización
Para crear un nuevo caso de visualización `N` que aparezca en el listado de casos en `/visualizar.html?codigo=nuevoconcepto`, hace falta crear un nuevo archivo `src/casos/nuevoconcepto/nuevoconceptoN.json`, y escribirlo como cualquier otro en ese directorio. No olvidar cambiar el campo `cantidadCasos` en `src/public/assets/js/codigos/nuevoconcepto.js`, y también correr `npm run minificar` luego de hacer cambios. Los archivos de visualización son arreglos de objetos JSON, donde cada objeto después del primero define los cambios que ocurrieron al estado del visualizador desde el paso anterior.

### Primer Estado
El primer estado (primer objeto en el arreglo) es siempre un objeto JSON con el campo `incremental` puesto en `false`. Además, se esperan los siguientes campos:
* `linea`: qué línea del pseudocódigo marcar como "actual". Si se pone un `0` entonces no se marca ninguna línea.
* `contexto`: comentarios contextuales del paso actual, en [Formato Colorinche](#formato-colorinche)
* `variables`: diccionario clave-valor donde las claves son los nombres de las variables presentes al iniciar
* `visualizacion`: qué tipo de visualización tendrá el caso. Los valores posibles son: `grafo`
* `render`, información de renderizado, dependiente de qué tipo de visualización se eligió. Acá se especifican cosas como la estructura del grafo

### Estados Incrementales
Los estados subsiguientes normalmente se escriben tal que se explican las modificaciones realizadas respecto al estado anterior. Los campos más usados son:
* `linea`: qué línea del pseudocódigo marcar como "actual". Si se pone un `0` entonces no se marca ninguna línea.
* `contexto`: comentarios contextuales del paso actual, en [Formato Colorinche](#formato-colorinche)
* `variablesAlteradas`: diccionario clave-valor donde las claves son los nombres de las variables modificadas/creadas, y los valores representan su nuevo valor (o al menos qué texto mostrar para representarlo)
Hay otros campos que se usan dependiendo de qué tipo de visualización se está usando. Por ejemplo, si la visualización es un grafo, se usan los campos `nodosCambiados` y `aristasCambiadas` para cambiar los estilos visuales.

### Tipos de Visualizaciones
#### Grafo
La visualización de grafo espera que en `render` se definan campos de `nodos` y `aristas`.

En `nodos` debe haber un diccionario clave-valor, donde los valores son objetos con campos `id`,`label`,`estilo`,`x`,`y`. `x` e `y` son porcentajes del `0.0` al `100.0` de dónde ubicar el nodo. `estilo` indica de qué color se muestra el nodo, útil para resaltar cosas; las opciones son `rojo`,`naranja`,`amarillo`,`verde`,`celeste`,`indigo`,`violeta`,`gris`.

En `aristas` debe haber un arreglo de objetos con campos `fuente`,`destino`,`label`,`estilo`,`dirigido`. `estilo` es igual a en `nodos`. `label` solo se usa si el grafo es pesado. `dirigido` es un booleano que se usa para indicar si es una línea o una flecha.

## Formato Colorinche
Muchas partes del visualizador usan el Formato Colorinche para poder escribir en texto plano algo que se pueda renderizar con colores y estilos básicos. En esencia, es una versión muy simple de algo parecido a Markdown. Se aplican las siguientes transformaciones, de acuerdo al código en `src/public/assets/js/visualizar.js`:
* Cualquier salto de línea (`\n`) se reemplaza por un `<br />`.
* Las expresiones de la forma `<simbolos><estilo>{<texto>}` se renderizan.
  * `<texto>` es texto a mostrar.
  * `<estilo>` es cualquiera de las siguientes opciones (y también el string vacío):
    * `Rojo`, `Naranja`,`Amarillo`,`Verde`,`Celeste`,`Indigo`,`Violeta`,`Gris`: simplemente colorea del color especificado
    * `Var`,`Con`,`Key`,`Valor`,`Struct`: también son simplemente colores, pero representan los tokens del color theme usado por el pseudocódigo. Por ejemplo, con `Var` coloreamos variables, con `Key` keywords (palabras clave), etc. Ver ejemplos para entender cúando usarlos.
`<simbolos>` es cualquier string (incluso en vacío) compuesto por los caracteres:
  * `~`: pone el texto en negrita
  * `#`: pone el texto en fuente monoespaciada (fuente para código)
Entonces, si se escribe `#~Naranja{hola}`, se renderiza un "hola" naranja en negrita y en fuente monoespaciada.
``