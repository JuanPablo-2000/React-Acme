import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from '../Vistas/Login'
import CrudVehiculos from '../Vistas/CrudVehiculos'
import Usuarios from '../Vistas/Usuarios';

function Rutas()  {
    return(        
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/Login" component={Login} />
                <Route path="/CrudVehiculos" component={CrudVehiculos} />
                <Route path="/UsuariosClientes" component={Usuarios} />
            </Switch>
        </BrowserRouter>
    );  
};

export default Rutas;