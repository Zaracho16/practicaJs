

// Crear una función que elimine las palabras repetidas.

function eliminarDuplicados() {

    let palabras = ["buenas", "como", "amanecieron", "bien", "siuuuu", "buenas"];
    let arraySinDuplicados = [];

    for(let i=0; i<palabras.length; i++) {
        if(!arraySinDuplicados.includes(palabras[i])) {
            arraySinDuplicados.push(palabras[i]);
        }
    }

    return arraySinDuplicados;

}

console.log(eliminarDuplicados());