
/*
    Usar some() para verificar si existe un alumno llamado "Ana".

    Resultado esperado:

    true
*/

let alumnos = [
    { nombre: "Adri", nota: 5 },
    { nombre: "Juan", nota: 3 },
    { nombre: "Ana", nota: 4 }
];

let verificacion = alumnos.some(function(alumno) {
    return alumno.nombre == "Ana";
});

console.log(verificacion);