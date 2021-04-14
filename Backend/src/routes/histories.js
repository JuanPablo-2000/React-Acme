const e = require('express');
const express = require('express');
const router = express.Router();
const db = require('../database');

router.post('/histories/:type', async (req, res) => {
    const { type } = req.params;    
    let info = req.body;
    //console.log(info.fecha_fin, info.fecha_inicio, type);
    try {
        if(type === 'venta') { // Ventas                                           
            let table = await db.query('SELECT DATE(fecha_venta_efectiva) fecha, COUNT(*) cont ' + 
                'FROM ventas WHERE fecha_venta_efectiva BETWEEN ?' + 
                ' AND ? GROUP BY DATE(fecha_venta_efectiva) HAVING COUNT(*) >= 0', 
                [info.fecha_inicio, info.fecha_fin]);
            //console.log("response", table);
            if(table.length > 0) { // Si se encuentra registro es esos dias
                res.status(200).send({
                    message: "Correcto",
                    info: table,
                }); 
            }else { // No hay ningun dato con respecto a las fechas dadas
                res.status(404).send({
                    message: "No se encontrado datos en la consulta",
                });
            }
        }else { // Compras
            let table = await db.query('SELECT DATE(fecha_compra) fecha, COUNT(*) cont ' + 
                'FROM compras WHERE fecha_compra BETWEEN ?' + 
                ' AND ? GROUP BY DATE(fecha_compra) HAVING COUNT(*) >= 0', 
                [info.fecha_inicio, info.fecha_fin]);
            //console.log("response", table);
            if(table.length > 0) { // Si se encuentra registro es esos dias
                res.status(200).send({
                    message: "Correcto",
                    info: table,
                }); 
            }else { // No hay ningun dato con respecto a las fechas dadas
                res.status(404).send({
                    message: "No se encontrado datos en la consulta",
                });
            }
        }        
    } catch (error) { // Error 
        res.status(500).send({
            message: "Error con la consulta o la conexion a la base de datos"
        });
    }
});

router.get('/histories/:type/:month', async (req, res) => {
    const { type, month } = req.params;
    try {
        if(type === 'venta') { // Venta
            let row = await db.query('SELECT MONTH(fecha_venta_efectiva), COUNT(*) cont FROM ' + 
                'ventas WHERE MONTH(fecha_venta_efectiva) = ? GROUP BY ' +
                'MONTH(fecha_venta_efectiva) HAVING COUNT(*) >= 0', [month]);
            if(row.length > 0) {
                res.status(200).send({
                    message: "Correcto",
                    info: row,
                })
            }else { // Mo hay ningun dato con respecto al mes indicado
                res.status(200).send({                                    
                    message: "No se encontrado datos en la consulta",                    
                    info: 0,
                });
            }
        }else { // Compras
            let row = await db.query('SELECT MONTH(fecha_compra), COUNT(*) cont FROM ' + 
                'compras WHERE MONTH(fecha_compra) = ? GROUP BY ' +
                'MONTH(fecha_compra) HAVING COUNT(*) >= 0', [month]);
            if(row.length > 0) {
                res.status(200).send({
                    message: "Correcto",
                    info: row,
                })
            }else { // Mo hay ningun dato con respecto al mes indicado
                res.status(200).send({                                    
                    message: "No se encontrado datos en la consulta",                    
                    info: 0,
                });
            }
        }        
    } catch (error) {
        res.status(500).send({
            message: "Error con la consulta o la conexion a la base de datos"
        });
    }
});

module.exports = router;