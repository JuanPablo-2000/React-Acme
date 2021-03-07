import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../Vistas/Login'
import Usuarios from '../Vistas/Usuarios'
import CrudVehiculos from '../Vistas/CrudVehiculos'
import Propietarios from '../Vistas/Propietarios'
import Historiales from '../Vistas/Historiales'

function Rutas()  {
    return(        
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/Login" component={Login} />
                <Route path="/UsuariosClientes" component={Usuarios} />
                <Route path="/CrudVehiculos" component={CrudVehiculos} />           
                <Route path="/Propietarios" component={Propietarios} /> 
                <Route path="/Historial-venta" component={Historiales} /> 
            </Switch>
        </BrowserRouter>
    );  
};

export default Rutas;