import React, { Component } from 'react'

import Inicio from '../Componentes/Inicio-img'
import BarraNavegacion from '../Componentes/BarraNavegacion'

// ------------------------ Iconos ------------------------------------
import { faSearch, faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// ------------------------ Imagenes ------------------------------------
import foto from '../img/carro.png';



class Propietarios extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Inicio />
                <BarraNavegacion contentPage={this.contentView()} />
            </>
        );
    }

    contentView() {
        return (
            <>
                {this.searchCar()}
                {this.owner1()}
                {this.owner2()}
            </>
        );
    }

    searchCar() {
        return (
            <div className="h-10 fd">
                <div className="d-flex justify-content-center h-100">
                    <div className="searchbar">
                        <input className="search_input" type="text" name="" placeholder="Buscar vehiculo ..." id="buscador" />
                        <a className="search_icon"><i className="fa" onClick={this.botonActualizar}>
                            <FontAwesomeIcon icon={faSearch} />
                        </i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    owner1() {
        return (
            <div className="row py-5 px-6">
                <div className="col-md-6 mx-auto">
                    <div className="bg-white shadow rounded overflow-hidden">
                        <div className="px-4 pt-0 pb-4 cover">
                            <div className="media align-items-start profile-head">
                                <div className="profile mr-3">
                                    <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="..." width="130" className="rounded mb-2 img-thumbnail" />
                                    <h5 className="mb-5">Juan Pablo Millan Holguin</h5>
                                </div>
                                <div className="w-100 text-white">
                                    <h4 className="nombre-antiguo">Anterior Dueño</h4>
                                </div>
                            </div>
                        </div>
                        <div className="bg-light p-4 d-flex justify-content-end text-center">
                            <ul className="list-inline small">
                                <i className="fa text-success list-inline-item">
                                    <FontAwesomeIcon icon={faStar} /></i>
                                <i className="fa text-success list-inline-item">
                                    <FontAwesomeIcon icon={faStar} /></i>
                                <i className="fa text-success list-inline-item">
                                    <FontAwesomeIcon icon={faStar} /></i>
                                <i className="fa text-success list-inline-item">
                                    <FontAwesomeIcon icon={faStar} /></i>
                                <i className="fa text-success list-inline-item">
                                    <FontAwesomeIcon icon={faStarHalfAlt} /></i>
                            </ul>
                        </div>
                        <div className="px-4 py-5">
                            <h5 className="mb-0">Información Personal</h5>
                            <div className="p-4 rounded shadow-sm bg-light">
                                <p className="font-italic mb-0">Nombres: Juan Pablo</p>
                                <p className="font-italic mb-0">Apellidos: Millan Holguin`</p>
                                <p className="font-italic mb-0">Cédula: 1.597.159.654</p>
                                <p className="font-italic mb-0">Correo electrónico: juan@gmail.com</p>
                                <p className="font-italic mb-0">Teléfonos: 3202856356</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    owner2() {
        return (
            <div className="wrapper wrapper--w100">
                <div className="card card-3">
                    <div className="unico card-heading">
                        <div className="mw-100">
                            <div className="biography">
                                <div className="myphoto">
                                    <img src={foto} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-heading">
                        {this.infoBasic()}
                    </div>
                </div>
            </div>
        );
    }

    infoBasic() {
        return (
            <div className="mw-100">
                <div className="biography">
                    <div className="myphoto profile-card-4">
                        <img src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-4.jpg" />
                    </div>
                    <div className="w-100 text-center">
                        <h4 className="nombre-nuevo">Nuevo Dueño</h4>
                    </div>
                    <ul className="lista-datos">
                        <li><strong>Nombres:</strong> John Doe</li>
                        <li><strong>Apellidos:</strong> Gonzales Jimenez</li>
                        <li><strong>Cédula:</strong> 2.158.153</li>
                        <li><strong>Correo eléctronico:</strong> jhon@gmail.com</li>
                        <li><strong>Télefono</strong> 3214569852</li>
                    </ul>
                </div>
            </div>
        );
    }
};

export default Propietarios;