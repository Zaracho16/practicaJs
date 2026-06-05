
// Crear una función contarPalabras(texto) que devuelva cuántas palabras tiene un texto.

function contarPalabras(texto) {

    let contadorParalabras = texto.split(" ");

    return contadorParalabras.length;

}

console.log(`La oracion tiene ${contarPalabras("hoy hace mucho frio")} palabras`);