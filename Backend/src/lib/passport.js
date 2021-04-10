/* METODOS DE AUTENTICACION PARA REGISTROS Y DEMAS */
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

// Conexion de base de datos
const db = require('../database');

passport.use('login.local', new localStrategy({         
    passReqToCallback: true
}, (req, usuario, contrasenia, done) => {
    console.log("Dede passport: ");
    //console.log(usuario);
    //console.log(contrasenia);    
}));

passport.use('register.local', new localStrategy({
    usernameField: 'nombre_usuario',
    passwordField: 'contrasenia',
    passReqToCallback: true
}, async (req, usuario, contrasenia, done) => {
     console.log(req.body);
}));

//passport.serializeUser((usr, done) => {

//})