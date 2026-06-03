


// Dado un nombre completo "Adrian Zaracho", mostrar solo las iniciales en mayúscula "A.Z" 

let nombre = "Adrian Zaracho";

let separadorDeCaracter = nombre.split(" ");
let nombreArray = separadorDeCaracter.slice(0,1);
let apellidoArray = separadorDeCaracter.slice(1);

let cadenaNombre = nombreArray[0];
let inicialNombre = cadenaNombre[0];

let cadenaApellido = apellidoArray[0];
let inicialApellido = cadenaApellido[0];

let iniciales = `${inicialNombre}.${inicialApellido}`;
console.log(iniciales);
