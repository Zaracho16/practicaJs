

/*
    Crear una función sumarArray(numeros)

    Ejemplo:
    sumarArray([10, 20, 30]);

    Resultado:
    60
*/


function sumarArray(numeros) {

    let acumulador = 0;

    for(let i=0; i<numeros.length; i++) {
        acumulador += numeros[i];
    }

    return acumulador;

}

console.log(sumarArray([1,2,3]));
console.log(sumarArray([10,10,10,10,5]));