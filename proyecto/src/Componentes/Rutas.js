import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import '../css/App.css';
import Inicio from '../Componentes/pages/inicio';
import Clientes from '../Componentes/pages/clientes';
import Usuario from '../Componentes/pages/usuarios';
import Vehiculos from '../Componentes/pages/vehiculos'
import Vehiculos_venta from '../Componentes/pages/vehiculo_venta';
import Vehiculos_compra from '../Componentes/pages/vehiculos_compra';
import Venta from '../Componentes/pages/venta';
import Compra from '../Componentes/pages/compra';
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
                <Route  path='/inicio' component={Inicio} />
                <Route path='/venta' component={Venta} />
                <Route path='/compra' component={Compra} />  
                <Route path='/clientes' component={Clientes} />
                <Route path='/usuarios' component={Usuario} />
                <Route path='/vehiculos' component={Vehiculos} />
                <Route path='/vehiculo_venta' component={Vehiculos_venta} />
                <Route path='/vehiculo_compra' component={Vehiculos_compra} />
                       
            </Switch>
        </BrowserRouter>
    );  
};

export default Rutas;