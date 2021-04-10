const mysql = require('mysql');
const { database } = require('./keys'); 
const { promisify } = require('util'); // Para soportar las promesas

const pool = mysql.createPool(database);
pool.getConnection((err, connection) => {
    if(err) {
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.log("La conexion con la base de datos se ha cerrado");
        }else if(err.code === 'ER_CON_COUNT_ERROR') {
            console.log("La base de datos tiene muchas conexiones");
        }else if(err.code === 'ECONNREFUSED'){
            console.log("La conexion a la base de datos se ha rechazado");
        }
    }else {
        if(connection) {
            connection.release();
            console.log("La base de datos esta conectada");
            return;
        }
    }
});

// Convertir los querys a promesas
pool.query = promisify(pool.query);

module.exports = pool;
