
/*
Crear una función agregarStock(producto, cantidad)

Debe agregar una propiedad llamada stock.
*/

let producto = {
    nombre: "arroz",
    tipo: "integral"
}

function agregarStock(producto, cantidad) {

    producto.stock = cantidad;
    console.log(`Nueva propiedad agregada`);

}

agregarStock(producto, 5);
console.log(producto);