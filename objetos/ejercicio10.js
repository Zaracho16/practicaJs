
/*
    Crear una función puedeVotar(persona)

    Si edad >= 18 → true
    Si edad < 18 → false
*/

let persona = {
    nombre: "Jose",
    apellido: "Pereira",
    edad: 15,
    nacionalidad: "Paraguayo"
}

const puedeVotar = (persona) => {
    if(persona.edad >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(puedeVotar(persona));