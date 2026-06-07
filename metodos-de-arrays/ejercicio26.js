
/*
    Obtener un array que contenga solamente las edades.

    Resultado esperado:

    [
        20,
        17,
        22,
        15
    ]
*/

let usuarios = [
    { nombre: "Adri", edad: 20, activo: true },
    { nombre: "Juan", edad: 17, activo: false },
    { nombre: "Ana", edad: 22, activo: true },
    { nombre: "Pedro", edad: 15, activo: false }
];

let buscarUsuario = usuarios.map(function(usuario){
    return usuario.edad;
});

console.log(buscarUsuario);
