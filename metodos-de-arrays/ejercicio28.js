/*
    Mostrar el nombre de cada producto usando forEach().
    Salida esperada:
        Arroz
        Fideo
        Aceite
*/
let productos = [
    { nombre: "Arroz", precio: 5000 },
    { nombre: "Fideo", precio: 3000 },
    { nombre: "Aceite", precio: 12000 }
];

productos.forEach(function(producto) {
    console.log(producto.nombre);
});
console.log("\n");

// Mostrar el precio de cada producto usando forEach().
productos.forEach(function(producto) {
    console.log(producto.precio);
});
console.log("\n");

/* 
    Mostrar una frase por cada producto.
    Salida esperada:
        Arroz cuesta 5000
        Fideo cuesta 3000
        Aceite cuesta 12000 
*/
productos.forEach(function(producto){
    console.log(`${producto.nombre} cuesta ${producto.precio} Gs`);
});
console.log("\n");

/* 
    Mostrar solamente los nombres en mayúsculas usando forEach() y toUpperCase().
    Salida esperada:
        ARROZ
        FIDEO
        ACEITE
*/
productos.forEach(producto => {
    console.log(producto.nombre.toUpperCase());
});
console.log("\n");

/*
    Mostrar:
        Producto: Arroz
        Producto: Fideo
        Producto: Aceite
*/
productos.forEach(producto => {
    console.log(`Producto: ${producto.nombre}`);
});

