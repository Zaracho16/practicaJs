
// Dado un texto, encontrar la palabra más larga

let oracion = "esto es una oracion y debo encontrar la palabra mas larga jaja";
let separador = oracion.split(" ");
let palabraMasLarga = "";

for(let i=0; i<separador.length; i++) {
    if(separador[i].length > palabraMasLarga.length) {
        palabraMasLarga = separador[i];
    }
}

console.log(`La palabra mas larga es: ${palabraMasLarga}`);
