
/*
1) Obtener el h1 usando getElementById() y guardarlo en una variable.
2) Cambiar el texto del h1 a:
"Bienvenido Adri"
3) Obtener el párrafo usando getElementById().
4) Cambiar el texto del párrafo a:
"Estoy aprendiendo DOM"
5) Cambiar el color del h1 a rojo.
6) Cambiar el color del párrafo a azul.
7) Cambiar el tamaño del h1 a 40px.
8) Cambiar el fondo del párrafo a yellow.
9) Mostrar en consola la variable del h1.
10) Mostrar en consola la variable del párrafo.
*/

let tituloh1 = document.getElementById("titulo");
tituloh1.textContent = "Bienvenido Adri";
tituloh1.style.color = "red";
tituloh1.style.fontSize = "40px";

let obtenerParrafo = document.getElementById("parrafo");
obtenerParrafo.textContent = "Estoy aprendiendo DOM";
obtenerParrafo.style.color = "blue";
obtenerParrafo.style.background = "yellow";

console.log(tituloh1);
console.log(obtenerParrafo);