# Catálogo de Productos Almacenados

Este proyecto es una aplicación distribuida para la gestión de un catálogo de productos almacenados. Está compuesto por un FrontEnd y un BackEnd, comunicados mediante Sockets y utilizando llamadas a procedimientos remotos mediante graphql

## Tecnologías Utilizadas

### BackEnd

* **Base de Datos**: PostgreSQL
* **Framework**: NestJS
* **API**: GraphQL
* **Pruebas Unitarias**: Jest (integrado en NestJS)
* **Documentación**: Postman y Swagger

### FrontEnd

* **Framework**: Vue 3
* **Lenguaje**: TypeScript
* **Estilos**: Tailwind CSS

### Contenedores

* **Docker Compose**: Utilizado para montar tanto el FrontEnd como el BackEnd.

***

## Objetivo del Proyecto

La primera versión de este proyecto fue realizada hace 2 años como parte de una materia universitaria. El objetivo actual es evaluar la mejora en términos de conocimientos y habilidades en los últimos 2 años, aplicando buenas prácticas de programación y tecnologías modernas.

***

## Características

### Funcionalidades del BackEnd

* **API basada en GraphQL**: Facilita la comunicación entre cliente y servidor.
* **Base de Datos en PostgreSQL**: Para el almacenamiento de productos, usuarios y movimientos de inventario.
* **Pruebas Unitarias**: Desarrollo basado en pruebas (TDD) utilizando Jest para garantizar la estabilidad de la API.
* **Documentación Interactiva**: Swagger para explorar la API y Postman para gestionar las pruebas de endpoints.

### Funcionalidades del FrontEnd

* **Interfaz Responsiva**: Adaptada para distintos dispositivos mediante Tailwind CSS.
* **Autenticación de Usuarios**: Permite el registro y autenticación de usuarios, con opción de recordar credenciales.
* **Gestión de Inventarios**: Posibilidad de visualizar productos, añadir movimientos de entrada y salida, y consultar existencias.
* **Filtrado por Clave de Producto**: Búsqueda rápida y precisa de productos en el catálogo.

***

## Requerimientos

### Instalación

### Configuración

### Base de Datos

***

## Uso

<!-- 3. Puedes interactuar con la API desde Postman o Swagger para ver las funcionalidades de creación de productos, consulta de inventarios, y autenticación. -->

***

## Pruebas

<!-- Para ejecutar las pruebas unitarias en el BackEnd:

```bash
npm run test
``` -->

***

## Mejores Prácticas

### Backend

* **SOLID Principles**: Aplicados en la estructura del código para un desarrollo limpio y mantenible.
* **TDD**: Desarrollo impulsado por pruebas unitarias.
* **Documentación**: Generada automáticamente con Swagger.

### Frontend

* **Vue 3 con TypeScript**: Para un desarrollo tipado y robusto.
* **Tailwind CSS**: Diseño eficiente y responsive.
* **Buenas Prácticas de Programación**: Código modular y reutilizable.

***

## Licencia

Este proyecto está bajo la licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.
