
/*
    Dado un username, generar una versión "segura": eliminar espacios, pasar a minúsculas y limitar a máximo 10 caracteres
*/

let usuario = "PePito20 ";
let vSegura;

if(usuario.length > 10) {
    console.log("Debe contener un maximo de 10 caracteres");
} else {
    vSegura = usuario.trim().toLowerCase();
    console.log(vSegura);
}
