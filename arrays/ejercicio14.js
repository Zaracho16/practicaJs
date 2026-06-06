
/*
    Crear una función obtenerMayor(numeros)

    Ejemplo:
    obtenerMayor([4, 2, 44, 66, 12]);

    Resultado:
    66
*/

function obtenerMayor(numeros) {

    let numeroMayor = numeros[0];

    for(let i=0; i<numeros.length; i++) {
        if(numeros[i] > numeroMayor) {
            numeroMayor = numeros[i];
        }
    }

    return numeroMayor;

}

console.log(obtenerMayor([4, 2, 44, 66, 12]));
console.log(obtenerMayor([4, 2, 444, 66, 12]));