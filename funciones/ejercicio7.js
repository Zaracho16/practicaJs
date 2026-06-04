

// crear una función invertirTexto(texto)

function invertirTexto(texto) {

    let textoInvertido = texto.split("").reverse().join("");

    return textoInvertido;

}

console.log(invertirTexto("hola"));