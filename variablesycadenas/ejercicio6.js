

// Dado un email "adrian@gmail.com", extraer y mostrar solo el nombre de usuario "adrian"

let nombre = "adrian@gmail.com";
let username = nombre.split("@")[0];
console.log(username);