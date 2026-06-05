

// Contar cuántos números son pares

let numeros = [4,2,44,66,63,12,15];
let contadorPares = 0;

for(let i=0; i<numeros.length; i++) {
    if(numeros[i]%2 == 0) {
        contadorPares++;
    }

}

console.log(`Hay en el array ${contadorPares} numeros pares`);