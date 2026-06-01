
/*
    Contar cosas

    Dado:
        let texto = "Hola mundo desde JavaScript";
    
    Mostra:
        - Cantidad de caracteres (sin contar espacios)
        - Cantidad de palabras
*/

let texto = "Hola mundo desde JavaScript";

let a = texto.split(" ").join("").length;
let cantidadDePalabras = texto.split(" ").length;

console.log(a);
console.log(cantidadDePalabras);