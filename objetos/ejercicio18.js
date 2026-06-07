
/*
    Contar cuántos alumnos desaprobaron.

    (Nota menor a 4)
*/

let alumnos = [
    { nombre: "Adri", nota: 5},
    { nombre: "Juan", nota: 3},
    { nombre: "Ana", nota: 4}
]

let contadorReprobados = 0;


for(let i=0; i<alumnos.length; i++) {
      if(alumnos[i].nota < 4) {
        contadorReprobados++;
      }
}

console.log(contadorReprobados);


