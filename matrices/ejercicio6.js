

// Crear una función buscarNumero( matriz, numero)

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function buscarNumero(matriz, numero) {

    for(let f=0; f<matriz.length; f++) {
        for(let c=0; c<matriz[f].length; c++) {
            if(matriz[f][c] === numero) {
                return true;
            }
        }
    }

    return false;

}

console.log(buscarNumero(matriz,4));
console.log(buscarNumero(matriz,54));
console.log(buscarNumero(matriz,6));