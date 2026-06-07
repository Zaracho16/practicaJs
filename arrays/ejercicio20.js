

/*
    Crear una función contarCoincidencias(palabras, objetivo)

    Ejemplo:

    contarCoincidencias(
        ["hola", "adri", "hola", "javascript"],
        "hola"
    );

    Resultado:
    2
*/

function contarCoincidencias(palabras, objetivo) {

    let contador = 0;

    for(let i=0; i<palabras.length; i++) {
        if(palabras[i] === objetivo) {
            contador++;
        }
    }

    return contador;

}

console.log(
    contarCoincidencias(
        ["hola", "adri", "hola", "javascript"],
        "hola"
    )
);