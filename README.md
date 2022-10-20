# Catalogo de prouctos almacenados

## Objetivo

Evaluar los conocimientos, habilidades y destrezas en la programación de aplicaciones distribuidas utilizando Sockets y llamadas a procedimientos remotos mediante JSON RPC.

## Requerimientos

### FrontEnd

1. El sistema debe ser una aplicación Web que se adapte a los diferentes tipos de pantalla (Responsiva).

2. La comunicación con el BackEnd debe ser mediante Sockets.

3. Debe de tener una pantalla de inicio que permita a usuarios autenticarse a la aplicación o si no esta registrado registrarse, registrando un nombre de usuario y contraseña, la aplicación debe permitir recordar el usuario y contraseña para no estarlo tecleando cada vez, solo que el usuario no permita recordar los datos de autenticación.

4. El menú de la pantalla principal debe contar con las siguientes opciones (Siéntase libre de acomodarlas como quieran):

    a.  Ver un listado de todos los productos con sus existencias mostrar (Código del producto, Nombre de producto, número de unidades existentes), pudiendo filtrar por los de una clave de producto.

    b. Capturar Inventario:
       - Código del producto. 
       - Fecha de captura. 
       - Nombre del Producto. 
       - Concepto “Es una descripción de los productos que entran o salen”. 
       - Tipo de movimiento “Entrada o Salida”. 
       - Unidades “Cantidad de productos que entran o salen, ejemplo 15 es entrada -15 es salida”. 
Si ya existen productos con unidades muestre las unidades existentes, y al capturar las unidades nuevas dependiendo si es entrada o salida haga el ajuste en la interface de usuario visualmente (que le sume o reste a la existente), también si existe esa clave capturada que se traiga el nombre del producto y rellene el campo automáticamente.

    c. Consultar existencias de un producto capturando el código de un producto, mostrando como respuesta el nombre del producto y la cantidad de unidades existentes.

### BackEnd

5. La base de datos puede estar hecha en MySQL.

6. La comunicación con el FrontEnd debe ser mediante Sockets.

## Generales

Sube un reporte a esta plataforma en formato PDF de tu aplicación Web en ejecución mostrando las distintas partes, ponle una pequeña descripción a cada pantalla de lo que hace( todos los integrantes del equipo deben subir el mismo reporte como evidencia).

 
