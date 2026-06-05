

// Encontrar el número más grande y el mas chico.

let numeros = [4,2,44,66,63,12,15];

let numeroMasGrande = numeros[0];
let numeroMasChico = numeros[0];

for(let i=0; i<numeros.length; i++) {
    if(numeros[i] > numeroMasGrande) {
        numeroMasGrande = numeros[i];
    }

    if(numeros[i] < numeroMasChico) {
        numeroMasChico = numeros[i];
    }
}

console.log(`El numero mas grande del array es ${numeroMasGrande}`);
console.log(`El numero mas chico del array es ${numeroMasChico}`);


