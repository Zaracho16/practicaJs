

// Contar cuántos elementos tiene la matriz.


let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


let contador = 0;

for(let f=0; f<matriz.length; f++) {
    for(let c=0; c<matriz[f].length; c++) {
        contador++;
    }
}

console.log(contador);