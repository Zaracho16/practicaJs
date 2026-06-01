
/*
    Username automático
    Pedile al usuario (simulado con variables por ahora):
        let nombre = "Adrian";
        let apellido = "Zaracho";

    Generá un username así:
        adrian.zaracho

    Condiciones:
       - Todo en minúscula
       - Sin espacios
       - Formato: nombre.apellido
*/

let nombre = "Adrian";
let apellido = "Zaracho";

let a = nombre.toLowerCase();
let b = apellido.toLowerCase();

let username = `${a}.${b}`;
console.log(username);