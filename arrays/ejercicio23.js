
/*
    Crear una función filtrarPares(numeros)

    Ejemplo:

    filtrarPares([1,2,3,4,5,6,7,8]);

    Resultado:

    [2,4,6,8]
*/

const filtrarPares = (numeros) => {

    let arrayPares = [];

    for(let i=0; i<numeros.length; i++) {
        if(numeros[i] % 2 == 0) {
            arrayPares.push(numeros[i]);
        }
    }

    return arrayPares;

}

console.log(filtrarPares([1,2,3,4,5,6,7,8]));