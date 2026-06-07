
/*
    Usar map() para obtener solamente las notas.

    Resultado esperado:

    [
        5,
        3,
        4
    ]
*/

let alumnos = [
    { nombre: "Adri", nota: 5 },
    { nombre: "Juan", nota: 3 },
    { nombre: "Ana", nota: 4 }
];

let notasAlumnos = alumnos.map(function(alumno) {
    return alumno.nota;
});

console.log(notasAlumnos);

