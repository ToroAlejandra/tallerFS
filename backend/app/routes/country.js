const { Router } = require('express');
const router = Router();

const con = require('./conexionDB.js');

router.get('/:id', (req, res) => {
    const queryCoins = 
    `select moneda.nombre as mn, moneda.simbolo, moneda.taza_de_cambio, pais.nombre as paisname, 
    usuario.nombre as username 
    from moneda_X_pais as mp
    inner join moneda ON moneda.idmoneda = mp.idmoneda
    inner join pais ON pais.idpais = mp.idpais
    inner join usuario ON usuario.idpais = mp.idpais
    where usuario.idusuario =${req.params.id};`;
    con.query(queryCoins, (error, results, fields) => {
        if(error) throw error;
        
        results.forEach((element) => {
            console.log('Holi',element);
        });
        res.json(results);
    });
    //con.end();
})

module.exports = router;
