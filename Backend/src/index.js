const express = require('express');
const morgan = require('morgan');
const db = require('./database'); // Conexion a base de datos

const session = require('express-session'); // Manejo de sesion en la base de datos
const passport = require('passport'); // Metodos de auntenticacion
const flash = require('connect-flash'); //Manejo de mensajes de error
const MySqlStore = require('express-mysql-session'); // Me permite guardar las sesiones dentro de la bd

const { database } = require('./keys');
const cors = require('cors');



/* ------------ Inicializacion ------------ */
const app = express();
require('./lib/passport'); // Añadir las autenticaciones que se esta creando


/* ------------ Configuraciones ------------ */
app.set('port', process.env.PORT || 5000);



/* ------------ MiddleWars ------------ */
// Permitir los cors o solicitudes de origen cruzado

app.use((req, res, next) => {
    res.set("Access-Control-Allow-Credentials", "true");
    res.set("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Methods, Access-Control-Allow-Origin");
    res.set("Access-Control-Allow-Origin", "*");        
    res.set("Access-Control-Allow-Methods", "HEAD,OPTIONS,GET,PUT,POST,DELETE");    
    next();
});
app.options('*', cors());
// Me permite registrar las solicitudes y los errores de las peticiones HTTP
app.use(morgan('dev'));
// Permitir al backend entender la sintaxis json
app.use(session({
    secret: 'backend_www',
    resave: false, // que no vuleva a iniciar la sesion
    saveUninitialized: false, // guardar la sesion
    store: new MySqlStore(database) // almacenarla en la base de datos
}));
app.use(flash()); // Manejo de errores (Mensajes)
app.use(express.json());
app.use(passport.initialize()); // Iniciar el middlewars passport pero no sabe como se van a manejar los datos
app.use(passport.session()) // Crear sesion para passport

/* ------------ Variables globales ------------ */
app.use((req, res, next) => {
    next();
})

/* ------------ Rutas ------------ */
app.use('/www', require('./routes/login'));
app.use('/www', require('./routes/cruds'))



/* ------------ Archivos publicos  ------------ */

/* ------------ Iniciar servidor ------------ */
app.listen(app.get('port'), () => {
    console.log("Servidor iniciado en el puerto: ", app.get('port'));
});