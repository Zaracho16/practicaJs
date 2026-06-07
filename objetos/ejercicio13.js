
/*
    Contar alumnos aprobados

    Un alumno está aprobado si su nota es mayor o igual a 4.

    Resultado esperado:
    2
*/

let alumnos = [
    { nombre: "Adri", nota: 5},
    { nombre: "Juan", nota: 3},
    { nombre: "Ana", nota: 4}
]

let cantidadAprobados = 0;

for(let i=0; i<alumnos.length; i++) {

    if(alumnos[i].nota >= 4) {
        cantidadAprobados++;
    }

}

console.log(cantidadAprobados);