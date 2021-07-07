# OneGroup

<a href="https://onegroup-app.herokuapp.com/">
  <img src="https://res.cloudinary.com/dlkfpx8lb/image/upload/v1625347866/App_banners/Dashboard_onegroup_bps9ip.png" width="100%">
 </a>

Es una aplicacion con Comunicacion en Tiempo Real, esta desarollado con [Node.js](https://nodejs.org), [Feathers.js](https://feathersjs.com), [Vue.js](https://vuejs.org)
y otras tecnologias adicionales. Si deseas conocer su funcionamiento, da clic en el enlace [onegroup-app](https://onegroup-app.herokuapp.com/) o da clic en la imagen.

## Roles

1. **Administrador**: Este usuario se caracteriza por tener control total sobre lo que sucede en la aplicacion.
> Nota: El administrador es establecido al primer usuario en **registrarse**, pero luego puede haber mas si asi lo desea el administrador/administradores.

2. **Escritor**: Este usuario tiene permitido la manipulacion de los productos y categorias.
3. **Lectores**: Este usuario solo puede visualizar los productos. Ademas es el rol que se añade a los usuarios registrados.

## Gestion de productos.
En esta seccion se muestran todos los productos disponibles, estos puedes ser visualizados por todos los usuarios autenticados,
pero solo pueden ser ingresados, editados y eliminados por los **Adminitradores** y **Escritores**

#### Campos de los productos.

+ Title: Titulo del producto.
+ Description: Breve descripcion del producto.
+ Categories: Lista de categorias relacionadas al producto (max 3)
+ Price: Precio del producto.
+ Rating: Popularidad del producto (generado automaticamente del 1 - 5).

<img src="https://res.cloudinary.com/dlkfpx8lb/image/upload/v1625388981/App_banners/products-page_jgjjzt.png" width="100%">

## Gestion de usuarios.
<p>Solo tendra acceso los usuarios administradores, aqui se muestran todos los usuarios registrados.</p>

#### Campos de los usuarios.

+ Nombres: Nombres de los usuarios.
+ Apellidos: Apellidos de los usuarios.
+ Email: Correo electronico del usuario.
+ Role: Tipo de rol dentro de la app (ADMIN, WRITER, READER).
+ Verificado: Muestra si la cuenta esta verificada.

<img src="https://res.cloudinary.com/dlkfpx8lb/image/upload/v1625387744/App_banners/users-page_aqs1j9.png" width="100%">

## Gestion de categorias.
<p>En esta pagina solo tendran acceso aquellos usuarios cuyo rol dentro la aplicacion sea ADMIN o WRITE</p>
<img src="https://res.cloudinary.com/dlkfpx8lb/image/upload/v1625387744/App_banners/categories-page_pcpcfo.png" width="100%">

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
