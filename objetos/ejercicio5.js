
/*
    Crear una función mostrarPersona(persona)

    Ejemplo:

    let persona = {
        nombre: "Adrian",
        edad: 20
    };

    mostrarPersona(persona);

    Resultado:

    Nombre: Adrian
    Edad: 20
*/

let persona = {
    nombre: "Adri",
    edad: 21
};

function mostrarPersona(persona) {
    console.log("Nombre:",  persona.nombre);
    console.log("Edad: ", persona.edad);
}

mostrarPersona(persona);