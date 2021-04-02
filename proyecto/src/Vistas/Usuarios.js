import React, { Component } from 'react'
import Inicio from '../Componentes/Inicio-img'
import BarraNavegacion from '../Componentes/BarraNavegacion'

// ------------------------ Iconos ------------------------------------
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import foto from '../img/myphoto.jpg';

class UsuariosClientes extends Component{
    constructor(props){
        super();        
    }        

    render(){
        return (
            <div>
                <Inicio />
                <BarraNavegacion contentPage={this.contentView()} />  
            </div>    
        );
    }

    contentView(){
        return(            
            <>
                {this.searchYSelector()}
                {this.formCRUD()}
            </>
        );
    }

    searchYSelector() {
        return( 
            <div className="h-10 fd">
                <div className="d-flex justify-content-center h-100">
                    <div className="searchbar">
                        <input className="search_input" type="text" name="" placeholder="Buscar..." id="buscador"/>
                            <a href="#" className="search_icon"><i className="fa" onClick={this.buttonSearch}>
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
    
    formCRUD(){        
        return(
            <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
                <div className="wrapper wrapper--w780">
                    <div className="card card-3">
                        <div className="card-heading">
                            {this.basicInfo()}
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
                                    <p className="input--style-3">Tipo del personal</p>
                                    <div className="d-flex justify-content-around w-100">
                                        <label className="radio inline">
                                            <input type="radio" name="opcion" value="empleado" defaultChecked/>
                                            <span> Empleado </span>
                                        </label>
                                        <label className="radio inline">
                                            <input type="radio" name="opcion" value="cliente" />
                                            <span> Cliente </span>
                                        </label>
                                        <label className="radio">
                                            <input type="radio" name="opcion" value="usuario" />
                                            <span> Usuario para el aplicativo </span>
                                        </label>
                                    </div>                                
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

    basicInfo(){
        return(            
            <div>
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

    buttonSearch(){
        console.log("Hola");                
    }
    
};

export default UsuariosClientes;