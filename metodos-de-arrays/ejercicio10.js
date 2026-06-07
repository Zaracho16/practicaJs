
/*
    Usar some() para verificar si existe algún alumno con nota 10.

    Resultado esperado:

    false
*/

let alumnos = [
    { nombre: "Adri", nota: 5 },
    { nombre: "Juan", nota: 3 },
    { nombre: "Ana", nota: 4 }
];

let verificacion = alumnos.some(function(alumno) {
    return alumno.nota == 10;
});

console.log(verificacion);