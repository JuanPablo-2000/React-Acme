import React, { Component } from 'react'

import Inicio from '../Componentes/Inicio-img'
import BarraNavegacion from '../Componentes/BarraNavegacion'

// ------------------------ Iconos ------------------------------------
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// ------------------------ Imagenes ------------------------------------
import foto from '../img/carro.png';



class Precios extends Component {
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
                {this.searchText()}  
                <br></br> <br></br> <br></br>                
                {this.contentInfo()}                        
           </>
       );
   }

    searchText() {
        return( 
            <div className="h-10 fd">
                <div className="d-flex justify-content-center h-100">
                    <div className="searchbar">
                        <input className="search_input" type="text" name="" placeholder="Buscar vehiculo ..." id="buscador"/>
                            <a className="search_icon"><i className="fa" onClick={this.searchCar}>
                                    <FontAwesomeIcon icon={faSearch}/>
                                    </i>
                            </a>
                    </div>                                           
                </div>
            </div>
        );
    }

    contentInfo(){        
        return(                                    
            <div className="wrapper wrapper--w100">
                <div className="card card-3">
                <ul className="lista-datos">
                            <li><strong>Placa:</strong> ABC 123</li>
                            <li><strong>Marca:</strong> Toyota</li>
                            <li><strong>Modelo</strong> R4V4</li>
                            <li><strong>Dueño</strong> Gonzales Jimenez</li>
                            <li><strong>Correo</strong> jhon@gmail.com</li>
                            <li><strong>Precio de Compra</strong> 120.000.000</li>
                            <li><strong>Precio de Venta</strong> 140.000.000</li>
                        </ul>
                    <div className="card-heading">                        
                        {this.imgCar()}
                        <ul className="lista-datos">
                            <li><strong>Placa:</strong> ABC 123</li>
                            <li><strong>Marca:</strong> Toyota</li>
                            <li><strong>Modelo</strong> R4V4</li>
                            <li><strong>Dueño</strong> Gonzales Jimenez</li>
                            <li><strong>Correo</strong> jhon@gmail.com</li>
                            <li><strong>Precio de Compra</strong> 120.000.000</li>
                            <li><strong>Precio de Venta</strong> 140.000.000</li>
                        </ul>
                    </div>                                                
                </div>
            </div>           
        );
    }

    imgCar(){
        return(    
            <>
                <div className="mw-100">
                    <div className="biography">
                        <div className="myphoto">                           
                            <img src={foto}/>
                        </div>
                    </div>
                </div>
            </>           
        );
    }

    searchCar(){
        console.log("Click");
    }
};

export default Precios;