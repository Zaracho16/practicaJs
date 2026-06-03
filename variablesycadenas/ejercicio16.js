
// Dado un string, verificar si empieza con "Hola" y termina con "mundo" (true/false)

let oracion = "Hola y bienvenido a este mundo";
let separador = oracion.split(" ");
let ultimaPalabra = separador.at(-1);

if(separador[0] == "Hola" && ultimaPalabra == "mundo") {
    console.log("true")
} else {
    console.log("false");
}


// otra forma de hacerlo

let oracion2 = "Hola y bienvenido a este mundo";
let verificacionInicio = oracion.startsWith("Hola") && oracion.endsWith("mundo");
console.log(verificacionInicio);
