
// Calcular la suma de todos los elementos.

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


let sumaElementos = 0;

for(let f=0; f<matriz.length; f++) {
    for(let c=0; c<matriz[f].length; c++) {
        sumaElementos += matriz[f][c];
    }
}

console.log(`La suma de la matriz es: ${sumaElementos}`);