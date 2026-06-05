
// Crear una función ocultarEmail(email) que convierta "adri@gmail.com" en "****@gmail.com".

function ocultarEmail(email) {

    let ocultarCorreo = email.split("@");
    let dominio = ocultarCorreo[1];

    let longitudUsuario = ocultarCorreo[0].length;

    let correoOculto = "*".repeat(longitudUsuario);

    return `${correoOculto}@${dominio}`;

}

console.log(ocultarEmail("jose@gmail.com"));
console.log(ocultarEmail("marianapereira@outlook.com"));