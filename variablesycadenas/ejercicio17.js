
// Validar contraseña: debe tener al menos 8 caracteres y contener al menos un número

let password = "ClaveSecreta4";

let tieneSuficientesCaracteres = password.length >= 8;
let tieneNumero = false;

for (let i = 0; i < password.length; i++) {
    if (password[i] !== " " && !isNaN(password[i])) {
        tieneNumero = true;
        break;
    }
}

if (tieneSuficientesCaracteres && tieneNumero) {
    console.log("Contraseña valida");
} else {
    console.log("Contraseña invalida. Debe tener al menos 8 caracteres y un numero.");
}