
/*
    Usar filter() para obtener solamente los alumnos reprobados.

    Resultado esperado:

    [
        { nombre: "Juan", nota: 3 }
    ]
*/

let alumnos = [
    { nombre: "Adri", nota: 5 },
    { nombre: "Juan", nota: 3 },
    { nombre: "Ana", nota: 4 }
];

let alumnosReprobados = alumnos.filter(function(alumno) {
    return alumno.nota < 4;
});

console.log(alumnosReprobados);