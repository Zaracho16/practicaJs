
/*
    1) Crear una función mostrarLibro(libro)

    Debe mostrar:
    Título: ...
    Autor: ...
    Páginas: ...
*/


let libro = {
    titulo: "la venganza de tu papa",
    autor: "messi",
    paginas: 1
}

function mostrarLibro(libro) {
    
    console.log(`Titulo: ${libro.titulo}\nAutor: ${libro.autor}\nPaginas: ${libro.paginas}`);

}

mostrarLibro(libro);
