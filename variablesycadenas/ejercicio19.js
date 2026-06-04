
// Dado un texto, contar cuántas palabras tienen más de 4 letras 

let texto = "hola esto es un texto de prueba";
let separador = texto.split(" ");
let contadorPalabra = 0;

for(let i=0; i<separador.length; i++) {
    if(separador[i].length > 4) {
        contadorPalabra++;
    }
}

console.log(`El texto tiene ${contadorPalabra} palabras con mas de 4 letras`);
