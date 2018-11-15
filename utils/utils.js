module.exports.suma = (a, b) => a + b;
module.exports.producto = (x) => x * x;
module.exports.setNombre = (usuario, nombreFull ) => {
    var nombres = nombreFull.split(' ');
    usuario.nombre = nombres[0];
    usuario.apellido = nombres[1];
    return usuario;
};
module.exports.sumaAsincrona = (a, b, cb) => {
    setTimeout(() => {
        cb( a + b);
    }, 1000);
};
module.exports.productoAsincrono = (x, cb) => {
    setTimeout(() => {
        cb(x * x);
    }, 1000);
}