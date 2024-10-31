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

## Configuración

**SERVER**

1. Configuracion de Variables de entorno para el Docker con Mysql:
   * Copia el archivo `.env.example` y renómbralo a `.env`
   * En el archivo `.env`, configura las siguientes variables:
     * `MYSQL_PORT`: Puerto en el cual se expondrá MySQL (e.g., 3306).
     * `MYSQL_ROOT_PASSWORD`: Contraseña para el usuario root de MySQL.
     * `MYSQL_DATABASE`: Nombre de la base de datos que utilizará la aplicación.

**Ejemplo**

```
MYSQL_PORT=3306
MYSQL_ROOT_PASSWORD=root
MYSQL_DATABASE=storeDB
```

2. Configuracion de variables de entorno para levantar el la API con NestJs
   * Copia el archivo `.example.development.env` y renómbralo a `development.env`
   * En el archivo de `development.env`  Configura las siguientes variables:
     * `MYSQL_PORT`: Puerto para la coneccion con Mysql
     * `DATABASE_USER`: Usuario que se usara para la coneccion
     * `DATABASE_PASSWORD`: Contraseña del usario
     * `DATABASE_HOST-db`: Host del cual se ara la coneccion
     * `MYSQL_DATABASE`: Nombre de la base de datos

**Ejemplo**

```
MYSQL_PORT=3306
DATABASE_USER=root
DATABASE_PASSWORD=root
DATABASE_HOST=mysql-db
MYSQL_DATABASE=storeDB
```

### Iniciar el enterno de desarrollo

1. Levanta el entorno de desarrollo completo:

* Usa el comando a continuación para iniciar la aplicación y la base de datos en contenedores:

```
npm run setup:dev
```

* Este comando levanta ambos servicios, `nest-app` (la aplicación NestJS) y `mysql-db` (la base de datos MySQL).

* Esta opcion permite permite desarrollo atraves de docker, los cambios que se hagan dentro de la aplicacion se veran reflejados de manera sincrona.

2. Ejecutar solo la base de datos (opcional):
   Si necesitas levantar únicamente el servicio de la base de datos, usa:

```
npm run setup:mysql-d
```

* **Nota:** Al levantar el servicio de esta manera se crearan las tablas y la informacion dentro el query que se encuentra dendto de `./mysql-dump`

3. Detener el entorno de desarrollo

* Para detener el entorno de desarrollo, ejecuta:

```
npm run docker:down
```

4. Estructura de los servicios:
   * `nest-app`: La aplicación backend, accesible en el puerto configurado en el proyecto (por defecto, 3000).
   * `mysql-db`: Base de datos MySQL, accesible en el puerto definido en MYSQL\_PORT.

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
