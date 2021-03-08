import React, { Component } from 'react'

import Inicio from '../Componentes/Inicio-img'

// ------------------------ JQuery ------------------------------------
import $ from 'jquery'

// ------------------------ CSS y Boostrap ------------------------------------


// ------------------------ Iconos ------------------------------------
import { faBars, faSearch, faThumbsDown, faStar, faStarHalf, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// ------------------------ Imagenes ------------------------------------
import foto from '../img/carro.png';



class Precios extends Component {
    constructor(props) {
        super(props);        
    }     


    render() {
        
        return(
            <>
                <Inicio />                                
                {this.menuLateral()}                
            </>
        );
    }

    barraLateral() {
        let fullHeight = function() {
            $('.js-fullheight').css('height', $(window).height());
            $(window).resize(function(){
                $('.js-fullheight').css('height', $(window).height());
            });
        };
        fullHeight();

        $('#sidebar').toggleClass('active');       
    }

    menuLateral() {
        return(
            <div>
                <hr className="separador"></hr>                
                <div className="wrapper d-flex align-items-stretch">                     
                    <nav id="sidebar">
                        <div className="p-4 pt-5">
                            <a href="#" className="img logo rounded-circle mb-5 usuario"></a>
                            <ul className="list-unstyled components mb-5">
                                {/* ------------------------- ITEM 1 ------------------------- */}
                                <li className="active">
                                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Historiales</a>
                                    
                                    <ul className="collapse list-unstyled" id="homeSubmenu">
                                        <li>
                                            <a href="Historial-venta">Venta</a>
                                        </li>
                                        <li>
                                            <a href="Historial-compra">Compra</a>
                                        </li>
                                        <li>
                                        <a href="Historial-otros">Otros</a>
                                        </li>
                                    </ul>
                                </li>
                               {/* ------------------------- ITEM 2 ------------------------- */}
                                <li>
                                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Registros</a>
                                    <ul className="collapse list-unstyled" id="pageSubmenu">
                                        <li>
                                            <a href="Compra">Registro de compra</a>
                                        </li>
                                        <li>
                                            <a href="Venta">Registro de venta</a>
                                        </li>                                       
                                    </ul>
                                </li>                                
                                {/* ------------------------- ITEM 3 ------------------------- */}
                                <li>
                                    <a href="#precioSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Precios</a>
                                    <ul className="collapse list-unstyled" id="precioSubmenu">
                                        <li>
                                            <a href="Precios">Precio de compra</a>
                                        </li>
                                        <li>
                                            <a href="Precios">Precio de venta</a>
                                        </li>                                       
                                    </ul>
                                </li>
                                {/* ------------------------- ITEM 4 ------------------------- */}
                                <li>
                                    <a href="#crudSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">CRUD</a>
                                    <ul className="collapse list-unstyled" id="crudSubmenu">
                                        <li>
                                            <a href="UsuariosClientes">CRUD de usuarios y clientes</a>
                                        </li>
                                        <li>
                                            <a href="CrudVehiculos">CRUD de vehiculos</a>
                                        </li>                                       
                                    </ul>
                                </li>
                                {/* ------------------------- ITEM 5 ------------------------- */}
                                <li>
                                    <a href="Propietarios">Propietarios</a>
                                </li>
                                {/* ------------------------- ITEM 6 ------------------------- */}
                                <li>
                                    <a href="Publicaciones">Fechas de publicación</a>
                                </li>
                            </ul>

                            <div className="footer">
                                <p>
                                    Juan Pablo Mera Agudelo
                                    <br />
                                    Juan Pablo Milan Holgin                                    
                                </p>
                            </div>
                        </div>
                    </nav>  

                    <div id="content" className="p-4 p-md-5">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <button id="sidebarCollapse" className="btn btn-primary" onClick={() => this.barraLateral()}>
                                    <i className="fa">
                                        <FontAwesomeIcon icon={faBars}/>
                                    </i>
                                    <span className="sr-only">Toggle Menu</span>
                                </button>
                                <button className=".color-dark btn-dark d-inline-block d-lg-none ml-auto btn" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <i className="fa">
                                        <FontAwesomeIcon icon={faBars}/>
                                    </i>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="nav navbar-nav ml-auto">
                                        {/* ------------------------- ITEM 1 ------------------------- */}
                                        <li className="nav-item active">
                                            <a className="nav-link" href="#">Inicio</a>
                                        </li>                               
                                        {/* ------------------------- ITEM 2 ------------------------- */}         
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Configuracion</a>
                                        </li>
                                        {/* ------------------------- ITEM 3 ------------------------- */}
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Sobre nosotros</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    
                        <h2 className="section-title"></h2>
                        {this.contenido()}  
                           <br></br>
                           <br></br>
                           <br></br>
                        {this.propietario2()}     
                    </div> 
                </div> 
            </div>    
        );             
    }

   

    contenido() {
        return( 
            <div className="h-10 fd">
                <div className="d-flex justify-content-center h-100">
                    <div className="searchbar">
                        <input className="search_input" type="text" name="" placeholder="Buscar vehiculo ..." id="buscador"/>
                            <a className="search_icon"><i className="fa" onClick={this.botonActualizar}>
                                    <FontAwesomeIcon icon={faSearch}/>
                                    </i>
                            </a>
                    </div>                                           
                </div>
            </div>
        );
    }

    informacionBasica(){
        return(
            /* col-md-4 col-md-push-8 */
            <div className="mw-100">
                <div className="biography">
                    <div className="myphoto profile-card-4">                           
                        <img src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-4.jpg"/>
                    </div>
                    <div className="w-100 text-center">
                        <h4 className="nombre-nuevo">Nuevo Dueño</h4>                                    
                    </div>
                    
                </div>
            </div>
        );
    } 



    propietario2(){        
        return( 
                 
                  
            <div className="wrapper wrapper--w100">
                <div className="card card-3">
                <ul className="lista-datos">
                            <li><strong>Placa:</strong> ABC 123</li>
                            <li><strong>Marca:</strong> Toyota</li>
                            <li><strong>Modelo</strong> R4V4</li>
                            <li><strong>Dueño</strong> Gonzales Jimenez</li>
                            <li><strong>Correo</strong> jhon@gmail.com</li>
                            <li><strong>Precio de Compra</strong> 120.000.000</li>
                            <li><strong>Precio de Venta</strong> 140.000.000</li>
                        </ul>
                    <div className="card-heading">                        
                        {this.caruselImg()}
                        <ul className="lista-datos">
                            <li><strong>Placa:</strong> ABC 123</li>
                            <li><strong>Marca:</strong> Toyota</li>
                            <li><strong>Modelo</strong> R4V4</li>
                            <li><strong>Dueño</strong> Gonzales Jimenez</li>
                            <li><strong>Correo</strong> jhon@gmail.com</li>
                            <li><strong>Precio de Compra</strong> 120.000.000</li>
                            <li><strong>Precio de Venta</strong> 140.000.000</li>
                        </ul>
                    </div>                                                
                </div>
            </div>           
        );
    }

    caruselImg(){
        return(    
            <>
                <div className="mw-100">
                    <div className="biography">
                        <div className="myphoto">                           
                            <img src={foto}/>
                        </div>
                    </div>
                </div>
            </>           
        );
    }
};

export default Precios;