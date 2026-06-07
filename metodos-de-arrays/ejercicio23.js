
/*
    Buscar al usuario llamado "Ana".

    Resultado esperado:

    {
        nombre: "Ana",
        edad: 22,
        activo: true
    }
*/

let usuarios = [
    { nombre: "Adri", edad: 20, activo: true },
    { nombre: "Juan", edad: 17, activo: false },
    { nombre: "Ana", edad: 22, activo: true },
    { nombre: "Pedro", edad: 15, activo: false }
];

let buscarUsuario = usuarios.find(function(usuario){
    return usuario.nombre == "Ana";
});

console.log(buscarUsuario);