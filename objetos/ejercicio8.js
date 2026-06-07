
/*
Crear una función cambiarPrecio(producto, nuevoPrecio)

Debe modificar el precio del producto.
*/

let producto = {
    nombre: "arroz",
    precio: 210
}

function cambiarPrecio(producto, nuevoPrecio) {

    producto.precio = nuevoPrecio;
    console.log(`Nombre: ${producto.nombre}\nPrecio: ${nuevoPrecio}`);

}

cambiarPrecio(producto, 10);