
// Dado un string, mostrar cuántas vocales tiene (a,e,i,o,u) 

let palabras = "terrestre";
let vocales = ["a", "e", "i", "o", "u"];
let contadorVocales = 0;

console.log(vocales)

for(let i=0; i<palabras.length; i++) {
    for(let j=0; j<vocales.length; j++) {
        if(palabras[i] == vocales[j]) {
            contadorVocales++;
        }
    }
}

console.log(`La palabra contiene ${contadorVocales} vocales`);