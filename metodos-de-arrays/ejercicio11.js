
/*
    Obtener solamente los nombres de los productos.

    Resultado esperado:

    [
        "Arroz",
        "Fideo",
        "Aceite",
        "Azúcar"
    ]
*/

let productos = [
    { nombre: "Arroz", precio: 5000, stock: 10 },
    { nombre: "Fideo", precio: 3000, stock: 0 },
    { nombre: "Aceite", precio: 12000, stock: 5 },
    { nombre: "Azúcar", precio: 4500, stock: 0 }
];

let obtenerProductos = productos.map(function(producto) {
    return producto.nombre;
});

console.log(obtenerProductos);