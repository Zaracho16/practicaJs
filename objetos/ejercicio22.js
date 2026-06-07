
/*
    Crear una función buscarAlumno(alumnos, nombre)

    Pero esta vez debe devolver el objeto completo.

    Ejemplo:

    buscarAlumno(alumnos, "Juan");
*/

let alumnos = [
    { nombre: "Adri", nota: 5},
    { nombre: "Juan", nota: 3},
    { nombre: "Ana", nota: 4}
]

function buscarAlumno(alumnos, nombre) {

    for(let k=0; k<alumnos.length; k++) {
        if(alumnos[k].nombre === nombre) {
            return alumnos[k];
        }
    }

    return "No existe dicho alumno";

}

console.log(buscarAlumno(alumnos, "Ana"));
console.log(buscarAlumno(alumnos, "Juan"));