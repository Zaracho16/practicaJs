

// Calcular el promedio de un array de números.

let numeros = [4,2,44,66,63,12,15];
let suma = 0;
let promedio;

for(let i=0; i<numeros.length; i++) {
    suma += numeros[i];
}

promedio = suma/numeros.length;

console.log(`El promedio del array es ${promedio}`);