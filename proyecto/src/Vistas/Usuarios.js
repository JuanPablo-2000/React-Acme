import React, { Component } from 'react'
import Inicio from '../Componentes/Inicio-img'
import BarraNavegacion from '../Componentes/BarraNavegacion'
// ------------------------ CSS y Boostrap ------------------------------------
import 'bootstrap/dist/css/bootstrap.min.css'

// ------------------------ JQuery ------------------------------------
import $ from 'jquery'

// ------------------------ Iconos ------------------------------------
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let bandera = false;

class UsuariosClientes extends Component{
    constructor(props){
        super();
    }        

    render(){
        return (
            <div>
                <Inicio />
                <BarraNavegacion />                                  
            </div>    
        );
    }
};

export default UsuariosClientes;