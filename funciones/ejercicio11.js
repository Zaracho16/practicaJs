

/* 
    crear una función validarPassword(password)
    Validaciones:
        - mínimo 8 caracteres
        - al menos un número
        - sin espacios
*/

function validarPassword(password) {

    let numeros = [0,1,2,3,4,5,6,7,8,9];
    let encontrado = false;

    // validar longitud de caracteres
    if(password.length < 8) {
        return `La clave debe tener un minimo de 8 caracteres`;
    } 

    // validar que no tenga espacios
    if(password.includes(" ")) {
        return `La clave no debe contener espacios`;
    }

    // validar que tenga al menos un numero
    for(let i=0; i<password.length; i++) {
        for(let j=0; j<numeros.length; j++) {
            if(password[i] == numeros[j]) {
                encontrado = true;
                break;
            }
        }
    }

    if(encontrado == false) {
        return `La clave debe tener al menos un numero`;
    } else {
        return `La clave cumple con las condiciones`;
    }

}

console.log(validarPassword("pepitoelpro54"));
console.log(validarPassword("juancito"));
console.log(validarPassword(" analopez1234"));