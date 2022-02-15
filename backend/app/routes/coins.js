const { Router } = require('express');
const router = Router();

const con = require('./conexionDB.js');

router.get('/', (req, res) => {
    con.query('SELECT * FROM moneda', (error, results, fields) => {
        if(error) throw error;
        
        results.forEach((element) => {
            console.log(element);
        });
        res.json(results);
    });
    //con.end();
})

module.exports = router;
