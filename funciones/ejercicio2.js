

// Crear una función esMayorDeEdad(edad) que devuelva true si edad >= 18 y false en caso contrario

function esMayorDeEdad(edad) {
    if(edad >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(esMayorDeEdad("17"));
console.log(esMayorDeEdad("19"));
console.log(esMayorDeEdad("15"));