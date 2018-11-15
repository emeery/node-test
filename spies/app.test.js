const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = { guardaUser: expect.createSpy() };
    app.__set__('db', db);
    it('deberia llmar spy', () => {
        var spy = expect.createSpy();
        spy('Jerry', 28);
        expect(spy).toHaveBeenCalledWith('Jerry', 28);
    });
    it('deberia llmar guardaUser', () => {
        var email = 'peterparker@ejemplo.com';
        var pass = '123abc';
        app.controlRegistro(email, pass);
        expect(db.guardaUser).toHaveBeenCalledWith({
            email, pass
        });
    });
});