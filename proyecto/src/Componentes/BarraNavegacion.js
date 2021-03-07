import React, { Component } from 'react'
import ScriptTag from 'react-script-tag';
// ------------------------ CSS y Boostrap ------------------------------------
import '../css/style2.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/src/collapse.js';
import selector from '../css/style.css';
// ------------------------ JQuery ------------------------------------
import $ from 'jquery'

// ------------------------ Iconos ------------------------------------
import { faBars, faSearch, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ------------------------ Imagenes ------------------------------------
import foto from '../img/myphoto.jpg';


class BarraNavegacion extends Component {
    constructor(props){
        super(props); 
        // ------------------------ Scripts ------------------------------------
        const Demo = props => (
            <ScriptTag type="text/javascript" src="../js/select2.min.js" /> ,
            <ScriptTag type="text/javascript" src="../js/scripts.js" />          
        );                   

        this.state = {
            value: '',
        }

        this.handleChange = this.handleChange.bind(this);
    }

    botonActualizar(){
        console.log("Hola");
        //this.appendData();
        
    }

    subListaTipo() {
        if(this.state.value == "usuario"){
            return(
                <>      
                <a href="#usuarios-nuevos" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle" id="disparador">Registrar Datos</a>          
                {this.auxiliar()}
                <ul className="collapse list-unstyled components input--style-3" id="usuarios-nuevos">
                    <div className="input-group">
                        <input className="input--style-3" type="text" placeholder="Nombre de Usuario" name="nombre-usuario" />
                    </div>
                    <div className="input-group">
                        <input className="input--style-3" type="text" placeholder="Contraseña" name="contrasenia" />
                    </div>
                </ul>
                </>
            );
        }
    }

    auxiliar() {
        $('#disparador').on('click', function() {(window.location.href="#usuarios-nuevos")});
        $('#disparador').trigger('click');
    }

    handleChange(event) {            
        this.state.value = event.target.value;   
        this.setState({value: event.target.value});    
        console.log(this.state.value);

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

    contenido() {
        return( 
            <div className="h-10 fd">
                <div className="d-flex justify-content-center h-100">
                    <div className="searchbar">
                        <input className="search_input" type="text" name="" placeholder="Buscar..." id="buscador"/>
                            <a className="search_icon"><i className="fa" onClick={this.botonActualizar}>
                                    <FontAwesomeIcon icon={faSearch}/>
                                    </i>
                            </a>
                    </div>
                    <div className="chequeo-posicion">
                        <input type="checkbox" id="_checkbox" />
                            <label htmlFor="_checkbox" className="chequeo">
                                <div id="tick_mark"></div>
                            </label>                                    
                    </div>      
                        <p className="todos-p">Mostrar todos</p>                          
                </div>
            </div>
        );
    }

  

    informacionBasica(){
        return(
            /* col-md-4 col-md-push-8 */
            <div className="">
                <div className="biography">
                    <div className="myphoto">                           
                        <img src={foto} alt="Perfil" className="perfil" />                             
                    </div>
                    <ul className="lista-datos">
                        <li><strong>Nombres:</strong> John Doe</li>                        
                        <li><strong>Apellidos:</strong> Gonzales Jimenez</li>
                        <li><strong>Cédula:</strong> 2.158.153</li>
                        <li><strong>Correo eléctronico:</strong> jhon@gmail.com</li>
                        <li><strong>Télefono</strong> 3214569852</li>
                        <li><strong>Usuario</strong> ----------</li>
                        <li><strong>Contraseña</strong> ########</li>
                    </ul>
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
                        {/*
                            <h2 className="mb-4">Sidebar #01</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        */}
                        {this.contenido()}
                        {/*{this.informacionBasica()}*/}
                        {this.formularioCRUD()}
                    </div> 
                </div> 
            </div>    
        );             
    }

    render() {         
        return(       
            <>
                {this.menuLateral()}
            </>    
        );
    }
};


export default BarraNavegacion;