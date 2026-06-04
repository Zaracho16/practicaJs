
// crear una función palabraMasLarga(texto)


function palabraMasLarga(texto) {

    let separador = texto.split(" ");
    let palabraLarga = "";

    for(let i=0; i<separador.length; i++) {
        if(separador[i].length > palabraLarga.length) {
            palabraLarga = separador[i];
        }
    }

    return palabraLarga;

}

console.log(`La palabra mas larga del texto es ${palabraMasLarga("hola bienvenido")}`);