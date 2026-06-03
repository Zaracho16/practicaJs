
// Dado un string "Hola", mostrar "Es largo" si tiene más de 5 caracteres o "Es corto" si no 

let texto = "Hola";
let contadorCaracteres = 0;

for(let i = 0; i<texto.length; i++) {
    contadorCaracteres++;
}

if(contadorCaracteres>5) {
    console.log("Es largo");
} else {
    console.log("Es corto");
}