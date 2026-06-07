
/*
    Verificar si existe algún usuario menor de edad.

    Resultado esperado:

    true
*/

let usuarios = [
    { nombre: "Adri", edad: 20, activo: true },
    { nombre: "Juan", edad: 17, activo: false },
    { nombre: "Ana", edad: 22, activo: true },
    { nombre: "Pedro", edad: 15, activo: false }
];

let buscarUsuario = usuarios.some(function(usuario){
    return usuario.edad < 18;
});

console.log(buscarUsuario);