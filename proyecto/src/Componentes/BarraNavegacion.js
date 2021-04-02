import React, { Component } from 'react'
import ScriptTag from 'react-script-tag';

// ------------------------ CSS y Boostrap ------------------------------------
import '../css/style2.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/src/collapse.js';
// ------------------------ JQuery ------------------------------------
import $ from 'jquery'

// ------------------------ Iconos ------------------------------------
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



class BarraNavegacion extends Component {
    constructor(props){
        super(props); 
        // ------------------------ Scripts ------------------------------------
        const Demo = props => (
            <ScriptTag type="text/javascript" src="../js/select2.min.js" />,
            <ScriptTag type="text/javascript" src="../js/scripts.js" />          
        );                                   

        // ------------------------ Atributos o estados ------------------------------------
        this.state = {            
            showinfo: props.contentPage,            
        }                
    }   
    
    render() {         
        return(       
            <>
                {this.navegacionYContenido()}
            </>
        );
    }   

    navegacionYContenido() {
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
                                            <a href="Precios">Precios de Vehiculo</a>
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

                    {/* ------------------------------------- CONTENIDO - PARTE DERECHA ---------------- */}
                    <div id="content" className="p-4 p-md-5 holaa">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <button id="sidebarCollapse" className="btn btn-primary" onClick={() => this.efectobarraLateral()}>
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
                        {/* ------------------------------------- CONTENIDO DE LA PAGINA ----------------------- */}
                        <br /> <br />
                        {this.state.showinfo}
                    </div> 
                </div> 
            </div>    
        );             
    }
    
    efectobarraLateral() {
        let fullHeight = function() {
            $('.js-fullheight').css('height', $(window).height());
            $(window).resize(function(){
                $('.js-fullheight').css('height', $(window).height());
            });
        };
        fullHeight();

        $('#sidebar').toggleClass('active');       
    }       
};


export default BarraNavegacion;