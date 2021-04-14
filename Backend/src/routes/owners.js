const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/owners/:placa', async (req, res) => {
    const { placa } = req.params;
    try {
        let dataFull = [];        
        let message = "Correcto";
        let row_1 = await db.query('SELECT cedula_cliente FROM compras WHERE placa_vh_compra = ?', [placa]);
        //console.log(row_1[0].cedula_cliente);
        let owner_1 = row_1[0].cedula_cliente;
        let infoOwnwer_1 = await db.query('SELECT * FROM clientes WHERE cedula = ? ', [owner_1]);
        if(infoOwnwer_1.length > 0) {
            console.log("Antiguo", infoOwnwer_1[0]);
            dataFull.push(infoOwnwer_1[0]);
        }else {
            res.status(404).send({
                message: "404 - Error, No se encontro datos",
            });
        }
        let row_2 = await db.query('SELECT propietario_nuevo FROM ventas WHERE placa_vh_venta = ?', [placa]);        
        if(row_2.length > 0) {
            let owner_2 = row_2[0].propietario_nuevo;
            let infoOwnwer_2 = await db.query('SELECT * FROM clientes WHERE cedula = ? ', [owner_2]);
            if(infoOwnwer_2.length > 0) {
                console.log("Nuevo",infoOwnwer_2[0]);
                dataFull.push(infoOwnwer_2[0]);
            }            
        }else {
            message += " Sin nuevo propietario";            
        }  

        res.status(200).send({
            message: message,
            vehicles: dataFull,
        });    
    } catch (error) {
        res.status(500).send({
            message: "500 - Hubo un problema con la conexion, la consulta a la base de datos",
        });
    }
})

module.exports = router;