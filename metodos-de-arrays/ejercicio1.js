
/*
    Usar filter() para obtener solamente los alumnos aprobados.

    Resultado esperado:

    [
        { nombre: "Adri", nota: 5 },
        { nombre: "Ana", nota: 4 }
    ]
*/

let alumnos = [
    { nombre: "Adri", nota: 5 },
    { nombre: "Juan", nota: 3 },
    { nombre: "Ana", nota: 4 }
];

let aprobados = alumnos.filter(function(alumno) {
    return alumno.nota >= 4;
});

console.log(aprobados);

