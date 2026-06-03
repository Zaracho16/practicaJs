
// Dado un email, verificar si incluye "@" y ".", si no cumple mostrar "Email inválido"

const email = "adrian.zaracho2029@gmail.com";
let emailSeparado = email.split("@");

const verificacion = email.includes("@") && emailSeparado[0].includes(".");

if(verificacion == true) {
    console.log("Email correcto");
} else {
    console.log("Email invalido");
}