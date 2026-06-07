
/*
    Crear una función existeAlumno(alumnos, nombre)

    Debe devolver true o false.
*/

let alumnos = [
    { nombre: "Adri", nota: 5},
    { nombre: "Juan", nota: 3},
    { nombre: "Ana", nota: 4}
]

function existeAlumno(alumnos, nombre) {

    for(let i=0; i<alumnos.length; i++) {
        if(alumnos[i].nombre === nombre) {
            return true;
        }
    }

    return false;

}

console.log(existeAlumno(alumnos, "Juana"));
console.log(existeAlumno(alumnos, "Ana"));