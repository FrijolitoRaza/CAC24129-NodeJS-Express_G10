# Proyecto de Streaming de Películas

Este es un proyecto básico de una aplicación de streaming de películas desarrollado con Node.js, Express y Nodemon.

## Descripción

La aplicación permite gestionar usuarios y películas mediante una API RESTful. Los usuarios pueden ser listados, creados, actualizados y eliminados. Las películas pueden tener operaciones similares para su gestión.

## Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Rutas Disponibles](#rutas-disponibles)
  - [Usuarios](#usuarios)
  - [Películas](#películas)
- [Licencia](#licencia)

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/FrijolitoRaza/CaC-24129-G10_NodeJS_Express.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd CaC-24129-G10_NodeJS_Express
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

## Uso

1. Inicia la aplicación en modo desarrollo:
    ```bash
    npm run dev
    ```

2. La aplicación estará corriendo en `http://localhost:3000`.

## Rutas Disponibles

### Usuarios

- **Listar todos los usuarios**  
  `GET /api/users`
  
  Devuelve la lista completa de usuarios.

- **Obtener un usuario por ID**  
  `GET /api/users/:id`
  
  Devuelve el usuario con el ID especificado.

- **Crear un nuevo usuario**  
  `POST /api/users`
  
  Crea un nuevo usuario. El cuerpo de la solicitud debe contener `username`, `password` y `email`.

- **Actualizar un usuario por ID**  
  `PUT /api/users/:id`
  
  Actualiza el usuario con el ID especificado. El cuerpo de la solicitud puede contener `username`, `password` y `email`.

- **Eliminar un usuario por ID**  
  `DELETE /api/users/:id`
  
  Elimina el usuario con el ID especificado.

### Películas

(Notar que la implementación de las rutas de películas no está proporcionada en tu código, pero a continuación se describe cómo podrían ser estas rutas.)

- **Listar todas las películas**  
  `GET /api/movies`
  
  Devuelve la lista completa de películas.

- **Obtener una película por ID**  
  `GET /api/movies/:id`
  
  Devuelve la película con el ID especificado.

- **Crear una nueva película**  
  `POST /api/movies`
  
  Crea una nueva película. El cuerpo de la solicitud debe contener `title`, `director`, `releaseDate`, etc.

- **Actualizar una película por ID**  
  `PUT /api/movies/:id`
  
  Actualiza la película con el ID especificado. El cuerpo de la solicitud puede contener `title`, `director`, `releaseDate`, etc.

- **Eliminar una película por ID**  
  `DELETE /api/movies/:id`
  
  Elimina la película con el ID especificado.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.
