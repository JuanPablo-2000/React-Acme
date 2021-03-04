import React, { Component } from 'react';
import $ from 'jquery'
//----------- CSS y Booststarp ----------
import '../css/style.css'
import '../css/responsive.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../js/scripts'
import {  faFacebookF, faTwitter, faInstagram, faPinterest, faFacebookMessenger} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

    hola(){
        $(".tt-fullHeight").height($(window).height());
    }

    render(){
        this.modificarFondo();  
        this.hola();      
        return(               
            <section id="home" className="tt-fullHeight" data-stellar-vertical-offset="50" data-stellar-background-ratio="0.2">
                <div className="intro">
                    <div className="intro-sub">Concesionario</div>
                    <h1>Acme <span>Corporation</span></h1>
                    <p></p>

                    <div className="social-icons">
                        <ul className="list-inline">
                        <li><a href="#"><i className="fa"><FontAwesomeIcon icon={faFacebookF} /></i></a></li>
                        <li><a href="#"><i className="fa"><FontAwesomeIcon icon={faTwitter} /></i></a></li>
                        <li><a href="#"><i className="fa"><FontAwesomeIcon icon={faInstagram} /></i></a></li>
                        <li><a href="#"><i className="fa"><FontAwesomeIcon icon={faPinterest} /></i></a></li>
                        <li><a href="#"><i className="fa"><FontAwesomeIcon icon={faFacebookMessenger} /></i></a></li>
                        </ul>
                    </div>
                </div>	
                <div className="mouse-icon">
                    <div className="wheel"></div>
                </div>	
            </section>                        
        );
    }
}

export default UsuarioCliente;
