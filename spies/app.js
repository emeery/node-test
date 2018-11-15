var db = require('./db');
module.exports.controlRegistro = (email, pass) => {
        db.guardaUser({email, pass});
}