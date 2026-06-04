

// Crear una función contieneNumero(texto) que devuelva true si el texto contiene al menos un número 

function contieneNumero(texto) {

    let numeros = [0,1,2,3,4,5,6,7,8,9];

    for(let i=0; i<texto.length; i++) {
      if(numeros.includes(Number(texto[i]))) {
        return true;
      }
    }

    return false;

}

console.log(contieneNumero("hola"));
console.log(contieneNumero("hola55"));