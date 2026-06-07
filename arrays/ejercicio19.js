
/*
    Crear una función obtenerPalabrasLargas(palabras)

    Debe devolver un nuevo array con las palabras que tengan más de 5 letras.

    Ejemplo:
    ["hola", "javascript", "sol", "programacion"]

    Resultado:
    ["javascript", "programacion"]
*/

function obtenerPalabrasLargas(palabras) {

    let palabrasMasLargas = [];

    for(let i=0; i<palabras.length; i++) {
        if(palabras[i].length > 5) {
            palabrasMasLargas.push(palabras[i]);
        }
    }

    return palabrasMasLargas;

}

console.log(obtenerPalabrasLargas(["hola", "javascript", "sol", "programacion"]));