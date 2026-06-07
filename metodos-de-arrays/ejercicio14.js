
/*
    Verificar si existe algún producto llamado "Leche".

    Resultado esperado:

    false
*/

let productos = [
    { nombre: "Arroz", precio: 5000, stock: 10 },
    { nombre: "Fideo", precio: 3000, stock: 0 },
    { nombre: "Aceite", precio: 12000, stock: 5 },
    { nombre: "Azúcar", precio: 4500, stock: 0 }
];

let verificarProducto = productos.some(function(producto){
    return producto.nombre == "Leche";
});

console.log(verificarProducto);