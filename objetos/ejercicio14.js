
/*
    Encontrar la nota más alta

    Dado:

    [
        { nombre: "Adri", nota: 5 },
        { nombre: "Juan", nota: 3 },
        { nombre: "Ana", nota: 4 }
    ]

    Resultado:
    5
*/

let alumnos = [
    { nombre: "Adri", nota: 5},
    { nombre: "Juan", nota: 3},
    { nombre: "Ana", nota: 4}
]

let notaMasAlta = alumnos[0].nota;

for(let i=0; i<alumnos.length; i++) {
    if(alumnos[i].nota > notaMasAlta) {
        notaMasAlta = alumnos[i].nota;
    }
}

console.log(notaMasAlta);

