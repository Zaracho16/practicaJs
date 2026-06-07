
/*
    Verificar si todos los usuarios están activos.

    Resultado esperado:

    false
*/

let usuarios = [
    { nombre: "Adri", edad: 20, activo: true },
    { nombre: "Juan", edad: 17, activo: false },
    { nombre: "Ana", edad: 22, activo: true },
    { nombre: "Pedro", edad: 15, activo: false }
];

let usuariosActivos = !usuarios.some(function(usuario) {
    return usuario.activo === false;
});

console.log(usuariosActivos);