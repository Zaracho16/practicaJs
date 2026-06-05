

// Contar cuántas palabras tienen más de 5 letras.

let palabras = ["buenas", "como", "amanecieron", "bien", "siuuuu"];
let contadorLetras = 0;

for(let i=0; i<palabras.length; i++) {
    if(palabras[i].length > 5) {
        contadorLetras++;
    }
}

console.log(`${contadorLetras} palabras tienen mas de 5 letras en el array`);
