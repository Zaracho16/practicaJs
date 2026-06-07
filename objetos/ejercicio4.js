

/*
    Crear un objeto llamado mascota

    Debe tener:

    nombre
    edad
    tipo

    Eliminar la propiedad edad.

    Mostrar el objeto final.
*/

let mascota = {
    nombre: "princesa",
    edad: 2,
    tipo: "mestizo"
}

delete mascota.edad;

console.log(mascota);