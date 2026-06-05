

/*
    Crear una función generarCodigo(nombre, apellido) que genere algo como:
    Adrian + Zaracho → ADR-ZAR-7
*/

function generarCodigo(nombre, apellido) {

    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    let nombreCortado = nombre.slice(0,3).toUpperCase();
    let apellidoCortado = apellido.slice(0,3).toUpperCase();

    return `${nombreCortado}-${apellidoCortado}-${numeroAleatorio}`;

}

console.log(generarCodigo("Lionel", "Messi"));
console.log(generarCodigo("Adrian", "Zaracho"));
console.log(generarCodigo("Cristiano", "Ronaldo"));