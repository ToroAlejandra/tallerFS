const { Router } = require('express');
const router = Router();

const con = require('./conexionDB.js');

router.get('/:id', (req, res) => {
    let queryCoins = `select usuario.*, group_concat(gestora.nombre), 
    moneda.simbolo, moneda.taza_de_cambio, moneda.nombre, sum(gum.cantidad_monedas) 
    from gestora_X_usuario_X_moneda as gum inner join gestora 
    ON gum.idgestora = gestora.idgestora 
    inner join usuario ON usuario.idusuario = gum.idusuario
    inner join moneda ON moneda.idmoneda = gum.idmoneda 
    where usuario.idusuario = ${req.params.id} 
    group by gum.idusuario, gum.idmoneda ;`;
    con.query(queryCoins, (error, results, fields) => {
        if(error) throw error;
        
        results.forEach((element) => {
            console.log(element);
        });
        res.json(results);
    });
    //con.end();
})

module.exports = router;
