import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from '../Vistas/Login'
import CrudVehiculos from '../Vistas/CrudVehiculos'
import Propietarios from '../Vistas/Propietarios'
import Historiales from '../Vistas/Historiales'
import Usuarios from '../Vistas/Usuarios';
import Venta from '../Vistas/Venta'
import Compra from '../Vistas/Compra'

function Rutas()  {
    return(        
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/Login" component={Login} />
                <Route path="/CrudVehiculos" component={CrudVehiculos} />
                <Route path="/UsuariosClientes" component={Usuarios} />
                <Route path="/CrudVehiculos" component={CrudVehiculos} />           
                <Route path="/Propietarios" component={Propietarios} /> 
                <Route path="/Historial-venta" component={Historiales} />
                <Route path="/Compra" component={Compra} />
                <Route path="/Venta" component={Venta} />
                
            </Switch>
        </BrowserRouter>
    );  
};

export default Rutas;