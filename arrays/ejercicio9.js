

// Buscar si una palabra existe dentro de un array.

let palabras = ["buenas", "como", "amanecieron", "bien", "siuuuu"];
let buscador = false;

for(let i=0; i<palabras.length; i++) {
    if(palabras[i] === "como") {
        buscador = true;
        break;
    }
}

if(buscador) {
    console.log("La palabra buscada se encuentra en el array");    
} else {
    console.log("La palabra buscada NO se encuentra en el array");
}

