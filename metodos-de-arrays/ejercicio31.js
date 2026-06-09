
/*
    Usar:
    let productos = [
        { nombre: "Arroz", precio: 5000 },
        { nombre: "Fideo", precio: 3000 },
        { nombre: "Aceite", precio: 12000 }
    ];
*/

let productos = [
    { nombre: "Arroz", precio: 5000 },
    { nombre: "Fideo", precio: 3000 },
    { nombre: "Aceite", precio: 12000 }
];

/*
    Obtener la suma de todos los precios usando reduce().
    Resultado esperado:
    20000
*/
let sumaElementos = productos.reduce(function(suma, numero) {
    return suma += numero.precio
}, 0);
console.log(sumaElementos + "\n");

/*
    Obtener el precio más alto usando reduce().
    Resultado esperado:
    12000
*/
let precioMasAlto = productos.reduce(function(numeroMasAlto, productoActual) {
    if(productoActual.precio > numeroMasAlto) {
        numeroMasAlto = productoActual.precio;
    }
    return numeroMasAlto;
}, productos[0].precio);
console.log(precioMasAlto + "\n");

/*
    Obtener el precio más bajo usando reduce().
    Resultado esperado:
    3000
*/
let precioMasBajo = productos.reduce(function(numeroMasBajo, precioActual) {
    if(precioActual.precio < numeroMasBajo) {
        numeroMasBajo = precioActual.precio;
    }
    return numeroMasBajo;
}, productos[0].precio);
console.log(precioMasBajo + "\n");