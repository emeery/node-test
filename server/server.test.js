const request = require('supertest');
const expect = require('expect');
var app = require('./server').app;

describe('Servidor', () => {
    describe('GET /', () => {
        it('deberia devolver hola mundo response', (done) => {
            request(app)
            .get('/')
            .expect((res) => {
                expect(404)
                expect(res.body).toInclude({
                    error: 'Not Found'
                });
            })
            .end(done);
        });
    });
    describe('GET /usuarios', () => {
        it('deberia devolver arreglo', (done) => {
            request(app)
            .get('/usuarios')
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({
                    nombre: 'Gerardo',
                    edad: 28
                });
            })
            .end(done);
        });
    });
});

