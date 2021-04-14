import React, { Component } from "react";
import Inicio from "../Componentes/Inicio-img";
import BarraNavegacion from "../Componentes/BarraNavegacion";
import Error from "../Componentes/messageError";
import Axios from "axios";
// ------------------------ JQUERY ------------------------------------
import $, { event } from "jquery";
// ------------------------ Iconos ------------------------------------
import {
  faStar,
  faQuoteLeft,
  faSearch,
  faTimes,
  faExclamationTriangle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ------------------------ Imagenes -----------------------------------
import foto from "../img/Corvette.jpg";

class Publicaciones extends Component {
  constructor(props) {
    super(props);
    this.searchVehicle = this.searchVehicle.bind(this);
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
    return <>{this.publicationDate()}</>;
  }

  publicationDate() {
    return (
      <div>
        {this.searchBar()}
        {this.errors()}
        <div className="row">
          <div className="float-lg-left col-lg-6">
            <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
              <div className="blockquote-custom-icon bg-info shadow-sm">
                <i className="fa text-white">
                  <FontAwesomeIcon icon={faQuoteLeft} />
                </i>
              </div>
              <h4 className="text-center">
                <strong>Fecha de compra</strong>
              </h4>
              <p className="mb-0 mt-2 font-italic" id="fecha_compra">
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
                  <FontAwesomeIcon icon={faQuoteLeft} />
                </i>
              </div>
              <h4 className="text-center">
                <strong>Fecha de venta</strong>
              </h4>
              <p className="mb-0 mt-2 font-italic" id="fecha_venta">
                Fecha: 25/Febrero/2021
              </p>
              <footer className="blockquote-footer pt-4 mt-4 border-top">
                Auto disponible en el concesionario
              </footer>
            </blockquote>
          </div>
          <div className="col-md-6 derecha_fecha_car">
            <h4 className="text-center">
              <strong>Vehiculo</strong>
            </h4>
            <hr />
            <div className="profile-card-4 text-center">
              <img src={foto} className="img-responsive" id="img" />
              <div className="profile-content">
                <div className="profile-name" id="titulo">
                  Corvette
                </div>
                <div className="profile-description">                  
                  <p>
                    Modelo: <strong id="modelo">Corvette</strong>
                  </p>
                  <p>
                    Marca: <strong id="marca">Chevrolet</strong>
                  </p>
                  <p>
                    Placa: <strong id="placa">25DS11</strong>
                  </p>
                </div>
                <ul className="list-inline small">
                  <i className="fa text-dark list-inline-item">
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                  <i className="fa text-dark list-inline-item">
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                  <i className="fa text-dark list-inline-item">
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                  <i className="fa text-dark list-inline-item">
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        <div className="other_alert_2 toast">
          <Error
            message={"Transaccion exitosa !!"}
            name={"other_alert_2"}
            type={"alert-success"}
            alert_icon={faCheckCircle}
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
            placeholder="Buscar..."
            id="search_vehicle"
            autoComplete="off"
          />
          <div className="search_icon" onClick={this.searchVehicle}>
            <i className="fa">
              <FontAwesomeIcon icon={faSearch} />
            </i>
          </div>
        </div>
      </>
    );
  }

  // ------------------------------------------------- FUNCIONES --------------------------------------
  searchVehicle() {
    let dato = $("#search_vehicle").val();
    if (dato !== "") {
      this.getInfoVehicle(dato);
    } else {
      $(".other_alert_3.toast").toast({
        delay: 3000,
        autohide: true,
      });
      $(".other_alert_3.toast").toast("show");
    }
    $("#search_vehicle").val("");
  }

  // ------------------------------------------------- BACKEND --------------------------------------
  getInfoVehicle(placa) {
    Axios({
      url: "http://localhost:5000/www/vehicles/publications/" + placa,
    })
      .then((answer) => {
        console.log(answer.data);
        let vehicle = answer.data.vehicles;

        let convertDate = vehicle.fecha_compra.split("-");
        let date =
          convertDate[0] +
          "/" +
          convertDate[1] +
          "/" +
          convertDate[2].substring(0, 2);

        let date_1 = "No aplica";
        if (vehicle.fecha_venta_efectiva !== null) {
          convertDate = vehicle.fecha_venta_efectiva.split("-");
          date_1 =
            convertDate[0] +
            "/" +
            convertDate[1] +
            "/" +
            convertDate[2].substring(0, 2);
        }

        $("#fecha_venta").text("Fecha: " + date_1);
        $("#fecha_compra").text("Fecha: " + date);

        console.log(vehicle);
        this.getVehicle(vehicle.placa_vh_compra); // Traigo la informacion del vehiculo

        $(".other_alert_2.toast").toast({
          delay: 3000,
          autohide: true,
        });
        $(".other_alert_2.toast").toast("show");
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

  getVehicle(placa) {
    Axios({
      url: "http://localhost:5000/www/vehicles/" + placa,
    })
      .then((answer) => {
        if (answer.data.message === "Correcto") {
          let vehicle = answer.data.vehicles;
          $("#titulo").text(vehicle.modelo);
          $("#modelo").text(vehicle.modelo);
          $("#marca").text(vehicle.marca);
          $("#placa").text(vehicle.placa);
          $("#img").attr("src", vehicle.img);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }
}

export default Publicaciones;
