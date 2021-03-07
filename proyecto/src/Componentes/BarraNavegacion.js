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
            valorOpcion: '',
        }

        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {    
        this.setState({
            valorOpcion: event.target.value
        });  
        console.log(this.state.valorOpcion);
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

    botonActualizar(){
        console.log("Hola");
        //this.appendData();
        
    }

    informacionBasica(){
        return(
            /* col-md-4 col-md-push-8 */
            <div className="">
                <div className="biography">
                    <div className="myphoto">                           
                        <img src={foto} alt="Perfil" className="perfil" />                             
                    </div>
                    <ul>
                        <li><strong>Nam:</strong> John Doe</li>
                        <li><strong>Date of birth:</strong> 05 Dec 1993</li>
                        <li><strong>Address:</strong> 239/2 Awesome Street, USA</li>
                        <li><strong>Nationality:</strong> American</li>
                        <li><strong>Phone:</strong> (000) 1234 56789</li>
                        <li><strong>Email:</strong> yourmail@iamx.com</li>
                    </ul>
                </div>
            </div>
        );
    }       

    formularioCRUD(){        
        return(
            <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
                <div className="wrapper wrapper--w780">
                    <div className="card card-3">
                        <div className="card-heading">
                            {this.informacionBasica()}
                        </div>                        
                        <div className="card-body">
                            <h2 className="titulo-crud">Clientes y Personal activo </h2>
                            <form method="POST">
                                <div className="input-group">
                                    <input className="input--style-3" type="text" placeholder="Nombre" name="nombre" />
                                </div>
                                <div className="input-group">
                                    <input className="input--style-3" type="text" placeholder="Apellido" name="apellido" />
                                </div>
                                <div className="input-group">
                                    <input className="input--style-3" type="text" placeholder="Cedula" name="cedula" />
                                </div>
                                <div className="input-group">
                                    <input className="input--style-3" type="email" placeholder="Correo electrónico" name="email" />
                                </div>
                                <div className="input-group">
                                    <input className="input--style-3" type="text" placeholder="Teléfono" name="telefono" />
                                </div>
                                <div className="input-group">                                                                            
                                        <select value={this.state.valorOpcion} name="tipoPersona" className="opcion" onChange={this.handleChange}>                                            
                                            <option value="Tipo" hidden>Tipo de persona</option>
                                            <option value="Cliente">Cliente</option>
                                            <option value="Actualizar">Actualizar</option>                                            
                                            <option value="Usuario">Usuario para el aplicativo</option>                                            
                                        </select>                                                                          
                                    </div>
                                <div className="p-t-10 btn-group text-center">
                                    <button className="btn btn--pill btn--green " type="submit">Crear</button>                                    
                                    <button className="btn btn--pill btn--green " type="submit">Actualizar</button>                                    
                                    <button className="btn btn--pill btn--green " type="submit">Eliminar</button>                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {         
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
                                            <a href="#">Venta</a>
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
                                            <a href="#">CRUD de usuarios y clientes</a>
                                        </li>
                                        <li>
                                            <a href="#">CRUD de vehiculos</a>
                                        </li>                                       
                                    </ul>
                                </li>
                                {/* ------------------------- ITEM 5 ------------------------- */}
                                <li>
                                    <a href="#">Propietarios</a>
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
};


export default BarraNavegacion;