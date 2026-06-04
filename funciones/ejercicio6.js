
// Crear una función generarUsername(nombre, apellido) que devuelva algo como "adri.zaracho"

function generarUsername(nombre, apellido) {

    let nombreModificado = nombre.toLowerCase();
    let apellidoModificado = apellido.toLowerCase();


    return `${nombreModificado}.${apellidoModificado}`

}

console.log(generarUsername("Adri", "Zara"));