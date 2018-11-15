const utils = require('./utils');
const expect = require('expect');
describe('Utils',() => {
    describe('#sumas', () => {
        it('deberia sumar 2 numeros', () => {
            var res = utils.suma(33, 11);
            expect(res).toBe(44).toBeA('number');
        });
        it('deberia sumar de forma asincrona', (done) => {
            utils.sumaAsincrona(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            });
        });
    });
    describe('#productos', () => {
        it('deberia multiplicar un numero al cuadrado', () => {
            var res = utils.producto(4);
            expect(res).toBe(16).toBeA('number');
        });
        
        it('deberia obtener cuadrado asincrono', (done) => {
            utils.productoAsincrono(3, (prod) => {
                expect(prod).toBe(9).toBeA('number');
                done();
            });
        });
    });
});

// it('deberia verificar nombre y apellido', () => {
//     var user = {locacion: 'Cd. de México', edad: 28};
//     var res = utils.setNombre(user, 'Gerardo Bautista');
//     expect(res).toInclude({nombre: 'Gerardo', apellido: 'Bautista'});
// });
