
/*
Crear una función obtenerNombre(persona)

Debe devolver solamente el nombre.

*/

let persona = {
    nombre: "Javier",
    apellido: "Ronaldo",
    edad: 45,
    nacionalidad: "Paraguayo"
}

function obtenerNombre(persona) {
    return persona.nombre
}

console.log(obtenerNombre(persona));