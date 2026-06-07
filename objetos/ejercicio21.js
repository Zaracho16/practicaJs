
/*
    Crear una función obtenerPromedio(alumnos)

    Resultado:
    4
*/

let alumnos = [
    { nombre: "Adri", nota: 5},
    { nombre: "Juan", nota: 3},
    { nombre: "Ana", nota: 4}
]

function obtenerPromedio(alumnos) {

    let sumaNotas = 0;

    for(let i=0; i<alumnos.length; i++) {
        sumaNotas += alumnos[i].nota;
    }

    return sumaNotas/alumnos.length;

}

console.log(obtenerPromedio(alumnos));