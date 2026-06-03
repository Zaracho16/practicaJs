

// Dado un texto, reemplazar todas las "a" por "@" solo si el texto tiene más de 10 caracteres 

let saludo = "hola como estas";

if(saludo.length > 10) {
    let reemplazo = saludo.replaceAll("a", "@");
    console.log(reemplazo);
} else {
    console.log("El texto no tiene mas de 10 caracteres");
}