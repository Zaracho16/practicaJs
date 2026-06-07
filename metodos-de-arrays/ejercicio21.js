
/*
    Obtener un array que contenga solamente los nombres de los usuarios.

    Resultado esperado:

    [
        "Adri",
        "Juan",
        "Ana",
        "Pedro"
    ]
*/

let usuarios = [
    { nombre: "Adri", edad: 20, activo: true },
    { nombre: "Juan", edad: 17, activo: false },
    { nombre: "Ana", edad: 22, activo: true },
    { nombre: "Pedro", edad: 15, activo: false }
];

let nombreUsuario = usuarios.map(function(usuario) {
    return usuario.nombre;
});

console.log(nombreUsuario);