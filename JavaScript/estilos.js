export const estilos = {
    NavBar: {
        base: "bg-white shadow-md py-4 px-6 flex items-center justify-between",
        logo: "w-32",
        menu: "flex space-x-6 text-lg",
        menuLink: "font-bold hover:text-red-500"
    },
    Home: {
        contenedor_home: "flex flex-col min-h-[86vh] bg-zinc-300 items-center justify-center",
        titulo: "text-4xl font-bold text-center mt-12 mb-6",
        subtitulo: "text-xl text-center",
    },
    Productos: {
        contenedor_productos: "flex flex-col min-h-[86vh] bg-zinc-300",
        titulo: "text-3xl font-bold mt-10 ml-10 mb-8",
        populares: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-10 place-items-center",
        carta: "flex flex-col justify-end rounded-lg bg-white p-5 h-full w-full hover:shadow-lg hover:scale-105 transition-transform duration-300",
        nombre: "text-2xl font-semibold mb-4",
        productoImg: "w-full rounded-t-lg",
        description: "text-gray-600 mt-2",
        precio: "text-blue-500 font-semibold my-1 text-sm",
        botonVer: "mt-4 w-fit bg-blue-500 text-white py-2 px-2 rounded-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-200",
        botonAgregar: "mt-4 w-fit bg-green-500 text-white py-2 px-2 rounded-lg hover:bg-green-60 hover:scale-105 transition-transform duration-200"
    },
    ProductoIndividual: {
        producto_individual: "min-h-[86vh] w-full mx-auto py-16 px-6 bg-zinc-300",
        contenedor_producto: "flex flex-col gap-20 items-center justify-center md:flex-row",
        img_producto: "w-full md:w-[600px] h-auto rounded-lg mix-blend-multiply",
        informacion: "flex flex-col justify-evenly items-center md:items-start md:ml-8 mt-6 md:mt-0 bg-zinc-100 px-6 py-16 rounded-lg",
        nombre: "text-3xl font-bold",
        descripcion: "text-gray-600 mt-4",
        precio: "text-blue-500 font-bold text-2xl mt-6",
        agregar: "mt-10 w-full md:w-auto bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
    },
    Carrito: {
        contenedor_carrito: "min-h-[86vh] bg-zinc-300",
        titulo: "text-3xl font-bold mt-10 ml-10 mb-8",
        productos: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-10 place-items-center",
        carrito: "",
        carta: "flex flex-col justify-end rounded-lg bg-white p-5 h-full w-full hover:shadow-lg hover:scale-105 transition-transform duration-300",
        nombre: "text-2xl font-semibold mb-4",
        productoImg: "w-full rounded-t-lg",
        parrafo_total: "text-2xl font-semibold mt-4 text-right",
        precio: "text-blue-500 font-semibold my-1 text-sm",
        total: "text-2xl font-semibold mt-4 text-right pr-32",
        botonEliminar: "mt-4 w-fit bg-red-500 text-white py-2 px-2 rounded-lg hover:bg-red-600 hover:scale-105 transition-transform duration-200",
        botonComprar: "mt-4 w-fit bg-blue-500 text-white py-2 px-2 rounded-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-200"
    },
    Footer: {
        base: "bg-gray-800 text-gray-400 py-6 flex justify-center items-center",
        menu: "flex gap-16",
        menuLink: "text-zinc-300 font-bold hover:text-white",
        copyright: "text-sm"
    }
};