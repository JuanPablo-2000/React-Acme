import React, { Component } from 'react';
import $ from 'jquery'
import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class UsuarioCliente extends Component{
    constructor(props){
        super();
    }    

    modificarFondo() {     
        $('#imagen-fondo').attr("id", "body-comun");                
    }

    render(){
        this.modificarFondo();
        return(            
            <div>
                <div class="d-flex" id="wrapper">
                    <div class="bg-light border-right" id="sidebar-wrapper">
                        <div>
                            <img src="assets/img/Corvette.jpg" alt="Automovil" id="imgauto" />
                            <div class="sidebar-heading">Compra - Venta Acme. </div>
                        </div>
  
                        <div class="list-group list-group-flush">
                            <a href="#" class="list-group-item list-group-item-action bg-light">Configuración</a>
                            <a href="#" class="list-group-item list-group-item-action bg-light">Historiales</a>
                            <a href="#" class="list-group-item list-group-item-action bg-light">Clientes</a>
                            <a href="#" class="list-group-item list-group-item-action bg-light">Propietarios de Vehículos</a>
                            <a href="#" class="list-group-item list-group-item-action bg-light">Precios de compra y venta</a>
                            <a href="#" class="list-group-item list-group-item-action bg-light">Fechas de publicación</a>
                        </div>
                    </div>

                    <div id="page-content-wrapper">

                        <nav class="navbar navbar-expand-lg bg-light border-bottom">
                            <button class="btn btn-primary" id="menu-toggle">Menu</button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ml-auto mt-2 mt-lg-0" id="ladoizquierdo">                        
                                    <li class="nav-item" >
                                        <a class="nav-link" href="#">Inicio</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Información</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="#">Ayuda</a>
                                    </li>
                            </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>  
        );
    }
}

export default UsuarioCliente;
