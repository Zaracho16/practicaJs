

// crear una función contarVocales(texto)

function contarVocales(texto) {

    let vocales = ["a", "e", "i", "o", "u"];
    let contadorVocales = 0;

    for(let i=0; i<texto.length; i++) {
        for(let j=0; j<vocales.length; j++) {
            if(texto[i].toLowerCase() == vocales[j]) {
                contadorVocales++;
            }
        }
    }

    return contadorVocales;

}

console.log(`El texto tiene ${contarVocales("HOlA como estas")} vocales`);