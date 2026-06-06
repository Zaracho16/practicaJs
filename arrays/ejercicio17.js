
/*
    Crear una función convertirMayusculas(palabras)

    Ejemplo:
    convertirMayusculas(
        ["hola", "adri", "javascript"]
    );

    Resultado:
    ["HOLA", "ADRI", "JAVASCRIPT"]
*/

function convertirMayusculas(palabras) {

    let palabrasEnMayusculas = [];
    
    for(let i=0; i<palabras.length; i++) {
        palabrasEnMayusculas[i] = palabras[i].toUpperCase();
    }

    return palabrasEnMayusculas;

}

console.log(
    convertirMayusculas (
        ["hola", "adri", "javascript"]
    )
);