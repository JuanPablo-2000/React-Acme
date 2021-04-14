const express = require('express');
const router = express.Router();
const db = require('../database');

router.post('/transactions', async (req, res) => {    
    let info = req.body;
    console.log(info);
    try {
        let validate = await db.query('SELECT cedula FROM clientes WHERE cedula = ?', [info.cedula]);
        if(validate.length > 0) {
            let validate_1 = await db.query('SELECT placa FROM vehiculos WHERE placa = ?', [info.placa_vh]);
            if(validate_1.length > 0) {
                if(info.type === 'compras') { // Registro de compras
                    let row = await db.query('INSERT INTO compras (serial_compra, cedula_cliente, placa_vh_compra, valor_compra)' 
                        + ' VALUES (?, ?, ?, ?)', [info.serial_compra, info.cedula, info.placa_vh,
                        info.valor_compra]);
                    if(row.affectedRows === 1) {
                        res.status(200).send({
                            message: "Correcto",                    
                        })
                    }else {
                        res.status(500).send({
                            message: "500 - Error, No se puedo realizar la consulta",
                        });
                    }
                }else { // Registro de ventas
                    let validate_2 = await db.query('SELECT * FROM ventas WHERE placa_vh_venta = ?',
                        [info.placa_vh]);
                    if(validate_2.length === 0) {
                        let row = await db.query('INSERT INTO ventas (serial_venta, propietario_nuevo, placa_vh_venta, valor_venta)' 
                            + ' VALUES (?, ?, ?, ?)', [info.serial_venta, info.cedula, info.placa_vh,
                            info.valor_venta]);
                        if(row.affectedRows === 1) { // Lo inserto correctamente
                            res.status(200).send({
                                message: "Correcto",                    
                            })
                        }else { // Problemas con la consulta
                            res.status(500).send({
                                message: "500 - Error, No se puedo realizar la consulta INSERT",
                            });
                        }
                    }else { // Placa repetida en los registro de ventas
                        res.status(409).send({
                            message: "La placa ya se encuentra registrada en las ventas",
                        });        
                    }                    
                }        
            }else {
                res.status(400).send({
                    message: "La placa debe coincidir con un vehiculo registrado",
                });
            }            
        }else {
            res.status(400).send({
                message: "La cedula debe coincidir con una persona registrada",
            });
        }        
    } catch (error) { // Atrapo el error de la cosulta INSERT por si el serial esta repetido
        res.status(500).send({
            message: "Serial repetido, por favor intenta con uno nuevo",
        });        
    }
    
});

router.get('/transactions/:type', async (req, res) => {
    const { type } = req.params;
    try {
        let table = await db.query('SELECT * FROM ' + type);
        if(table.length > 0) {
            res.status(200).send({
                message: "Correcto",
                records: table,
            });
        }else {
            res.status(404).send({
                message: "No hay datos para visualizar",
            });
        }
    } catch (error) {
        res.status(500).send({
            message: "Hubo un error con la consulta",
        });
    }
});

router.get('/transactions/:tabla/:registro', async (req, res) => {
    const { tabla, registro } = req.params;
    try {
        if(tabla === 'compra') {
            let row = await db.query('SELECT * FROM compras WHERE serial_compra = ?', [registro]);
            if(row.length > 0) {
                res.status(200).send({
                    message: "Correcto",
                    records: row[0],
                })
            }else {
                res.status(404).send({
                    message: "No hay datos para visualizar",
                });
            }
        }else {
            let row = await db.query('SELECT * FROM ventas WHERE serial_venta = ?', [registro]);
            if(row.length > 0) {
                res.status(200).send({
                    message: "Correcto",
                    records: row[0],
                })
            }else {
                res.status(404).send({
                    message: "No hay datos para visualizar",
                });
            }
        }        
    } catch (error) {
        res.status(500).send({
            message: "Hubo un error con la consulta",
        });
    }
});

router.get('/vehicles/price/:placa', async (req, res) => {
    const { placa } = req.params;        
    try {
        let validate = await db.query('SELECT * FROM vehiculos WHERE placa = ?', [placa]);
        console.log("Existe el carro", validate.length);
        if(validate.length > 0) {            
            let row = await db.query('SELECT * FROM compras t1 INNER JOIN ventas t2 ON t1.placa_vh_compra = ? '
                + 'AND t2.placa_vh_venta = ?', [placa,placa]);
            console.log("resutaldo", row);
            if(row.length === 1) { // Tiene precio de compra y ya se vendio
                res.status(200).send({
                    message: "Correcto",
                    vehicles: row[0],
                })
            }else {                
                let data_compra = await db.query('SELECT valor_compra FROM compras WHERE placa_vh_compra = ?', [placa]);
                //console.log(data_compra[0].valor_compra);
                if(data_compra.length > 0) { // Solo tiene precio de compra
                    let result = {
                        valor_compra: data_compra[0].valor_compra,
                        valor_venta: "No aplica",
                    }
                    res.status(200).send({
                        message: "Correcto",
                        vehicles: result,
                    })
                }else { // Pasa cuando no esta registrada la compra del vehiculo
                    res.status(404).send({
                        message: "404 - Error, No se encontro datos",
                    });
                }
            }
        }else {
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