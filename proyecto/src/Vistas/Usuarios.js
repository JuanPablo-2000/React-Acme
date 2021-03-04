import React, { Component } from 'react';
import $ from 'jquery'
//----------- CSS y Booststarp ----------
import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

//----------- Iconos e Imagenes ----------
import Corvette from '../img/Corvette.jpg'
import Usuario from '../img/usuario.png'

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
                <div className="d-flex" id="wrapper">
                    <div className="bg-light border-right" id="sidebar-wrapper">
                        <div>
                            <div className="sidebar-heading" id="textcentrado">Compra - Venta Acme. </div>
                            <img src={Corvette} alt="Automovil" id="imgauto"/>
                        </div>
                        <div class="list-group list-group-flush">
                            <a href="Crud#" className="list-group-item list-group-item-action bg-light">Configuración</a>
                            <a href="#" className="list-group-item list-group-item-action bg-light">Historiales</a>
                            <a href="#" className="list-group-item list-group-item-action bg-light">Clientes</a>
                            <a href="#" className="list-group-item list-group-item-action bg-light">Propietarios de Vehículos</a>
                            <a href="#" className="list-group-item list-group-item-action bg-light">Precios de compra y venta</a>
                            <a href="#" className="list-group-item list-group-item-action bg-light">Fechas de publicación</a>
                        </div>
                    </div>

                    <div id="page-content-wrapper">
                        <nav className="navbar navbar-expand-lg  table-hover">
                            <button className="btn btn-primary" id="menu-toggle">Menu</button>
                            <ul className="navbar-nav" id="ladoizquierdo">
                                <li className="nav-item" >
                                    <a className="nav-link" href="/#">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#">Información</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#">Ayuda</a>
                                </li>
                            </ul>
                        </nav>
                        <div class="container-fluid">
                            <div id="ladoizquierdo">
                                <form class="form-inline my-2 my-lg-0">
                                    <input class="form-control mr-sm-2" id="ladoizquierdo" type="search" placeholder="Buscador" aria-label="Search"/>
                                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                                </form>
                            </div>
                        </div>
                        
                        <div class="myform form col-md-8 mx-auto" id="centrando">
                            <div class="logo mb-3 text-center">
                                <img src={Usuario} id="imgusuario" alt="Usuario"/>
                                <h1>Información del cliente</h1>
                            </div>	
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Veritatis labore dicta sit! Illo ipsa, voluptatem perferendis 
                                deleniti labore laboriosam temporibus quos, illum dolorum ducimus 
                                doloribus exercitationem nulla pariatur accusantium quia!
                            </p>
                            <table id="t01">
                            <tr>
                                <th>Nombres</th>
                                <th>Apellidos</th> 
                                <th>Cedula</th>
                                <th>Correo</th>
                                <th>Teléfono</th>
                            </tr>
                            <tr>
                                <td>Jill</td>
                                <td>Smith</td>
                                <td>50</td>
                                <td>Jill@gmail.com</td>
                                <td>33455678</td>
                            </tr>
                            <tr>
                                <td>Eve</td>
                                <td>Jackson</td>
                                <td>94</td>
                                <td>Even@gmail.com</td>
                                <td>34567896</td>
                            </tr>
                            <tr>
                                <td>John</td>
                                <td>Doe</td>
                                <td>80</td>
                                <td>John@gmail.com</td>
                                <td>35678901</td>
                            </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>  
                
        );
    }
}

export default UsuarioCliente;
