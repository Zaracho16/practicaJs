
/*
    Usar find() para encontrar al alumno llamado "Adri".

    Resultado esperado:

    {
        nombre: "Adri",
        nota: 5
    }
*/

let alumnos = [
    { nombre: "Adri", nota: 5 },
    { nombre: "Juan", nota: 3 },
    { nombre: "Ana", nota: 4 }
];

let verificacion = alumnos.find(function(alumno) {
    return alumno.nombre == "Adri";
});

console.log(verificacion);