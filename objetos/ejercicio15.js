
/*
    Buscar un alumno por nombre

    Crear una función:

    buscarAlumno(alumnos, nombre)

    Ejemplo:

    buscarAlumno(alumnos, "Juan");

    Resultado:
    true

    Si no existe:
    false
*/

let alumnos = [
    { nombre: "Adri", nota: 5},
    { nombre: "Juan", nota: 3},
    { nombre: "Ana", nota: 4},
]

function buscarAlumno(alumnos, nombre) {

    for(let i=0; i<alumnos.length; i++) {
        if(alumnos[i].nombre === nombre) {
            return true;
        }
    }

    return false;

}

console.log(buscarAlumno(alumnos, "Juan"));
console.log(buscarAlumno(alumnos, "Ana"));
console.log(buscarAlumno(alumnos, "Pepe"));
