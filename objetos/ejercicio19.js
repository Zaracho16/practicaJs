
/*
    Crear una función obtenerAprobados(alumnos)

    Debe devolver:

    [
        { nombre: "Adri", nota: 5 },
        { nombre: "Ana", nota: 4 }
    ]
*/


let alumnos = [
    { nombre: "Adri", nota: 5},
    { nombre: "Juan", nota: 3},
    { nombre: "Ana", nota: 4}
]

let alumnosAprobados = [];

function obtenerAprobados(alumnos) {

    for(let i=0; i<alumnos.length; i++) {
        if(alumnos[i].nota >= 4) {
            alumnosAprobados.push(alumnos[i]);
        }       
    }

    return alumnosAprobados;

}

console.log(obtenerAprobados(alumnos));