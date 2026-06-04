

// crear una función esPalindromo(texto)


function esPalindromo(texto) {

    let textoInvertido = texto.split("").reverse().join("");

    if(texto === textoInvertido) {
        return `El texto es palindromo`;
    } else {
        return `No es palindromo`;
    }

}

console.log(esPalindromo("radar"));