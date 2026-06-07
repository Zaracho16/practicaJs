
/*
    Obtener los nombres de los aprobados

    Resultado:

    [
        "Adri",
        "Ana"
    ]
*/

let alumnos = [
    { nombre: "Adri", nota: 5},
    { nombre: "Juan", nota: 3},
    { nombre: "Ana", nota: 4}
]

let aprobados = [];

for(let i=0; i<alumnos.length; i++) {
    if(alumnos[i].nota >= 4) {
        aprobados.push(alumnos[i].nombre);
    }
}

console.log(aprobados);