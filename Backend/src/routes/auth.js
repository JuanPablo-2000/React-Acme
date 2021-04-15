const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/auth', async (req, res) => {
    console.log("Session", req.session.user);
    try {
        let table = await db.query('SELECT * FROM sessions');
        if(table.length > 0) {
            res.status(200).send({
                message: "Logueado",
            });
        }else {
            res.status(200).send({
                message: "No esta logueado",
            });
        }
    } catch (error) {
        res.status(500).send({
            message: "Error con la conexion a la db o la consulta sql",
        });
    }    
});

router.delete('/auth', async (req, res) => {    
    try {
        await db.query('DELETE FROM sessions');
        res.status(200).send({
            message: "Cerrado",
        });    
    } catch (error) {
        res.status(500).send({
            message: "Error con la conexion a la db o la consulta sql",
        });
    }    
});

module.exports = router;