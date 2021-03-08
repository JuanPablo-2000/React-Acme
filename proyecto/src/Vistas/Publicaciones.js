import React, { Component, useState } from 'react'

import Inicio from '../Componentes/Inicio-img'
// ------------------------ JQuery ------------------------------------
import $ from 'jquery'

// ------------------------ CSS y Boostrap ------------------------------------

// ------------------------ Iconos ------------------------------------
import { faBars, faSearch, faThumbsDown, faStar, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// ------------------------ Imagenes -----------------------------------
import foto from '../img/Corvette.jpg';


class Publicaciones extends Component {
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

    
    fechasPublicaciones() {
        return(
            <div className="">
                <div className="row">                    
                    <div className="float-lg-left col-lg-6">
                        <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
                            <div className="blockquote-custom-icon bg-info shadow-sm">
                                <i className="fa text-white">
                                    <FontAwesomeIcon icon={faQuoteLeft}/>
                                </i>
                            </div>
                            <h4 className="text-center"><strong>Fecha de compra</strong></h4>
                            <p className="mb-0 mt-2 font-italic">
                                Fecha: 25/Febrero/2021                                
                            </p>
                            <footer className="blockquote-footer pt-4 mt-4 border-top">
                                Auto disponible en el concesionario
                            </footer>
                        </blockquote>
                    </div>                    
                    <div className="col-lg-6 desplazamiento">
                        <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
                            <div className="blockquote-custom-icon bg-info shadow-sm">
                                <i className="fa text-white">
                                    <FontAwesomeIcon icon={faQuoteLeft}/>
                                </i>
                            </div>
                            <h4 className="text-center"><strong>Fecha de venta</strong></h4>
                            <p className="mb-0 mt-2 font-italic">
                                Fecha: 25/Febrero/2021                                
                            </p>
                            <footer className="blockquote-footer pt-4 mt-4 border-top">
                                Auto disponible en el concesionario
                            </footer>
                        </blockquote>
                    </div>                    
                    <div className="col-md-4 derecha_fecha_car">
                        <h4 className="text-center"><strong>Vehiculo</strong></h4>
                        <hr />
                        <div className="profile-card-4 text-center">
                            <img src={foto} className="img-responsive" />
                            <div className="profile-content">
                                <div className="profile-name">
                                    Corvette
                                </div>
                                <div className="profile-description">
                                    <p>Modelo: <strong>Corvette</strong></p>
                                    <p>Marca: <strong>Chevrolet</strong></p>
                                    <p>Placa: <strong>25DS11</strong></p>
                                </div>
                                <ul className="list-inline small">
                                    <i className="fa text-dark list-inline-item">
                                        <FontAwesomeIcon icon={faStar}/></i>
                                    <i className="fa text-dark list-inline-item">
                                        <FontAwesomeIcon icon={faStar}/></i>
                                    <i className="fa text-dark list-inline-item">
                                        <FontAwesomeIcon icon={faStar}/></i>
                                    <i className="fa text-dark list-inline-item">
                                        <FontAwesomeIcon icon={faStar}/></i>                                            
                                </ul>    
                            </div>
                        </div>
                    </div>
                </div>
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
                        <br/> <br/>                                               
                        {this.fechasPublicaciones()}                                                                                                            
                    </div>                     
                </div>                 
            </div>    
            
        );             
    }    
};

export default Publicaciones;