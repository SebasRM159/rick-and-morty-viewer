# Rick and Morty Character Viewer

## Descripción general
Aplicación web que consume la API pública de Rick and Morty para mostrar personajes, permitiendo a los usuarios votar con "Like" y "Dislike". Desarrollada con React, incluye persistencia local de votos y filtrado por nombre.

## Instrucciones para ejecutar la app
1. Clona el repositorio:
    1. git clone [URL-del-repositorio]
    2. cd direccion del repositorio
   Instala dependencias:
    1. npm install
    2. npm start
   Inicia la aplicación:
    1. Abrir http://localhost:3000 en navegador

## Cómo se consumió la API
- Endpoint utilizado: https://rickandmortyapi.com/api/character
- Método: fetch para GET requests
- Transformación de datos: Se extrae el array results de la respuesta JSON
- Ejemplo de consumo(javascript):
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    return data.results;

## Estructura del codigo:
- Components: Componentes reutilizables de UI 
  [ Card.js , FilterInput.js ]
- Services: Capa de servicio para llamadas a la API
  [ api.js ]
- Styles: Estilos globales y específicos de componentes
  [ App.css ]
- App.js: Componente raíz (manejo de estado principal)
- index.js: Punto de entrada (renderiza App en el DOM)
