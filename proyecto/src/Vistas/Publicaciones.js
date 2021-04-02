import React, { Component } from 'react';

import Inicio from '../Componentes/Inicio-img';
import BarraNavegacion from '../Componentes/BarraNavegacion';

// ------------------------ Iconos ------------------------------------
import { faStar, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
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
                <BarraNavegacion contentPage={this.contentView()}/>
            </>
        );
    }

    contentView(){
        return(
            <>
                {this.publicationDate()}
            </>
        );
    }
   
    publicationDate() {
        return(
            <div>
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
};

export default Publicaciones;