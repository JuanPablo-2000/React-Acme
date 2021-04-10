const e = require('express');
const express = require('express');
const router = express.Router();
const db = require('../database');
const encrypt = require('../lib/encrypt');

router.get('/users', async (req, res, next) => {
    try {
        let table = await db.query('SELECT * FROM (SELECT t1.cedula, t1.nombres, t1.apellidos, ' +
            't1.correo, t1.telefono, t1.activo, t2.nombre_usuario, t2.contrasenia, t1.id as id_1, t2.id ' +
            'FROM clientes t1 LEFT OUTER JOIN usuarios t2 ON  t1.cedula = t2.cedula_id) t3');
        /*
        'SELECT * FROM clientes LEFT OUTER JOIN (SELECT * FROM usuarios t1 INNER JOIN (SELECT usuarios.id as id_1 FROM usuarios) t2 WHERE t1.id = t2.id_1) t3 ON clientes.id = t3.id_1'
        'SELECT * FROM clientes t1 LEFT OUTER JOIN usuarios t2 ON ' +
        't1.cedula = t2.cedula_id'         
        */
        console.log(table);
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
            rows_1 = await db.query('SELECT * FROM clientes INNER JOIN usuarios WHERE clientes.cedula = ? AND'+
            ' usuarios.cedula_id = ?', [cedula, cedula]);               
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
            if(validate.length === 0){
                if(info.type === 'persona-normal') { // Persona normal
                    let add = await db.query('INSERT INTO clientes (cedula, nombres, apellidos, correo, ' +
                        'telefono, activo) VALUES (?, ?, ?, ?, ?, ?)', 
                        [info.cedula, info.nombres, info.apellidos, info.correo, info.telefono, 1]);                    
                    if(add.affectedRows === 1) {
                        res.status(200).send({
                            message: "Correcto",
                        })
                    }else {
                        res.status(500).send({
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
                        res.status(500).send({
                            message: "500 - Hubo un problema con la conexion, o la consulta a la base de datos",
                        });
                    }                    
                }else {
                    res.status(400).send({
                        message: 'Tipo de usuario incorrecto',     
                    });
                }            
            }else {
                res.status(409).send({
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

module.exports = router;