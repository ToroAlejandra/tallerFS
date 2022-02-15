const { Router } = require('express');
const router = Router();

const con = require('./conexionDB');

router.get('/', (req, res) => {
    con.query('SELECT * FROM usuario', (error, results, fields) => {
        if(error) throw error;

        results.forEach((element) => {
            console.log(element);
        });
        res.json(results);
    });
});

module.exports = router;