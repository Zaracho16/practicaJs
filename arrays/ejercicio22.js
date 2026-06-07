
/*
    Crear una función unirPalabras(palabras)

    Ejemplo:

    unirPalabras(
        ["Hola", "Adri", "como", "estas"]
    );

    Resultado:

    "Hola Adri como estas"

    No usar join().
*/

function unirPalabras(palabras) {

    let union = "";

    for(let i=0; i<palabras.length; i++) {
        if(i===0) {
            union += palabras[i];
        } else {
            union += " " + palabras[i];
        }
        
    }

    return union;
    
}

console.log(
        unirPalabras(
            ["Hola", "Adri", "como", "estas"]
        )
);