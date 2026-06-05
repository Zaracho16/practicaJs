

// Encontrar la palabra más larga de un array.

let palabras = ["buenas", "como", "amanecieron", "bien", "siuuuu"];
let palabraMasLarga = palabras[0];

for(let i=0; i<palabras.length; i++) {
    if(palabras[i].length > palabraMasLarga.length) {
        palabraMasLarga = palabras[i];
    }
}

console.log("La palabra mas larga del array es "+ palabraMasLarga);