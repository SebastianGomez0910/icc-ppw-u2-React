# Programación y Plataformas Web 

# Frameworks Web: React

<div align="center">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfZcpvdnbhcRhQ_D-Gxk2yO_MEYCH6hGioKYRiM_rQjZJPez2kxbJ-ODzXYUFtU2uTh78&usqp=CAU" width="80" alt="React Logo">

</div>


## Practica 2: Fundamentos 

### Autores

**Sebastian Gomez**  
📧 agomezm12@est.ups.edu.ec  
💻 GitHub: [SebastianGomez0910](https://github.com/SebastianGomez0910)

**Jean Pierre**
📧 jvalarezov@est.ups.edu.ec  
💻 GitHub: [jean-pierre-valarezo](https://github.com/jean-pierre-valarezo)

Pequeño cambio para re-ejecutar workflow de GitHub Actions.

## Fudamentos de React

## ¿Qué es React?

React.js, comúnmente llamado simplemente React, es una biblioteca de JavaScript que se utiliza para construir interfaces de usuario. Toda aplicación web React se compone de componentes reutilizables que conforman partes de la interfaz de usuario — podemos tener un componente distinto para nuestra barra de navegación, otro para el pie de página, otro para el contenido principal, etc.

## Características principales de React

1. **Componentes**: React utiliza una arquitectura basada en componentes, que son piezas de UI independientes y reutilizables. Cada componente encapsula su lógica, marcado (usando JSX) y a menudo su estado local.

2. **Declarativo**: React es declarativo, lo que significa que describes cómo debe verse tu interfaz de usuario para un estado determinado y React se encarga de actualizar el DOM real de manera eficiente cuando el estado cambia.

3. **Virtual DOM**: Para optimizar el rendimiento, React utiliza un DOM Virtual, que es una representación en memoria del DOM real. Cuando hay cambios de estado, React actualiza el VDOM, compara las diferencias con el VDOM anterior y solo aplica las actualizaciones necesarias y mínimas al DOM real.

4. **Flujo de datos Unidireccional**: Los datos en React fluyen en una sola dirección, generalmente del componente padre al componente hijo a través de propiedades. Esto hace que el flujo de datos sea más predecible y que el código sea más fácil de depurar.

5. **JSX**: Es una extensión de sintaxis que permite escribir marcado similar a HTML dentro de archivos JavaScript. Facilita la creación de los elementos de React de forma intuitiva, combinando la lógica de JS con la estructura de la UI.

6. **Hooks**: Introducidos en React 16.8, los Hooks son funciones que permiten "engancharse" al estado de React y a las funcionalidades del ciclo de vida de los componentes desde componentes funcionales, sin tener que usar las clases. El más común es useState para el manejo de estado.

## Rutas

React, al ser solo una librería para la UI, no incluye un sistema de routing integrado. En su lugar, la solución estándar y más popular es utilizar una librería externa como React Router DOM.


* Modificar el texto a mayúsculas:
```
<p>{nombre.toUpperCase()}</p>
```

## Componentes de React

Los componentes son los bloques de construcción fundamentales de cualquier aplicación React. Un componente es una función o una clase que opcionalmente acepta entradas y devuelve elementos de React que describen lo que debe aparecer en la pantalla.

Aunque React es más flexible y no impone una separación estricta en tres archivos como Angular (donde a menudo se usan archivos .js/.jsx o .ts/.tsx para todo), conceptualmente un componente tiene estas tres partes principales:

1. **Lógica del componente**: Define el comportamiento y la funcionalidad del componente. Esto incluye:

Estado: La data interna y mutable del componente.

Efectos Secundarios: Operaciones como peticiones de datos o suscripciones.

Manejo de eventos: fucniones que responden a interacciones del usuario.

Ppropiedades: Las entradas de datos que reciben desde su componente padre. 

2. **Plantilla**: Define la estructura y el diseño de la interfaz de usuario. En React la plantilla se escribe utilizando JSX que permite combinar HTML con lógica de JavaScript directamente en el archivo del componente dentro del return de la funcion o del método render() de la clase.

3. **Estilos CSS-in-JS, Módulos CSS, o Archivo Externo**:Define la apariencia visual del componente. A diferencia de Angular, donde el archivo CSS es la norma, React ofrece varias formas de manejar estilos para fomentar el encapsulamiento:

Modulo CSS: Archivos .module.css que garantiza que los nombres de las clases CSS sean únicos y locales al componente.

CSS-in-JS: Usar librerias como Styled Components o Emotion para escrirbir CSS directamente dentro del archivo JavaScript del componente usando literales de plantilla.

Hojas de estilo externas: Incluir un archivo .css o scss tradicional e importar las clases al componente.

## Resultados

### Creacion de un componente

La creación del proyecto general de React, que sirve como la estructura fundamental de la aplicación, comienza con el comando de inicialización de Vite: `npm create vite@latest nombre-del-proyecto -- --template react`. Este comando se utiliza una sola vez para generar automáticamente la estructura de directorios, configurar el entorno de desarrollo y crear los archivos esenciales necesarios (como App.jsx, main.jsx, y package.json).

Componentes generados: perfilPage, el cual le coloco en la carpeta `./code pages/perfilPage`.

### Resolucion tarea

Seguir las instrucciones del siguiente GIST: [GIST](https://gist.github.com/PabloT18/f15f92224806731541d48027df336497)


1. Captura de `main.tsx`

<img src="https://github.com/jean-pierre-valarezo/icc-ppw-u2-Practica01React/blob/main/src/assets/main.png?raw=true" width="2000" alt="main.tsx"> 

2. Captura de `app.tsx`

<img src="https://github.com/jean-pierre-valarezo/icc-ppw-u2-Practica01React/blob/main/src/assets/app.png?raw=true" width="2000" alt="app.tsx"> 

3. Captura de `perfilPage.tsx`

<img src="https://github.com/jean-pierre-valarezo/icc-ppw-u2-Practica01React/blob/main/src/assets/pefilpage1.png?raw=true" width="2000" alt="perfilPage.tsx"> 
<img src="https://github.com/jean-pierre-valarezo/icc-ppw-u2-Practica01React/blob/main/src/assets/periflpage2.png?raw=true" width="2000" alt="perfilPage.tsx"> 
4. Captura de la pagina desplegada

<img src="https://github.com/jean-pierre-valarezo/icc-ppw-u2-Practica01React/blob/main/src/assets/paginacompleta.png?raw=true" width="2000" alt="página completa"> 

5. Enlace a la pagina de githubPages
6. Enlace la repositorio de github del proyecto.

Paso 5 y 6 debe estar subido al AVAC. 