import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import PropTypes  from "prop-types";
import Axios from 'axios';

// ------------------------ CSS y Boostrap CSS Boostrap Js ------------------------------------
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
// ------------------------ JQUERY ------------------------------------
import $, { post } from 'jquery'
// ------------------------ Iconos e imagenes ------------------------------------
import { faKey, faUser, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../img/usuario-logueo.png';

class login extends Component{    

    static propiedades = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired // variable de props para la navegacion de url
      };
    
    constructor(props){        
        super();
        
        this.state = {
            messageError: '',
            showError: false,
        };
    }  
        
   
    /* Cambio de fondo con JQuery */
    modificarFondo() {        
        if(($('body')).attr('id') === 'body-comun') {
            $('#body-comun').attr("id", "imagen-fondo");    
        }else $('#miBody').attr("id", "imagen-fondo");
    }


    /* Manejo de Login - Conexion al backend */
    iniciarSesion = (event) => {    
        event.preventDefault();                        
        this.getLogin();        
    }

    CrudVehiculos() {                    
        //this.props.history.push('/CrudVehiculos');               
    }
    
    /* Conexiones con el backend */
    getLogin(){   
        this.setState({showError: false}); // Estado de la ventana en falso para verificar si tiene que mostrarla de nuevo                    
        Axios({
            method: "POST",
            headers: { "Access-Control-Allow-Origin": "*"},            
            url: "http://localhost:5000/www/login",
            data: {
                nombre_usuario: $('#usuario').val(),
                contrasenia: $('#password').val()
            },
        })
        .then((answer) => {
            console.log("Respuesta: ", answer);            
            if(answer.data.message === "Correcto") {
                this.props.history.push('/UsuariosClientes');                    
            }            
        })
        .catch((error) => {             
            console.log("Error: " , error.response);
            let message = error.response.data.message;
            if(message === "404 - Error, Credenciales incorrectas" || message === "401 - Error, Credenciales incorrectas") {
                this.setState({
                    messageError: 'Error con las credenciales',
                    showError: true, // Cambio el estado para mostrar la alerta
                });                
            }else if(message === "409 - Error, Usuario no existe" || "404 - Error, Usuario no existe") {
                this.setState({
                    messageError: 'El usuario no existe',
                    showError: true, // Cambio el estado para mostrar la alerta
                });    
            }
        })
        $('#usuario').val('');                 
        $('#password').val('');        
    }

    closeErrorMessage(){        
        $('.margen_alertDanger').hide();
    }

    /* Mensaje de error */
    showMessageError() {
        if(this.state.showError) {            
            return(
                <>
                <div className="alert alert-danger alert-dismissible fade show margen_alertDanger" role="alert">
                    <span className="input-group-addon margen-icono">
                        <FontAwesomeIcon icon={faExclamationTriangle}/>
                    </span>
                    <strong>{this.state.messageError}</strong>
                    <button type="button" className="close close_alert_danger"  onClick={this.closeErrorMessage} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>                             
                </>
            );                
        }
    }


    /* Vista renderizada */
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
                                    <form onSubmit={this.iniciarSesion} name="login" className="form_login" noValidate>
                                        {/* Cuadro para el usuario */}
                                        <div className="form-group">                        
                                            <label htmlFor="usuario" className="text-left"><strong>Usuario</strong></label>                      
                                            <div className="input-group">
                                                <span className="input-group-addon margen-icono">
                                                    <FontAwesomeIcon icon={faUser}/>
                                                </span>
                                                <input type="text" name="user" className="form-control" id="usuario" aria-describedby="emailHelp"
                                                    placeholder="Ingresa tu usuario" autoComplete="off" required/>
                                                <div className="invalid-tooltip">
                                                    Por favor completa este campo
                                                </div>                                                
                                            </div>                                                                                         
                                        </div>
                                        {/* Cuadro para la contrasña */}
                                        <div className="form-group">
                                            <label htmlFor="password" className="text-left"><strong>Contraseña</strong></label>
                                            <div className="input-group">
                                                <span className="input-group-addon margen-icono">
                                                    <FontAwesomeIcon icon={faKey} />
                                                </span>
                                                <input type="password" name="password" id="password" className="form-control"
                                                    aria-describedby="emailHelp" placeholder="Ingresar contraseña" required />
                                                <div className="invalid-tooltip">
                                                    Por favor completa este campo
                                                </div>  
                                            </div>                                        
                                        </div>
                                        {/* Mensaje de error de Login */}                                        
                                        {this.showMessageError()}
                                        {/* Opciones de la parte inferior */}
                                        <div className="form-group">
                                            <p className="text-left"><a onClick={() => this.CrudVehiculos()} href="">Olvidaste tu contraseña?</a></p>
                                        </div>
                                        <div className="col-md-12 text-center ">
                                            <button type="submit" className="btn btn-block mybtn btn-primary tx-tfm">ACCEDER</button>
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