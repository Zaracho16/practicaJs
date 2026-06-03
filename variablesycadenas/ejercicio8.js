

// Dado "javascript", contar cuántas veces aparece la letra "a"

let nombre = "javascript";
let contador = 0;

for(let i = 0; i<nombre.length; i++) {
    if(nombre[i] == "a") {
        contador++;
    }
}

console.log(`La letra "a" aparece ${contador} veces`);