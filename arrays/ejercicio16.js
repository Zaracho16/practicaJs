
/*
    Crear una función buscarPalabra(palabras, objetivo)

    Ejemplo:
    buscarPalabra(
        ["hola", "javascript", "node"],
        "javascript"
    );

    Resultado:
    true

    Si no existe:

    Resultado:
    false
*/

function buscarPalabra(palabras, objetivo) {

    let controlador = false;


    for(let k=0; k<palabras.length; k++) {
        if(palabras[k] === objetivo) {
            controlador = true;
            break;
        }
    }

    return controlador;

}

console.log(buscarPalabra(["hola", "javascript", "node"],"javascript"));
console.log(buscarPalabra(["messi", "ronaldo", "enciso"],"en"));