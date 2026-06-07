
/*
    Obtener solamente los precios.

    Resultado esperado:

    [
        5000,
        3000,
        12000,
        4500
    ]
*/

let productos = [
    { nombre: "Arroz", precio: 5000, stock: 10 },
    { nombre: "Fideo", precio: 3000, stock: 0 },
    { nombre: "Aceite", precio: 12000, stock: 5 },
    { nombre: "Azúcar", precio: 4500, stock: 0 }
];

let obtenerPrecio = productos.map(function(producto) {
    return producto.precio;
});

console.log(obtenerPrecio);

