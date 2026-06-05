
/*
    Crear una función esNombreValido(nombre) que devuelva true si:
        - tiene al menos 3 caracteres
        - no contiene números
*/

function esNombreValido(nombre) {

    let numeros = [0,1,2,3,4,5,6,7,8,9];
    let numeroEncontrado = false;

    for(let i=0; i<nombre.length; i++) {
        for(let j=0; j<numeros.length; j++) {
            if(nombre[i] == numeros[j]){
                numeroEncontrado = true;
                break;
            }
        }
    }

    if(numeroEncontrado == false && nombre.length >=3) {
        return true;
    } else {
        return false;
    }

}

console.log(esNombreValido("paredes1"));
console.log(esNombreValido("taglia"));