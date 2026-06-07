

// Contar cuántos números son pares

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let contadorPar = 0;

for(let f=0; f<matriz.length; f++) {
    for(let c=0; c<matriz[f].length; c++) {
        if(matriz[f][c] % 2 == 0) {
            contadorPar++;
        }
    }
}

console.log(`Hay en la matriz ${contadorPar} numeros pares`);