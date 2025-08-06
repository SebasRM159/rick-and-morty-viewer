
## Pruebas Funcionales - Rick and Morty Character Viewer

### 1. Visualización de personajes
- **Caso 1.1: Carga inicial de personajes**
  - Precondición: La app está ejecutándose en http://localhost:3000
  - Pasos:
    1. Abrir la app en el navegador.
  - Resultado esperado: Se muestra un grid con tarjetas de personajes, cada una con imagen, nombre, estado y especie.

### 2. Votación (Like/Dislike)
- **Caso 2.1: Votar Like**
  - Pasos:
    1. Hacer clic en el botón "Like" de cualquier personaje.
  - Resultado esperado: El puntaje del personaje aumenta en 1.
- **Caso 2.2: Votar Dislike**
  - Pasos:
    1. Hacer clic en el botón "Dislike" de cualquier personaje.
  - Resultado esperado: El puntaje del personaje disminuye en 1.

### 3. Filtrado por nombre
- **Caso 3.1: Filtrar personajes**
  - Pasos:
    1. Escribir parte del nombre de un personaje en el campo de filtro.
  - Resultado esperado: Solo se muestran los personajes cuyo nombre contiene el texto ingresado.

### 4. Persistencia de votos
- **Caso 4.1: Persistencia en localStorage**
  - Pasos:
    1. Votar (Like o Dislike) a un personaje.
    2. Recargar la página.
  - Resultado esperado: El puntaje del personaje permanece igual tras la recarga.

### 5. Manejo de errores
- **Caso 5.1: Fallo en la API**
  - Precondición: La API no responde o responde con error.
  - Pasos:
    1. Simular caída de la API (desconectar internet o modificar endpoint).
    2. Recargar la app.
  - Resultado esperado: Se muestra un mensaje de error o la app no se rompe.

### 6. Responsive
- **Caso 6.1: Visualización en móvil**
  - Pasos:
    1. Reducir el ancho de la ventana del navegador a menos de 600px.
  - Resultado esperado: El grid de personajes se adapta a una sola columna.
## Mejoras futuras
- Autenticación para nuevos registros de personajes.
- Opción para ordenar por atributos.
- Paginación para manejar más de 20 personajes.
- Crear grupos personalizados de personajes.
- Sección de comentarios.
- Página individual por personaje.
- Chat con personaje (IA).