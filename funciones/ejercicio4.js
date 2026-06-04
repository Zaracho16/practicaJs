

// Crear una función obtenerIniciales(nombreCompleto) que devuelva las iniciales de una persona (ej: "Adrian Zaracho" → "A.Z") 

function obtenerIniciales(nombreCompleto) {

    let separador = nombreCompleto.split(" ");
    let inicialNombre = separador[0].slice(0,1);
    let inicialApellido = separador[1].slice(0,1);

    return `${inicialNombre}.${inicialApellido}`;

}

console.log(obtenerIniciales("Jorge Perez"));