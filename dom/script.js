
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

/*
    1) Obtener el botón con getElementById().
    2) Obtener el h1 con getElementById().
    3) Agregar un evento click al botón.
    4) Cuando se haga click, cambiar el texto del h1 a:
    "Botón presionado"
    5) Mostrar en consola:
    "Se hizo click"
    6) Cambiar el color del h1 a verde cuando se haga click.
    7) Cambiar el tamaño del h1 a 50px cuando se haga click.
    8) Cambiar el fondo de la página a lightblue cuando se haga click.
    9) Cambiar nuevamente el texto a:
    "Evento ejecutado correctamente"
    10) Mostrar en consola el elemento botón.
*/

let obtenerElementoh1 = document.getElementById("tituloMiPagina");
let obtenerBoton = document.getElementById("botonCambiarTexto");

obtenerBoton.addEventListener("click", () => {
    obtenerElementoh1.textContent = "Boton presionado";
    obtenerElementoh1.style.color = "green";
    obtenerElementoh1.style.fontSize = "50px";
    console.log("Se hizo click");
    document.body.style.background = "lightblue";
    obtenerElementoh1.textContent = "Evento ejecutado correctamente";
    console.log(obtenerBoton);
});
