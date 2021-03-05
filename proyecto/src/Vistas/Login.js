import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import PropTypes  from "prop-types";
// ------------------------ CSS y Boostrap ------------------------------------
import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// ------------------------ JQUERY ------------------------------------
import $ from 'jquery'
// ------------------------ Iconos e imagenes ------------------------------------
import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../img/usuario-logueo.png'

class login extends Component{    

    static propiedades = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      };
    
    constructor(props){        
        super();      
    }    
    
    modificarFondo() {        
        if(($('body')).attr('id') === 'body-comun') {
            $('#body-comun').attr("id", "imagen-fondo");    
        }else $('#miBody').attr("id", "imagen-fondo");
    }

    iniciarSesion() {                    
        this.props.history.push('/UsuariosClientes');               
    }

    CrudVehiculos() {                    
        this.props.history.push('/CrudVehiculos');               
    }
    
    render(){ 
        const { match, location, history } = this.props;       
        this.modificarFondo();
        return ( 
            <div>                 
                <div className="capa-back"> </div>                    
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 mx-auto centrar">
                            <div>
                                <div className="myform form">
                                    <div className="logo mb-3 text-center">
                                        <img src={logo} width="100" className="roundedCircle" alt="Usuario" />
                                        <h2>Acme Corporation</h2>
                                    </div>
                                    {/* Formulario para Login */}
                                    <form action="" method="" name="login">
                                        {/* Cuadro para el usuario */}
                                        <div className="form-group">                        
                                            <label className="text-left"><strong>Usuario</strong></label>                      
                                            <div className="input-group">
                                                <span className="input-group-addon margen-icono">
                                                    <FontAwesomeIcon icon={faUser}/>
                                                </span>
                                                <input type="email" name="email" className="form-control" id="usuario" aria-describedby="emailHelp"
                                                    placeholder="Ingresa tu usuario" />
                                            </div>                                                                                
                                        </div>
                                        {/* Cuadro para la contrasña */}
                                        <div className="form-group">
                                            <p className="text-left"><strong>Contraseña</strong></p>
                                            <div className="input-group">
                                                <span className="input-group-addon margen-icono">
                                                    <FontAwesomeIcon icon={faKey} />
                                                </span>
                                                <input type="password" name="password" id="password" className="form-control"
                                                    aria-describedby="emailHelp" placeholder="Ingresar contraseña" />
                                            </div>                                        
                                        </div>
                                        {/* Opciones de la parte inferior */}
                                        <div className="form-group">
                                            <p className="text-left"><a onClick={() => this.CrudVehiculos()} href="">Olvidaste tu contraseña?</a></p>
                                        </div>
                                        <div className="col-md-12 text-center ">
                                            <button type="button" onClick={() => this.iniciarSesion()} className=" btn btn-block mybtn btn-primary tx-tfm">ACCEDER</button>
                                        </div>
                                        <div className="col-md-12 ">
                                            <div className="login-or text-center">
                                                <hr className="hr-or" />
                                                <span className="span-or center-block"> O </span>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <p className="text-center">
                                                {/*<FontAwesomeIcon  icon={faBro} />*/}
                                                    <a href="https://www.google.com/" className="google">Registrarse usando Google</a>                            
                                            </p>
                                        </div>
                                        <div className="col-md-12">
                                            <p className="text-center">¿No tienes cuenta? <a  href="#" id="signup">Registrate aquí</a></p>
                                        </div>
                                    </form>
                                </div>                                
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>        
        );
    }    
}
export default withRouter(login);