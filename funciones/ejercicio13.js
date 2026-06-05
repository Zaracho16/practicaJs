
// Crear una función obtenerDominio(email) que devuelva solo el dominio. Ej: "adri@gmail.com" → "gmail.com".

function obtenerDominio(email) {

    let separadorDominio = email.split("@");

    return separadorDominio[1];

}

console.log(obtenerDominio("juangonza@hotmail.com"));