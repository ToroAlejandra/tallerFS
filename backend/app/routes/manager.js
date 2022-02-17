const { Router } = require('express');
const router = Router();

const con = require('./conexionDB.js');

router.get('/:id', (req, res) => {
    const queryManager = `select moneda.idmoneda, moneda.nombre as nmoneda, 
    moneda.taza_de_cambio as cambio, moneda.simbolo, 
    gestora.nombre as ngestora, gestora.idgestora
     from gestora_X_moneda as gm
    inner join moneda ON moneda.idmoneda = gm.idmoneda
    inner join gestora ON gestora.idgestora = gm.idgestora
    where gestora.idgestora = ${req.params.id};`;
    con.query(queryManager, (error, results, fields) => {
        if(error) throw error;
        
        results.forEach((element) => {
            console.log(element);
        });
        res.json(results);
    });
})

module.exports = router;