
/*
    Verificar si existe algún producto sin stock.

    Resultado esperado:

    true
*/

let productos = [
    { nombre: "Arroz", precio: 5000, stock: 10 },
    { nombre: "Fideo", precio: 3000, stock: 0 },
    { nombre: "Aceite", precio: 12000, stock: 5 },
    { nombre: "Azúcar", precio: 4500, stock: 0 }
];


let verificarStock = productos.some(function(producto) {
    return producto.stock == 0;
});

console.log(verificarStock);
