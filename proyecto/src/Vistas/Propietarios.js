import React, { Component } from "react";
import Inicio from "../Componentes/Inicio-img";
import BarraNavegacion from "../Componentes/BarraNavegacion";
import Error from "../Componentes/messageError";
import Axios from "axios";
// ------------------------ JQUERY ------------------------------------
import $, { event } from "jquery";

// ------------------------ Iconos ------------------------------------
import {
  faExclamationTriangle,
  faSearch,
  faStar,
  faStarHalfAlt,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ------------------------ Imagenes ------------------------------------
import foto from "../img/carro.png";

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
        {this.searchBar()}
        {this.errors()}
        {this.owner1()}
        {this.owner2()}
      </>
    );
  }

  errors() {
    return (
      <>
        <div className="other_alert_3 toast">
          <Error
            message={"No se admiten espacios en blanco"}
            name={"other_alert_3"}
            type={"alert-danger"}
            alert_icon={faTimes}
          />
        </div>
        <div className="alerta toast">
          <Error
            message={"No encontramos datos para visualizar"}
            name={"alerta"}
            type={"alert-warning"}
            alert_icon={faExclamationTriangle}
          />
        </div>
      </>
    );
  }

  searchBar() {
    return (
      <>
        <div className="searchbar_1 visible_searchbar">
          <input
            className="search_input"
            type="text"
            name=""
            placeholder="Buscar Vehiculo..."
            id="search_owner"
            autoComplete="off"
          />
          <div className="search_icon" onClick={this.searchOwner}>
            <i className="fa">
              <FontAwesomeIcon icon={faSearch} />
            </i>
          </div>
        </div>
      </>
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
                  <img
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                    alt="..."
                    width="130"
                    className="rounded mb-2 img-thumbnail"
                  />
                  <h5 className="mb-5" id="titulo_nombre">
                    Juan Pablo Millan Holguin
                  </h5>
                </div>
                <div className="w-100 text-white">
                  <h4 className="nombre-antiguo">Anterior Dueño</h4>
                </div>
              </div>
            </div>
            <div className="bg-light p-4 d-flex justify-content-end text-center">
              <ul className="list-inline small">
                <i className="fa text-success list-inline-item">
                  <FontAwesomeIcon icon={faStar} />
                </i>
                <i className="fa text-success list-inline-item">
                  <FontAwesomeIcon icon={faStar} />
                </i>
                <i className="fa text-success list-inline-item">
                  <FontAwesomeIcon icon={faStar} />
                </i>
                <i className="fa text-success list-inline-item">
                  <FontAwesomeIcon icon={faStar} />
                </i>
                <i className="fa text-success list-inline-item">
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </i>
              </ul>
            </div>
            <div className="px-4 py-5">
              <h5 className="mb-0">Información Personal</h5>
              <div className="p-4 rounded shadow-sm bg-light">
                <p className="font-italic mb-0" id="nombres">
                  Nombres: Juan Pablo
                </p>
                <p className="font-italic mb-0" id="apellidos">
                  Apellidos: Millan Holguin`
                </p>
                <p className="font-italic mb-0" id="cedula">
                  Cédula: 1.597.159.654
                </p>
                <p className="font-italic mb-0" id="correo">
                  Correo electrónico: juan@gmail.com
                </p>
                <p className="font-italic mb-0" id="telefono">
                  Teléfonos: 3202856356
                </p>
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
                  <img src={foto} id="img_vehicle" alt="Vehiculo Registrado" className="img-responsive owner" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-heading">{this.infoBasic()}</div>
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
            <li>
              <strong>Nombres: </strong>
              <p className="datos_owner2" id="n_nombres">
                John Doe
              </p>
            </li>
            <li>
              <strong>Apellidos: </strong>{" "}
              <p className="datos_owner2" id="n_apellidos">
                Gonzales Jimenez
              </p>
            </li>
            <li>
              <strong>Cédula: </strong>{" "}
              <p className="datos_owner2" id="n_cedula">
                2.158.153
              </p>
            </li>
            <li>
              <strong>Correo eléctronico: </strong>{" "}
              <p className="datos_owner2" id="n_correo">
                jhon@gmail.com
              </p>
            </li>
            <li>
              <strong>Télefono</strong>{" "}
              <p className="datos_owner2" id="n_telefono">
                3214569852
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  // ------------------------------------------------- FUNCIONES --------------------------------------
  searchOwner = (event) => {
    event.preventDefault();
    let dato = $("#search_owner").val();
    if (dato !== "") {
      this.getVehicle(dato);
    } else {
      $(".other_alert_3.toast").toast({
        delay: 3000,
        autohide: true,
      });
      $(".other_alert_3.toast").toast("show");
    }
    $("#search_owner").val("");
  };

  // ------------------------------------------------- BACKEND --------------------------------------
  getVehicle(placa) {
    Axios({
      url: "http://localhost:5000/www/vehicles/" + placa,
    })
      .then((answer) => {
        if (answer.data.message === "Correcto") {
          let vehicle = answer.data.vehicles;
          console.log(vehicle);
          this.getOwners(vehicle.placa);
          $('#img_vehicle').attr('src', vehicle.img)        
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        $(".alerta.toast").toast({
          delay: 3000,
          autohide: true,
        });
        $(".alerta.toast").toast("show");
      });
  }

  getOwners(placa) {
    Axios({
      url: "http://localhost:5000/www/owners/" + placa,
    })
      .then((answer) => {
        console.log(answer.data);        
        if (answer.data.message === "Correcto") {
          let owner1 = answer.data.vehicles[0];
          let owner2 = answer.data.vehicles[1];

          // Owner 1
          $("#titulo_nombre").text(owner1.nombres + " " + owner1.apellidos);
          $("#nombres").text("Nombres: " + owner1.nombres);
          $("#apellidos").text("Apellidos: " + owner1.apellidos);
          $("#cedula").text("Cedula: " + owner1.cedula);
          $("#correo").text("Correo: " + owner1.correo);
          $("#telefono").text("Teléfono: " + owner1.telefono);

          // Owner 2
          $("#n_nombres").text(owner2.nombres);
          $("#n_apellidos").text(owner2.apellidos);
          $("#n_cedula").text(owner2.cedula);
          $("#n_correo").text(owner2.correo);
          $("#n_telefono").text(owner2.telefono);
        } else if (answer.data.message === "Correcto Sin nuevo propietario") {
          let owner1 = answer.data.vehicles[0];
          // Owner 1
          $("#titulo_nombre").text(owner1.nombres + " " + owner1.apellidos);
          $("#nombres").text("Nombres: " + owner1.nombres);
          $("#apellidos").text("Apellidos: " + owner1.apellidos);
          $("#cedula").text("Cedula: " + owner1.cedula);
          $("#correo").text("Correo: " + owner1.correo);
          $("#telefono").text("Teléfono: " + owner1.telefono);

          // Owner 2
          $("#n_nombres").text("No aplica");
          $("#n_apellidos").text("No aplica");
          $("#n_cedula").text("No aplica");
          $("#n_correo").text("No aplica");
          $("#n_telefono").text("No aplica");
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }
}

export default Propietarios;
