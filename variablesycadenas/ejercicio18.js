
/*
    Dado un email y contraseña, mostrar "Login exitoso" si el email incluye "@" y "." y la contraseña cumple: mínimo 8 caracteres, un número y sin espacios, si no mostrar el error específico
*/

let email = "adri.zara@gmail.com";
let clave = "Claaaaaaa8";
let separador = email.split("@");

// verificacion de correo
if(!email.includes("@")) {
    console.log("El email debe incluir un arroba (@)");
} else if (!separador[0].includes(".")) {
    console.log("El email debe tener un punto");
}

// verificacion de contraseña
if(clave.length < 8) {
    console.log("La contraseña debe tener al menos 8 caracteres");
} else if(clave.includes(" ")) {
    console.log("La contraseña no debe contener espacios");
} else if(!contieneNumero(clave)) {
    console.log("La contraseña debe contener al menos un numero")
}

else {
    console.log("Login exitoso");
}


function contieneNumero(clave) {
    for(let i=0; i<clave.length; i++) {
        if(!isNaN(clave[i])) {
            return true;
        }
    }
    return false;
}