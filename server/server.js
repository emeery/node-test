const express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Not Found',
        nombre: 'Todo App'
    });
});
app.get('/usuarios', (req, res) => {
    res.send([
        {
            nombre: 'Pablo',
            edad: 24
        },
        {
            nombre: 'Gerardo',
            edad: 28
        },
        {
            nombre: 'Jorge',
            edad: 26
        }
    ]);
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
module.exports.app = app;