const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const config = require('./configs/config.js');


const port = process.env.PORT || 3003;

//JWT
app.set('llave', config.llave);
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Inicio');
});

app.post('/auth', (req, res) => {
    if (req.body.user === "asfo" && req.body.pass === "helloworld") {
        const payload = {
            check: true
        };
        const token = jwt.sign(payload, app.get('llave'), {
            expiresIn: 1440
        });
        res.json({
            mensaje: 'Autenticación correcta',
            token: token
        });
    } else {
        res.json({ mensaje: "Usuario o contraseña incorrectos" });
    }
});

  //middleware
const protectedRoutes = express.Router();
protectedRoutes.use((req, res, next) => {
    const token = req.headers['access-token'];
    if (token) {
        jwt.verify(token, app.get('llave'), (err, decoded) => {
            if (err) {
                return res.json({ mensaje: 'Token inválida'});
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.send({ mensaje: 'Token no proveída. '});
    }
});

app.get('/datos', protectedRoutes, (req, res) => {
    const datos = [
        { id: 1, nombre: "Asfo"},
        { id: 2, nombre: "Denisse"},
        { id: 3, nombre: "Carlos"}
    ];

    //res.json(res.redirect('/api/manager'));
    res.redirect('/api/manager')
    //next('/api/manager')
});

// fin JWT

app.set('port', port);

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/coins', require('./routes/coins.js'));
app.use('/api/users', require('./routes/users.js'));
app.use('/api/country', require('./routes/country.js'));
app.use('/api/manager', require('./routes/manager.js'));

app.listen(app.get('port'), () => {
    console.log('Api escuchando en el puerto ', app.get('port'));
})