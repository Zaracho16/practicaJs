
// Dado un string, verificar si es un palíndromo (ej: "radar") 

let texto = "radar";
let textoInvertido = texto.split("").reverse().join("");

let verificarPalindromo = true;

for(let i=0; i<texto.length; i++) {
    if(texto[i] !== textoInvertido[i]) {
        verificarPalindromo = false;
        break;
    }
} 

if(verificarPalindromo) {
    console.log(`${texto} es palindromo`);
} else {
    console.log(`${texto} no es palindromo`);
}