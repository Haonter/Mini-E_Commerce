import {estilos} from './estilos.js';

// Determinamos la pagina que se esta visitando
let paginaActual = window.location.pathname;

// Cargamos los estilos globales
document.getElementById("navBar").className = estilos.NavBar.base;
document.getElementById("logo").className = estilos.NavBar.logo;
document.getElementById("menu").className = estilos.NavBar.menu;
document.getElementById("menuLink1").className = estilos.NavBar.menuLink;
document.getElementById("menuLink2").className = estilos.NavBar.menuLink;
document.getElementById("footer").className = estilos.Footer.base;
document.getElementById("menuf").className = estilos.Footer.menu;
document.getElementById("menufLink1").className = estilos.Footer.menuLink;
document.getElementById("menufLink2").className = estilos.Footer.menuLink;

console.log(paginaActual);

// Cargar estilos especificos de la pagina
switch (paginaActual) {
    case "/docs/index.html":
        document.getElementById("contenedor_home").className = estilos.Home.contenedor_home;
        document.getElementById("titulo").className = estilos.Home.titulo;
        document.getElementById("subtitulo").className = estilos.Home.subtitulo;
        document.getElementById("populares").className = estilos.Productos.populares;
        break;
    case "/docs/Productos.html":
        document.getElementById("contenedor_productos").className = estilos.Productos.contenedor_productos;
        document.getElementById("titulo").className = estilos.Productos.titulo;
        document.getElementById("productos").className = estilos.Productos.populares;
        break;
    case "/docs/producto.html":
        document.getElementById("producto_individual").className = estilos.ProductoIndividual.producto_individual;
        document.getElementById("contenedor_producto").className = estilos.ProductoIndividual.contenedor_producto;
        document.getElementById("img_producto").className = estilos.ProductoIndividual.img_producto;
        document.getElementById("informacion").className = estilos.ProductoIndividual.informacion;
        document.getElementById("nombre").className = estilos.ProductoIndividual.nombre;
        document.getElementById("descripcion").className = estilos.ProductoIndividual.descripcion;
        document.getElementById("precio").className = estilos.ProductoIndividual.precio;
        document.getElementById("agregar").className = estilos.ProductoIndividual.agregar;
        break;
    case "/docs/Carrito.html":
        document.getElementById("contenedor_carrito").className = estilos.Carrito.contenedor_carrito;
        document.getElementById("carrito").className = estilos.Carrito.carrito;
        document.getElementById("titulo").className = estilos.Carrito.titulo;
        document.getElementById("productos").className = estilos.Carrito.productos;
        document.getElementById("total").className = estilos.Carrito.total;
        document.getElementById("comprar").className = estilos.Carrito.botonComprar;
        break;
}