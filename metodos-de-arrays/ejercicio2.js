
/*
    Usar map() para obtener solamente los nombres de los alumnos.

    Resultado esperado:

    [
        "Adri",
        "Juan",
        "Ana"
    ]
*/

let alumnos = [
    { nombre: "Adri", nota: 5 },
    { nombre: "Juan", nota: 3 },
    { nombre: "Ana", nota: 4 }
];

let nombresAlumnos = alumnos.map(function(alumno) {
    return alumno.nombre;
});

console.log(nombresAlumnos);