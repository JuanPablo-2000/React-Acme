const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/vehicles/publications/:placa', async (req, res) => {
    const { placa } = req.params;        
    try {
        let validate = await db.query('SELECT * FROM vehiculos WHERE placa = ?', [placa]);
        console.log(validate.length);
        if(validate.length > 0) {            
            let row = await db.query('SELECT * FROM '+
                '(SELECT * FROM compras t1 WHERE t1.placa_vh_compra = ?) t2 '+
                'LEFT OUTER JOIN ventas t3 ON t2.placa_vh_compra = t3.placa_vh_venta',
                [placa]);
            console.log(row);
            if(row.length > 0) {
                res.status(200).send({
                    message: "Correcto",
                    vehicles: row[0],
                })
            }else {
                res.status(404).send({
                    message: "404 - Error, No se encontro datos en los registros venta - compras",
                });
            }
        }else { // No existe el carro con dicha placa
            res.status(404).send({ 
                message: "404 - Error, No se encontro datos",
            });
        }
    } catch (error) {
        res.status(500).send({
            message: "500 - Hubo un problema con la conexion, la consulta a la base de datos",
        });
    }
});

module.exports = router;