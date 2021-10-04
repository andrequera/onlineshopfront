# Resumen para la realización del proyecto Online Shop

Realizado por: Fatima Querales, andrequera@gmail.com

Se realizó dos repositorios, uno para front y otro para back. Cada uno con sus commit a Git donde se puede visualizar el desarrollo del proyecto.

Se utilizó Vercel para deploy del Front.
https://onlineshopfront.vercel.app/

Se utilizó Heroku para el deploy del Back.
https://fierce-island-50875.herokuapp.com

El Front fue realizado con JavaScript, Boopstrap.

El Back fue desarrollado con node e insomnia para probar los end point.

Rutas: 
- Get: /api/products muestra todos los productos. 
- Get: /api/products/:id muestra un solo producto. 
- Get: /api/products?name=`productoabuscar` muestra el filtrado por nombre del producto. (Buscador)
- Get: /api/categorys muestra todas las categorías.
- Get: /api/categorys/:id muestra solo una categoria.
- Get: /api/products/category/:id muestra productos por categorias.

Contiene dos vistas: 
1. Shop: donde se observan todos los productos. Contiene el input que permite el filtrado por nombre del producto, fue realizado desde el back. Además, permite escoger la cantidad de producto a comprar y contiene el boton de compra. También, contiene boton de filtro que permite ordenar los productos por precio de menor a mayor.

2. Buy: que se visualiza la compra realizada en tabla con producto, cantidad y precio.

Se utilizo mySQL Workbench para visualizar la base de datos a usar en el desarrollo del proyecto.


-------------------------