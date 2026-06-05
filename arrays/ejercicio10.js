

// Contar cuántas veces aparece una palabra.

let palabras = ["buenas", "como", "amanecieron", "bien", "siuuuu", "buenas"];
let contadorPalabra = 0;

for(let i=0; i<palabras.length; i++) {
    if(palabras[i] === "buenas") {
        contadorPalabra++;
    }

}

console.log(`La palabra se repite ${contadorPalabra} veces`);