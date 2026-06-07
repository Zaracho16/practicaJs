
/*
    Crear una función esMayorDeEdad(persona)

    Ejemplo:

    {
        nombre: "Adrian",
        edad: 20
    }
*/

let persona = {
    nombre: "Adrian",
    edad: 21
}

function esMayorDeEdad(persona) {

    if(persona.edad > 18) {
        return true;
    } else {
        return false;
    }

}

console.log(esMayorDeEdad(persona));