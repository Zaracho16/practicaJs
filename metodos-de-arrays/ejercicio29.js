
/*
    Usar el siguiente array:

    let numeros = [10, 20, 30, 40, 50];
*/

// Mostrar todos los números usando forEach().
let numeros = [10,20,30,40,50];

numeros.forEach(numero => {
    console.log(numero);
});
console.log("\n");

/*
    Mostrar cada número multiplicado por 2.
    Salida esperada:
    20
    40
    60
    80
    100
*/
numeros.forEach(numero => {
    console.log(numero * 2);
});
console.log("\n");

/*
    Mostrar solamente los números mayores a 25.
    Usar forEach() e if.
    No usar filter().
*/
numeros.forEach(numero => {
    if(numero > 25) {
        console.log(numero);
    }
});
console.log("\n");

/*
    Calcular la suma de todos los números usando forEach().
    Resultado esperado:
    150
*/
let suma = 0;

numeros.forEach(numero => {
    suma += numero;
})

console.log(`La suma del array es ${suma}`);