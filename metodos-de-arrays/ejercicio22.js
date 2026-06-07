

/*
    Obtener solamente los usuarios activos.

    Resultado esperado:

    [
        { nombre: "Adri", edad: 20, activo: true },
        { nombre: "Ana", edad: 22, activo: true }
    ]
*/

let usuarios = [
    { nombre: "Adri", edad: 20, activo: true },
    { nombre: "Juan", edad: 17, activo: false },
    { nombre: "Ana", edad: 22, activo: true },
    { nombre: "Pedro", edad: 15, activo: false }
];

let usuariosActivos = usuarios.filter(function(usuario){
    return usuario.activo == true;
});

console.log(usuariosActivos);