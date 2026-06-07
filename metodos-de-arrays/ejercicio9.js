
/*
    Usar some() para verificar si existe algún alumno con nota 5.

    Resultado esperado:

    true
*/

let alumnos = [
    { nombre: "Adri", nota: 5 },
    { nombre: "Juan", nota: 3 },
    { nombre: "Ana", nota: 4 }
];

let verificacion = alumnos.some(function(alumno) {
    return alumno.nota == 5;
});

console.log(verificacion);