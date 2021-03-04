import React, { Component } from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavbarElements';

import $ from 'jquery'
import '../js/scripts.js'
//----------- CSS y Booststarp ----------
import '../css/style.css'
import '../css/animate.css'
import '../css/responsive.css'
import '../css/magnific-popup.css'
import 'bootstrap/dist/css/bootstrap.min.css'

//--------------- Iconos e Imagenes ------------
import Usuario from '../img/usuario.png'
import Empresa from '../img/acme.png'

class Crud extends Component{
    constructor(props){
        super();
    }

    modificarFondo() {     
        $('#imagen-fondo').attr("id", "body-comun");                
    }

    render(){
        
        return(
            <div class="d-flex" id="wrapper">
                <div id="page-content-wrapper">

                <>
                <Nav>
                    <NavLink to=''>
                    <img src={Empresa} className="acme" alt='logo' />
                    </NavLink>
                    <Bars />
                    <NavMenu>
                    <NavLink to='/' activeStyle>
                        Configuración
                    </NavLink>
                    <NavLink to='' activeStyle>
                        Historiales
                    </NavLink>
                    <NavLink to='' activeStyle>
                        Propietarios
                    </NavLink>
                    <NavLink to='' activeStyle>
                        Precios
                    </NavLink>
                    <NavLink to='' activeStyle>
                        Fechas & publicación
                    </NavLink>

                    </NavMenu>
                    <NavBtn>
                    <NavBtnLink className="buscar" to='/'>Buscar</NavBtnLink>
                    </NavBtn>
                </Nav>
                </>

                            <section class="form-register formulario">
                                <h4>Formulario Registro</h4>
                                <input class="controls" type="text" name="nombres" id="nombres" placeholder="Ingrese sus Nombres"/>
                                <input class="controls" type="text" name="apellidos" id="apellidos" placeholder="Ingrese sus Apellidos"/>
                                <input class="controls" type="email" name="correo" id="correo" placeholder="Ingrese su Correo"/>
                                <input class="controls" type="text" name="cédula" id="correo" placeholder="Ingrese su Cédula"/>
                                <input class="controls" type="text" name="teléfono" id="correo" placeholder="Ingrese su Teléfono"/>
                                <div class="centrar">
                                    <div>
                                        <button class="btn btn-primary botones" >Crear</button>
                                        <button class="btn btn-primary botones" >Modificar</button>
                                        <button class="btn btn-primary botones" >Eliminar</button>
                                    </div>
                                </div>
                            </section>

                        </div>
                    </div>
        );
    }

}

export default Crud;
