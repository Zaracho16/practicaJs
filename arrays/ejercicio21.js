
/*
    Crear una función invertirArray(array)

    Ejemplo:

    invertirArray([1,2,3,4]);

    Resultado:
    [4,3,2,1]

    No usar reverse().
*/

function invertirArray(array) {

    let arrayInvertido = [];

    for(let i=0; i<array.length; i++) {
        arrayInvertido[i] = array[array.length-1-i];
    }

    return arrayInvertido;

}

console.log(invertirArray([1,2,3,4]));