

// Obtener los productos cuyo precio sea mayor a 4000.

let productos = [
    { nombre: "Arroz", precio: 5000, stock: 10 },
    { nombre: "Fideo", precio: 3000, stock: 0 },
    { nombre: "Aceite", precio: 12000, stock: 5 },
    { nombre: "Azúcar", precio: 4500, stock: 0 }
];

let verificarProducto = productos.filter(function(producto) {
    return producto.precio > 4000;
});

console.log(verificarProducto);