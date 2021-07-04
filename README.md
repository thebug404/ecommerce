# OneGroup
<img src="https://res.cloudinary.com/dlkfpx8lb/image/upload/v1625347866/App_banners/Dashboard_onegroup_bps9ip.png" width="100%">
Es una aplicacion con Comunicacion en Tiempo Real, esta desarollado con [Node.js](https://nodejs.org), [Feathers.js](https://feathersjs.com), [Vue.js](https://vuejs.org)
y otras tecnologias adicionales.

## Administrador
Este usuario se caracteriza por tener control total sobre lo que sucede en la aplicacion.
> Nota: El administrador es establecido al primer usuario en **registrarse**, pero luego puede haber mas si asi lo desea el administrador/administradores.

Actividades disponibles para los usuarios administradores:
1. Gestion de usuarios.
2. Gestion de productos.
3. Gestion de categorias.

## Escritores

Actividades disponibles para los usuarios escritores:
1. Gestion de productos.
2. Gestion de categorias.

## Lectores
Este es el rol por defecto cuando un usuario se **Registra** en la aplicacion.

Actividades disponibles para los usuarios lectores:
1. Visualizacion de los productos.

## Prerrequisitos
1. Tener instalado [Node.js](https://nodejs.org).
2. Tener instalado [MongoDB](https://www.mongodb.com/try/download/community)
3. Tener instalado [ts-node](https://www.npmjs.com/package/ts-node) de manera global
4. Tener instalado [git](https://git-scm.com/)

## Clonar proyecto
Ingresa el siguiente comando en la terminal de tu ordenador para clonar el proyecto.

> `git clone https://github.com/IvanZM123/ecommerce.git`

## Estructura del proyecto.
Una ves que has clonado el proyecto, ingresa al proyecto.

1. `ecommerce-backend`: Contiene toda la logica de negocio de la aplicacion, conexion a la base de datos, autenticacion, envio de emails, etc.
2. `ecommerce-frontend`: Contiene toda las parte visual de la aplicacion, todos los componentes, interfaces, imagenes, etc.

## Concideraciones
Debido a que el proyecto utiliza validacion de correo electronico es necesario
que agregue algunas propiedades en el archivo `config/default.json`, alli encontrar
una propiedad llamada **mailer** alli es donde va a ingresar sus respectivas
propiedades.

> Puede crear una cuenta en [Mailtrap](https://mailtrap.io/) para probar esta funcionalidad.

## Backend
Ejecuta los siguientes comando.

1. `npm i`: instala todas las librerias y paquetes necesarios para arrancar el proyecto.
2. `mongod`: Levanta el servidor de base de datos **MongoDB** es necesario ejecutarlo, de no ser asi, la aplicacion no arrancara.
3. `npm run serve`: Levanta nuestro servidor. Por defecto se ejecuta en http://localhost:3030

## Frontend
Ejecuta los siguientes comando.

1. `npm i`: instala todas las librerias y paquetes necesarios para arrancar el proyecto.
3. `npm run serve`: Levanta nuestro servidor. Ahora ingresa http://localhost:8080

## ¡A codear!
