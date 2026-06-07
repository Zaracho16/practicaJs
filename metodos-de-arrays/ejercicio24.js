
/*
    Verificar si existe algún usuario llamado "Carlos".

    Resultado esperado:

    false
*/

let usuarios = [
    { nombre: "Adri", edad: 20, activo: true },
    { nombre: "Juan", edad: 17, activo: false },
    { nombre: "Ana", edad: 22, activo: true },
    { nombre: "Pedro", edad: 15, activo: false }
];

let buscarUsuario = usuarios.some(function(usuario){
    return usuario.nombre == "Carlos";
});

console.log(buscarUsuario);