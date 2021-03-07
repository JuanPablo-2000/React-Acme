import React, { Component, useState } from 'react'

import Inicio from '../Componentes/Inicio-img'
import Fechas from '../Componentes/Fechas'
import Grafica from '../Componentes/Grafica'
// ------------------------ JQuery ------------------------------------
import $ from 'jquery'

// ------------------------ CSS y Boostrap ------------------------------------

// ------------------------ Iconos ------------------------------------
import { faBars, faSearch, faThumbsDown, faStar, faStarHalf, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// ------------------------ Imagenes -----------------------------------

class Historial extends Component {
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

    carrosMasComprados(){
        return(
            <div>
                <ul className="autos list-inline w-100">
                    <li className="list-inline-item">
                        <div className="blog-card spring-fever">
                            <div className="title-content">
                                <h3>SPRING FEVER</h3>
                                <hr />
                                <div className="intro">Yllamco laboris nisi ut aliquip ex ea commodo.</div>
                            </div>
                            <div className="card-info">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. 
                            </div>
                            <div className="utility-info">
                                <ul className="utility-list">
                                <li className="comments">12</li>
                                <li className="date">03.12.2015</li>
                                </ul>
                            </div>                        
                            <div className="gradient-overlay"></div>
                            <div className="color-overlay"></div>
                        </div>
                    </li>  
                    <li className="list-inline-item">
                        <div className="blog-card spring-fever">
                            <div className="title-content">
                                <h3>SPRING FEVER</h3>
                                <hr />
                                <div className="intro">Yllamco laboris nisi ut aliquip ex ea commodo.</div>
                            </div>
                            <div className="card-info">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. 
                            </div>
                            <div className="utility-info">
                                <ul className="utility-list">
                                <li className="comments">12</li>
                                <li className="date">03.12.2015</li>
                                </ul>
                            </div>                        
                            <div className="gradient-overlay"></div>
                            <div className="color-overlay"></div>
                        </div>
                    </li>  
                    <li className="list-inline-item">
                        <div className="blog-card spring-fever">
                            <div className="title-content">
                                <h3>SPRING FEVER</h3>
                                <hr />
                                <div className="intro">Yllamco laboris nisi ut aliquip ex ea commodo.</div>
                            </div>
                            <div className="card-info">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. 
                            </div>
                            <div className="utility-info">
                                <ul className="utility-list">
                                <li className="comments">12</li>
                                <li className="date">03.12.2015</li>
                                </ul>
                            </div>                        
                            <div className="gradient-overlay"></div>
                            <div className="color-overlay"></div>
                        </div>
                    </li>    
                </ul>            
            </div>
        );
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
                                            <a href="#">Compra</a>
                                        </li>
                                        <li>
                                        <a href="#">Otros</a>
                                        </li>
                                    </ul>
                                </li>
                               {/* ------------------------- ITEM 2 ------------------------- */}
                                <li>
                                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Registros</a>
                                    <ul className="collapse list-unstyled" id="pageSubmenu">
                                        <li>
                                            <a href="#">Registro de compra</a>
                                        </li>
                                        <li>
                                            <a href="#">Registro de venta</a>
                                        </li>                                       
                                    </ul>
                                </li>                                
                                {/* ------------------------- ITEM 3 ------------------------- */}
                                <li>
                                    <a href="#precioSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Precios</a>
                                    <ul className="collapse list-unstyled" id="precioSubmenu">
                                        <li>
                                            <a href="#">Precio de compra</a>
                                        </li>
                                        <li>
                                            <a href="#">Precio de venta</a>
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
                                            <a href="#">CRUD de vehiculos</a>
                                        </li>                                       
                                    </ul>
                                </li>
                                {/* ------------------------- ITEM 5 ------------------------- */}
                                <li>
                                    <a href="Propietarios">Propietarios</a>
                                </li>
                                {/* ------------------------- ITEM 6 ------------------------- */}
                                <li>
                                    <a href="#">Fechas de publicación</a>
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
                        <br/> <br/>                                               
                        <Fechas />
                        <Grafica/>   
                        {this.carrosMasComprados()}
                    </div> 
                </div> 
            </div>    
        );             
    }    
};

export default Historial;