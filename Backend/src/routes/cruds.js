const express = require('express');
const router = express.Router();
const db = require('../database');
const encrypt = require('../lib/encrypt');

/* ---------------------------- CRUD de Usuarios ---------------------------- */
router.get('/users', async (req, res, next) => {
    try {
        let table = await db.query('SELECT * FROM'+
            '(SELECT * FROM clientes t1 WHERE t1.activo = 1) t2 ' +
            'LEFT OUTER JOIN usuarios t3 ON t2.cedula = t3.cedula_id');      
        //console.log(table);
        if(table.length > 0) {                 
            res.status(200).send({
                message: "Correcto",
                personas: table,
            });                                                            
        }else {
            res.status(404).send({
                message: "404 - Error, No se encontro datos",
            });
        }
    } catch (error) {
        res.status(500).send({
            message: "500 - Hubo un problema con la conexion, o la consulta a la base de datos",
        });
    }
});

router.get('/users/:cedula', async (req, res, next) => {
    const { cedula } = req.params;    
    try {
        let rows = await db.query('SELECT * FROM clientes WHERE cedula = ?', [cedula]);        
        if(rows.length > 0) {    
            rows_1 = await db.query('SELECT * FROM ' +
                '(SELECT * FROM clientes t1 WHERE t1.cedula = ? AND t1.activo = 1) t2 ' +
                'LEFT OUTER JOIN usuarios t3 ON t2.cedula = t3.cedula_id', [cedula, cedula]);               
            let user, message;
            if(rows_1.length > 0) { 
                console.log("normal");  
                user = rows_1[0];             
                message = "Correcto - Completo";
            }else {
                console.log("no normal");  
                user = rows[0];      
                message = "Correcto - Incompleto"; 
            }              
            res.status(200).send({
                message: message,
                persona: user,
            });
        }else {            
            res.status(404).send({
                message: "404 - Error, No se encontro datos",
            });
        }
    } catch (error) {
        res.status(500).send({
            message: "500 - Hubo un problema con la conexion, o la consulta a la base de datos",
        });
    }
});



router.delete('/users/:cedula', async (req, res, next) => {
    const { cedula } = req.params;
    try {
        //console.log("cedula", cedula);
        let validate = await db.query('SELECT activo FROM clientes WHERE cedula = ?', [cedula]);        
        if(validate.length > 0) {            
            //console.log(validate[0].activo);
            if(validate[0].activo === 0) {
                res.status(423).send({
                    message: "Ya esta eliminado",
                })
            }else {
                let row = await db.query('UPDATE clientes SET activo = ? WHERE cedula = ?', [0, cedula]);                
                //console.log(row.affectedRows);     
                if(row.affectedRows === 1) {
                    res.status(200).send({
                        message: "Correcto",
                    });
                }else {
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
            message: "500 - Hubo un problema con la conexion, o la consulta a la base de datos",
        });
    }
});

router.post('/users', async (req, res, next) => {
    //console.log(req.body);
    let info = req.body;
    let field = '';
    let missingFiled = false;    
    if(info.cedula === undefined) {
        missingFiled = true;
        field = 'El campo cedula es obligatorio';
    }else if(info.nombres === undefined) {
        missingFiled = true;
        field = 'El campo nombres es obligatorio';
    }else if(info.apellidos === undefined) {
        missingFiled = true;
        field = 'El campo apellidos es obligatorio';
    }else if(info.correo === undefined) {
        missingFiled = true;
        field = 'El campo correo es obligatorio';
    }else if(info.telefono === undefined) {
        missingFiled = true;
        field = 'El campo telefono es obligatorio';
    }
    try {
        if(!missingFiled) {
            let validate = await db.query('SELECT * FROM clientes WHERE cedula = ?', [info.cedula]);
            if(validate.length === 0){ // Valido que la persona no este antes registrada
                if(info.type === 'persona-normal') { // Persona normal
                    let add = await db.query('INSERT INTO clientes (cedula, nombres, apellidos, correo, ' +
                        'telefono, activo) VALUES (?, ?, ?, ?, ?, ?)', 
                        [info.cedula, info.nombres, info.apellidos, info.correo, info.telefono, 1]);                    
                    if(add.affectedRows === 1) {
                        res.status(200).send({
                            message: "Correcto",
                        })
                    }else {
                        res.status(500).send({ // Problemas con la consulta, sintaxis o bd
                            message: "500 - Hubo un problema con la conexion, o la consulta a la base de datos",
                        });
                    }
                }else if(info.type === 'persona-aplicativo'){ // Usuario aplicativo
                    let add = await db.query('INSERT INTO clientes (cedula, nombres, apellidos, correo, ' +
                        'telefono, activo) VALUES (?, ?, ?, ?, ?, ?)', 
                        [info.cedula, info.nombres, info.apellidos, info.correo, info.telefono, 1]);    
                    
                    let password_encrypt = await encrypt.encryptPassword(info.contrasenia); // Encrypto la contrasenia                    
                    //console.log(password_encrypt);
                    let add_fk = await db.query('INSERT INTO usuarios (cedula_id, nombre_usuario, contrasenia) ' +
                        ' VALUES (?, ?, ?)', [info.cedula, info.nombre_usuario, password_encrypt]);
                                        
                    if(add_fk.affectedRows === 1 && add.affectedRows === 1) {
                        res.status(200).send({
                            message: "Correcto",
                        })
                    }else {                        
                        res.status(500).send({ // Problemas con la consulta, sintaxis o bd
                            message: "500 - Hubo un problema con la conexion, o la consulta a la base de datos",
                        });
                    }                    
                }else {
                    res.status(400).send({ // Si mandan de la capa de frontend un tipo invalido
                        message: 'Tipo de usuario incorrecto',     
                    });
                }            
            }else {
                res.status(409).send({ // Porque ya existe
                    message: 'Usuario ya existente',
                });
            }
        }else {
            res.status(400).send({
                message: field,        
            });
        }
    } catch (error) {
        res.status(500).send({
            message: "500 - Hubo un problema con la conexion, o la consulta a la base de datos",
        });
    }    
});

router.put("/users/:cedula", async (req, res, next) => {
    const { cedula } = req.params;
    let info = req.body;
    console.log(info, cedula);
    try {

        if(info.type === 'persona-normal') {
            let row = await db.query('UPDATE clientes SET nombres = ?, apellidos = ?, correo = ?, '+
                'telefono = ? WHERE cedula = ?', [info.nombres, info.apellidos, info.correo,
                    info.telefono, cedula]);            
            if(row.affectedRows === 1) {
                res.status(200).send({
                    message: "Correcto",
                })
            }else {
                res.status(404).send({
                    message: "404 - Error, Hubo un problema en la consulta",
                });
            }
        }else if(info.type === 'persona-aplicativo') {
            let row = await db.query('UPDATE clientes SET nombres = ?, apellidos = ?, correo = ?, '+
                'telefono = ? WHERE cedula = ?', [info.nombres, info.apellidos, info.correo,
                    info.telefono, cedula]);
            if(row.affectedRows === 1) {
                let encryptPass;
                if(info.contrasenia === '*********') {
                    let pass = await db.query('SELECT contrasenia FROM usuarios WHERE cedula_id = ?', [cedula]);                                        
                    encryptPass = pass[0].contrasenia;
                }else {
                    //console.log(info.contrasenia);
                    encryptPass = await encrypt.encryptPassword(info.contrasenia);
                }              
                //console.log(encryptPass);  
                let update = await db.query('UPDATE usuarios SET nombre_usuario = ?, contrasenia = ? WHERE cedula_id = ?',
                    [info.nombre_usuario, encryptPass, cedula]);                
                if(update.affectedRows === 1) {
                    res.status(200).send({
                        message: "Correcto",
                    })
                }else {
                    res.status(404).send({
                        message: "404 - Error, Hubo un problema en la consulta mas interna",
                    });    
                }                                
            }else {
                res.status(404).send({
                    message: "404 - Error, Hubo un problema en la consulta",
                });
            }
        }else {
            res.status(400).send({
                message: 'Tipo de usuario incorrecto',     
            });
        }              
    } catch (error) {
        res.status(500).send({
            message: "500 - Hubo un problema con la conexion, o la consulta a la base de datos",
        });
    }
});

/* ---------------------------- CRUD de Vehiculos ---------------------------- */
router.get('/vehicles', async (req, res, next) => {
    try {
        let table = await db.query('SELECT * FROM vehiculos');
        if(table.length > 0) {
            res.status(200).send({
                message: "Correcto",
                vehicles: table,
            })
        }else {
            res.status(404).send({
                message: "404 - Error, No se encontro datos",
            });
        }
    } catch (error) {
        res.status(500).send({
            message: "500 - Hubo un problema con la conexion, o la consulta a la base de datos",
        });
    }
});

router.get('/vehiclesStock', async (req, res, next) => {
    try {
        let table = await db.query('SELECT * FROM vehiculos WHERE stock > 0');
        if(table.length > 0) {
            res.status(200).send({
                message: "Correcto",
                vehicles: table,
            })
        }else {
            res.status(404).send({
                message: "404 - Error, No se encontro datos",
            });
        }
    } catch (error) {
        res.status(500).send({
            message: "500 - Hubo un problema con la conexion, o la consulta a la base de datos",
        });
    }
});

router.get('/vehicles/:placa', async (req, res, next) => {
    const { placa } = req.params;
    try {
        let table = await db.query('SELECT * FROM vehiculos t1 INNER JOIN compras t2 ON ' +
            't1.placa = ? AND t2.placa_vh_compra = ?', [placa,placa]);
        if(table.length > 0) {
            res.status(200).send({
                message: "Correcto",
                vehicles: table[0],
            })
        }else {
            res.status(404).send({
                message: "404 - Error, No se encontro datos",
            });
        }
    } catch (error) {
        res.status(500).send({
            message: "500 - Hubo un problema con la conexion, o la consulta a la base de datos",
        });
    }
});

router.delete('/vehicles/:placa', async (req, res, next) => {
    const { placa } = req.params;        
    try {
        let remove_fk = await db.query('DELETE FROM compras WHERE placa_vh_compra = ?', [placa]);

        let accept = await db.query('DELETE FROM vehiculos WHERE placa = ?', [placa]);
        if(accept.affectedRows === 1) {
            res.status(200).send({
                message: "Correcto",              
            });
        }else {
            res.status(404).send({
                message: "404 - Error, No se encontro datos",
            });
        }
    } catch (error) {
        res.status(500).send({
            message: "500 - Hubo un problema con la conexion, o la consulta a la base de datos",
        });
    }
});

router.post('/vehicles', async (req, res, next) => {
    console.log(req.body, req.body.placa);
    let info = req.body;
    try {
        let validate = await db.query('SELECT * FROM clientes WHERE cedula = ?', [info.cedula_propietario]);
        if(validate.length === 1){ // Es valido la cedula dada
            let stock = 0;
            if(info.stock){ // Validar el estado de disponible
                stock = 1;
            } 
            let validate_2 = await db.query('SELECT * FROM vehiculos WHERE placa = ?', [info.placa]);
            if(validate_2.length === 0) { // Disponible para crear
                let row = await db.query('INSERT INTO vehiculos (placa, cedula_propietario, modelo, marca, ' +
                    'procedencia, stock, img) VALUES (?, ?, ?, ?, ?, ?, ?)',
                    [info.placa, info.cedula_propietario, info.modelo, info.marca, info.procedencia,
                    stock, info.img]);
                if(row.affectedRows === 1) { // Si se inserta bien entonces se crea tambien el registro en compra
                    let validate_1 = await db.query('SELECT * FROM compras WHERE serial_compra = ?', [info.serial]);
                    if(validate_1.length === 0) { // Disponible para crear
                        let register_fk = await db.query('INSERT INTO compras (serial_compra, cedula_cliente, placa_vh_compra, valor_compra)' 
                            + ' VALUES (?, ?, ?, ?)', [info.serial ,info.cedula_propietario, info.placa, info.valor_compra]);
                        if(register_fk.length === 0) {
                            console.log("No se pudo insertar en compras");
                        }
                        
                        res.status(200).send({
                            message: "Correcto",
                        })
                    }else { // Serial repetido de compra
                        await db.query('DELETE FROM vehiculos WHERE placa = ?', [info.placa]);
                        res.status(409).send({
                            message: "El serial ya esta registrado",
                        });
                    }                
                }                                    
            }else { // No se pudo crear el vehiculo, placa repetida
                res.status(409).send({
                    message: "La placa ya esta registrada",
                });
            }          
        }else { // La cedula dada no es valida o no existe
            res.status(409).send({
                message: 'Es necesario que la cedula corresponda a un ciente',
            });
        }        
    } catch (error) { // Problemas con consulta o base de datos
        await db.query('DELETE FROM vehiculos WHERE placa = ?', [info.placa]);
        res.status(500).send({
            message: "500 - Hubo un problema con la conexion, la consulta a la base de datos, o placa ya existente",
        });
    }
});

router.put('/vehicles/:placa', async (req, res, next) => {
    //console.log(req.body, req.body.placa);
    const { placa } = req.params;
    console.log(placa, req.body);
    let info = req.body;
    try {
        let validate = await db.query('SELECT * FROM clientes WHERE cedula = ?', [info.cedula_propietario]);
        if(validate.length === 1){   // Valido si la cedula es de alguien registrado         
            let validate_1 = [];
            let deleteVehicle = false;
            if(info.placa !== placa) { // Si la actualizacion involucra la placa y si esta no esta repetida
                validate_1 = await db.query('SELECT * FROM vehiculos WHERE placa = ?', [info.placa]);
                deleteVehicle = true;
            }
            if(validate_1.length === 0) { // Valido si la placa esta disponible para tomarse
                let validate_2 = [];
                if(info.serial_antiguo !== info.serial) { // Si la actualizacion involucra un nuevo numero de serial
                    validate_2 = await db.query('SELECT * FROM compras WHERE serial_compra = ?', [info.serial]);
                }
                //console.log(validate_2.length);
                //console.log(validate_2);
                if(validate_2.length === 0) { // Valido si el # de serial esta disponible para tomarse
                    let stock = 0;
                    if(info.stock) { // Cambio el boolean a un dato acceptado por la bd
                        stock = 1;
                    }
                    console.log("Stock", stock);
                    if(deleteVehicle) { // Si requiere cambio de placa hago este procedimiento
                        //console.log("Necesita Eliminar");                        
                        // Elimino el registro de compra asociado y lo guardo temporalmente
                        let temp = await db.query('SELECT * FROM compras WHERE serial_compra = ?', [info.serial_antiguo]);                        
                        let temp_full = temp[0];
                        await db.query('DELETE FROM compras WHERE serial_compra = ?', [info.serial_antiguo]);
                        
                        // Actualizo el vehiculo con la nueva placa
                        let row = await db.query('UPDATE vehiculos SET placa = ?, cedula_propietario = ?, ' +
                            'modelo = ?, marca = ?, ' +
                            'procedencia = ?, stock = ?, img = ? WHERE placa = ?',                            
                            [info.placa, info.cedula_propietario, info.modelo, info.marca, info.procedencia,
                            stock, info.img, placa]);
                        if(row.affectedRows === 1) { // Inserto de nuevo el registro compra con los datos nuevos
                            await db.query('INSERT INTO compras (id_compra, serial_compra, cedula_cliente, ' +
                                'placa_vh_compra, valor_compra, fecha_compra) VALUES (?, ?, ?, ?, ?, ?)',
                                [temp_full.id_compra, info.serial, info.cedula_propietario,
                                info.placa, info.valor_compra, temp_full.fecha_compra]);
                            res.status(200).send({
                                message: "Correcto",
                            })   
                        }else { // Problemas con las consultas anteriores
                            res.status(500).send({
                                message: "500 - Hubo un problema con la consulta UPDATE-Eliminar",
                            });
                        }                                                                       
                    }else { 
                        console.log("No requiere eliminar")                                                
                        // Actualizo el vehiculo sin la placa ya que es la misma
                        let row = await db.query('UPDATE vehiculos SET cedula_propietario = ?, ' +
                            'modelo = ?, marca = ?, ' +
                            'procedencia = ?, stock = ?, img = ? WHERE placa = ?',                            
                        [info.cedula_propietario, info.modelo, info.marca, info.procedencia,
                        stock, info.img, placa]);

                        // Actualizo datos del registro de compras por si se cambio algo                    
                        let row_1 = await db.query('UPDATE compras SET serial_compra = ?, cedula_cliente = ?, ' + 
                            'valor_compra = ? WHERE serial_compra = ?', 
                            [info.serial, info.cedula_propietario, info.valor_compra, info.serial_antiguo]);   
                        
                        if(row.affectedRows === 1 || row_1.affectedRows === 1) {
                            res.status(200).send({
                                message: "Correcto",
                            })
                        }else { // Problemas con las consultas anteriores
                            res.status(500).send({
                                message: "500 - Hubo un problema con la consulta UPDATE",
                            });
                        }
                    }                                                                 
                }else { // Si el serial esta repetido
                    res.status(409).send({
                        message: "El serial ya está registrado, intenta con otro",
                    });    
                }                                                                                               
            }else { // Si la placa esta repetida
                res.status(409).send({
                    message: "La placa ya está registrada, por favor intenta con otra",
                });
            }
        }else { // La cedula debe ser una valida
            res.status(409).send({
                message: "Es necesario que la cedula corresponda a un ciente",
            });
        }        
    } catch (error) { // Problemas con la sintaxis o conexion a la base de datos
        res.status(500).send({
            message: "500 - Hubo un problema con la conexion, la consulta a la base de datos, o placa ya existente",
        });
    }
});

module.exports = router;
