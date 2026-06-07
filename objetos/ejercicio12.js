
/*
    Mostrar todos los nombres

    Dado:

    let alumnos = [
        { nombre: "Adri", nota: 5 },
        { nombre: "Juan", nota: 3 },
        { nombre: "Ana", nota: 4 }
    ];

    Mostrar:

    Adri
    Juan
    Ana
*/

let alumnos = [
    { nombre: "Adri", nota: 5},
    { nombre: "Juan", nota: 3},
    { nombre: "Ana", nota: 4}
]

for(let i=0; i<alumnos.length; i++) {
    console.log(alumnos[i].nombre);
}


