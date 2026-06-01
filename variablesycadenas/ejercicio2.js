
/*
    Manipulación de strings
    
    Dado este texto: 
        let frase = "javascript es genial";

    Hace que imprima:
        JAVASCRIPT ES GENIAL
    
    Y despues:
        JavaScript es genial
*/

let frase = "javascript es genial";
let fraseMay = frase.toUpperCase("");
let remplazoJavascript = frase.replace("javascript", "JavaScript");

console.log(fraseMay);
console.log(remplazoJavascript);