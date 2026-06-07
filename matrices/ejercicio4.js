
// Encontrar el número más grande

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


let numeroMasGrande = matriz[0][0];

for(let f=0; f<matriz.length; f++) {
    for(let c=0; c<matriz[f].length; c++) {
        if(matriz[f][c] > numeroMasGrande) {
            numeroMasGrande = matriz[f][c];
        }
    }
}

console.log(`El numero mas grande de la matriz es: ${numeroMasGrande}`);