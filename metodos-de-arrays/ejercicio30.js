
/*
    Usar el siguiente array para todos los ejercicios:

    let numeros = [10, 20, 30, 40, 50];
*/

let numeros = [10, 20, 30, 40, 50];

/*
Calcular la suma de todos los números usando reduce().
Resultado esperado:
150
*/
let sumaNumeros = numeros.reduce(function(acumulador, numero) {
    return numero + acumulador;
}, 0);
console.log(sumaNumeros + "\n");

/*
    Calcular la multiplicación de todos los números usando reduce().
    Resultado esperado:
    12000000
*/
let multiplicacion = numeros.reduce((iterador, numero) => {
    return numero * iterador;
}, 1);
console.log(multiplicacion + "\n");

/*
    Calcular la suma de los números:
    let numeros = [5, 5, 5, 5];
    Resultado esperado:
    20
*/
let numeros2 = [5, 5, 5, 5];
let sumaArray = numeros2.reduce((acumulador, numero) => {
    return acumulador + numero;
}, 0);
console.log(sumaArray + "\n");

/*
    Calcular la cantidad de elementos del array usando reduce().
    Resultado esperado:
    5
*/
let cantidadElementos = numeros.reduce(function(acumulador, elementoActual) {
    return acumulador + 1; 
}, 0);
console.log(cantidadElementos + "\n");
