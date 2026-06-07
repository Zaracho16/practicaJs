
/*
    Crear una función contarMayoresQueDiez(numeros)

    Ejemplo:
    contarMayoresQueDiez([5, 12, 20, 3, 15]);

    Resultado:
    3
*/

function contarMayoresQueDiez(numeros) {

    let contador = 0;

    for(let i=0; i<numeros.length; i++) {
        if(numeros[i] > 10) {
            contador++;
        }
    }

    return contador;

}

console.log(contarMayoresQueDiez([5, 12, 20, 3, 15]));

