
/*
    Usar some() para verificar si existe un alumno llamado "Pedro".

    Resultado esperado:

    false
*/

let alumnos = [
    { nombre: "Adri", nota: 5 },
    { nombre: "Juan", nota: 3 },
    { nombre: "Ana", nota: 4 }
];

let verificacion = alumnos.some(function(alumno) {
    return alumno.nombre == "Pedro";
});

console.log(verificacion);
