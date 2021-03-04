import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../Vistas/Login'
import Usuarios from '../Vistas/Usuarios'
import Crud from '../Vistas/Crud'

function Rutas()  {
    return(        
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/Login" component={Login} />
                <Route path="/UsuariosClientes" component={Usuarios} />
                <Route path="/Crud" component={Crud} />
            </Switch>
        </BrowserRouter>
    );  
};

export default Rutas;