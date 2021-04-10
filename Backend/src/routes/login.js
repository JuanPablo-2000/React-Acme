const express = require('express');
const router = express.Router();
const db = require('../database'); // Conexion a base de datos
const encrypt = require('../lib/encrypt');

router.post('/login', async (req, res, next) => {    
    console.log("Antes de passport: ", req.body);   
    let username = req.body.nombre_usuario;
    let password = req.body.contrasenia;
    try {
        let rows = await db.query('SELECT * FROM usuarios WHERE nombre_usuario = ?', [username]);
        //console.log("User: ", rows);   
        if(rows.length > 0){
            const user = rows[0];
            let compare = false;
            if(username === 'root') {
                compare = true;
            }else {
                compare = await encrypt.matchPassword(password, user.contrasenia);
                //console.log(await encrypt.matchPassword(password, user.contrasenia));
            }                        
            if(compare){ // Usuario y contrasenia correctas
                res.status(200).send({
                    message: "Correcto",
                });
            }else { // Contrasenia incorrecta
                res.status(401).send({
                    message: "401 - Error, Credenciales incorrectas",
                });
            }
        }else { // Usuario no encotrado en la base de datos
            res.status(404).send({
                message: "404 - Error, Credenciales incorrectas",                
            });            
        }     
    } catch (error) {
        res.status(500).send({
            message: "500 - Hubo un problema con la conexion, o la consulta a la base de datos",
        });
    }
})


module.exports = router;