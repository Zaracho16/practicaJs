
/*
    3) Crear una función contarPares(numeros)

    Ejemplo:
    contarPares([1, 2, 3, 4, 5, 6]);

    Resultado:
    3
*/

function contarPares(numeros) {

    let contadorPar = 0;

    for(let i=0; i<numeros.length; i++) {
        if(numeros[i] % 2 == 0) {
            contadorPar++;
        }
    }

    return contadorPar;

}

console.log(contarPares([1, 2, 3, 4, 5, 6]));
console.log(contarPares([4, 2, 6, 4, 8, 6]));