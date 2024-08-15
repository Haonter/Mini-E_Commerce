import {estilos} from "./estilos.js";

// Determinamos la pagina que se esta visitando
let paginaActual = window.location.pathname;


// Cargamos los productos segun la pagina visitada
switch (paginaActual) {
    case "/Views/index.html":
        // Consumir la API para obtener los productos
        // fetch("../productos.json") 
        fetch("https://raw.githubusercontent.com/Haonter/Public_JSONS/main/productos.json") 
        .then(response => response.json())
        .then(data => {
            let productos = data;
            console.log(productos);

            let contenedor = document.getElementById("populares");

            // Cargar 8 productos aleatorios
            for(let i = 0; i < 8; i++) {
                let producto = productos[Math.floor(Math.random() * productos.length)];
                let div = document.createElement("div");
                div.className = estilos.Productos.carta;
                div.innerHTML = `
                    <img src="${producto.imagen}" alt="${producto.nombre}" class="${estilos.Productos.productoImg}">
                    <h3 class="${estilos.Productos.nombre}">${producto.nombre}</h3>
                    <p class="${estilos.Productos.description}">${producto.descripcion}</p>
                    <p class="${estilos.Productos.precio}">$${producto.precio}</p>
                    <a href="./producto.html?id=${producto.id}" class="${estilos.Productos.botonVer}">Ver</a>
                    <a href="./producto.html?id=${producto.id}" class="${estilos.Productos.botonAgregar}">Agregar</a>
                `;
                contenedor.appendChild(div);
            }
        });
    break;
    case "/Views/Productos.html":
        console.log("Estamos en la pagina de productos");
        // Consumir la API para obtener los productos
        // fetch("../productos.json") 
        fetch("https://raw.githubusercontent.com/Haonter/Public_JSONS/main/productos.json") 
        .then(response => response.json())
        // Cargar todos los productos al DOM
        .then(data => {
            let productos = data;
            console.log(productos);
            let contenedor = document.getElementById("productos");
            productos.forEach(producto => {
                let div = document.createElement("div");
                div.className = estilos.Productos.carta;
                div.innerHTML = `
                    <img src="${producto.imagen}" alt="${producto.nombre} class=${estilos.Productos.productoImg}">
                    <h3 class="${estilos.Productos.nombre}">${producto.nombre}</h3>
                    <p class="${estilos.Productos.precio}">$${producto.precio}</p>
                    <a href="./producto.html?id=${producto.id}" class="${estilos.Productos.botonVer}">Ver mas</a>
                    <button id="agregar" class="${estilos.Productos.botonAgregar}">Agregar al carrito</button>
                `;
                contenedor.appendChild(div);
            });
        });
    
    
    break;
    case "/Views/producto.html":
        // Cargar el producto indicado mediante las querys en la URL
        // Extraer los querys del URL /Views/productos.html?id=1
        let urlParams = new URLSearchParams(window.location.search);

        // Separar el id de los querys
        let id = urlParams.get("id");

        fetch("../productos.json") 
        fetch("https://raw.githubusercontent.com/Haonter/Public_JSONS/main/productos.json") 
        .then(response => response.json())
        .then(data => {
            let productos = data;
            let producto = productos.find(producto => producto.id == id);

            console.log(producto);
            document.getElementById("img_producto").src = producto.imagen;
            document.getElementById("nombre").innerText = producto.nombre;
            document.getElementById("descripcion").innerText = producto.descripcion;
            document.getElementById("precio").innerText = `$${producto.precio}`;

            let boton = document.getElementById("agregar");
            boton.addEventListener("click", () => {
                console.log("agregando al carrito");
                if(localStorage.getItem("carrito") == null) {
                    localStorage.setItem("carrito", JSON.stringify([producto]));
                    alert("Producto agregado al carrito");
                }else{
                    let carrito = JSON.parse(localStorage.getItem("carrito"));
                    carrito.push(producto);
                    localStorage.setItem("carrito", JSON.stringify(carrito));
                    alert("Producto agregado al carrito");
                }
            });
        })
    break;
    case "/Views/Carrito.html":
        let carrito = JSON.parse(localStorage.getItem("carrito"));
        let contenedor = document.getElementById("productos");

        carrito.forEach(producto => {
            let div = document.createElement("div");
            div.className = estilos.Productos.carta;
            div.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre} class=${estilos.Productos.productoImg}">
                <h3 class="${estilos.Productos.nombre}">${producto.nombre}</h3>
                <p class="${estilos.Productos.precio}">$${producto.precio}</p>
            `;
            contenedor.appendChild(div);

            let total = document.getElementById("monto")
            total.innerText = `${carrito.reduce((monto, producto) => monto + producto.precio, 0)}`;
        });
};
