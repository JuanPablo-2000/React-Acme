import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from '../Vistas/Login'
import CrudVehiculos from '../Vistas/CrudVehiculos'
import Propietarios from '../Vistas/Propietarios'
import Historiales from '../Vistas/Historiales'
import Usuarios from '../Vistas/Usuarios';
import HistorialCompra from '../Vistas/HistorialCompra'
import HistorialOtro from '../Vistas/HistorialComparacion'
import Publicaciones from '../Vistas/Publicaciones'
import Venta from '../Vistas/Venta'
import Compra from '../Vistas/Compra'
import Precios from '../Vistas/Precios'

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
                <Route path="/Historial-compra" component={HistorialCompra} /> 
                <Route path="/Historial-otros" component={HistorialOtro} /> 
                <Route path="/Publicaciones" component={Publicaciones} /> 
                <Route path="/Historial-venta" component={Historiales} />
                <Route path="/Compra" component={Compra} />
                <Route path="/Venta" component={Venta} />
                <Route path="/Precios" component={Precios} />
            </Switch>
        </BrowserRouter>
    );  
};

export default Rutas;