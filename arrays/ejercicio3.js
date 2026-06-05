

// Sumar todos los números de un array

let array = [2,5,5,6,7,8];
let acumulador = 0;

for(let i=0; i<array.length; i++) {
    acumulador+=array[i];
}

console.log(`La suma de los elementos del array da ${acumulador}`);