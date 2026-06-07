
/*
    Obtener el nombre del alumno con la nota más alta.

    Resultado:
    "Adri"
*/

let alumnos = [
    { nombre: "Adri", nota: 5},
    { nombre: "Juan", nota: 3},
    { nombre: "Ana", nota: 4}
]

let notaMasAlta = alumnos[0].nota;
let alumnoNotaMasAlta = alumnos[0].nombre;

for(let i=0; i<alumnos.length; i++) {
    if(alumnos[i].nota > notaMasAlta) {
        notaMasAlta = alumnos[i].nota;
        alumnoNotaMasAlta = alumnos[i].nombre;
    }
}

console.log(`La nota mas alta de los alumnos es: ${alumnoNotaMasAlta}`);

