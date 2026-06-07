
/*
    Usar find() para encontrar al alumno llamado "Juan".

    Resultado esperado:

    {
        nombre: "Juan",
        nota: 3
    }
*/

let alumnos = [
    { nombre: "Adri", nota: 5 },
    { nombre: "Juan", nota: 3 },
    { nombre: "Ana", nota: 4 }
];

let encontrarAlumno = alumnos.find(function(alumno) {
    return alumno.nombre == "Juan";
});

console.log(encontrarAlumno);