
// Tema 1

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

// Tema 2

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

// Tema 3

let obtenerIdTituloh1 = document.getElementById("tituloInput");
let obtenerInput = document.getElementById("nombre");
let obtenerBotonBtnSaludar = document.getElementById("btnSaludar");

obtenerBotonBtnSaludar.addEventListener("click", () => {
    console.log(obtenerInput.value);
    obtenerIdTituloh1.textContent = "Hola " + obtenerInput.value;
});

// Tema 4

let obtTitulo = document.getElementById("tituloh1-4");
let obtenerNombreInput2 = document.getElementById("nombre2");
let obtenerBtn2 = document.getElementById("btnSaludar4");

obtenerBtn2.addEventListener("click", () => {
    if(obtenerNombreInput2.value.trim() == "") {
        obtTitulo.textContent = "Debe ingresar un nombre";
        obtTitulo.style.color = "red";
    } else {
        obtTitulo.textContent = "Bienvenido " + obtenerNombreInput2.value;
        obtTitulo.style.color = "green";
        console.log(obtenerNombreInput2.value);
        obtenerNombreInput2.value = "";
    }
});

// Tema 5

let obtInput5 = document.getElementById("tareaInputTema5");
let obtBoton5 = document.getElementById("btnAgregarTema5");
let obtLista5 = document.getElementById("listaUlTema5");

obtBoton5.addEventListener("click", () => {
    if(obtInput5.value.trim() == "") {
        alert("Debe ingresar una tarea");
    } else {
        let nuevoLi = document.createElement("li");
        nuevoLi.textContent = obtInput5.value;
        obtLista5.appendChild(nuevoLi); // agregamos el li dentro del ul
    }
    obtInput5.value = "";
});