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
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ------------------------ Imagenes ------------------------------------
import foto from "../img/carro.png";

class Precios extends Component {
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
        {this.searchText()}
        {this.erros()}
        <br />
        {this.contentInfo()}
      </>
    );
  }

  erros() {
    return (
      <>
        <br />
        <br />
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

  searchText() {
    return (
      <div className="h-10 fd">
        <div className="d-flex justify-content-center h-100">
          <div className="searchbar">
            <input
              className="search_input"
              type="text"
              name=""
              placeholder="Buscar vehiculo ..."
              id="buscador"
            />
            <a className="search_icon" onClick={this.searchVehicle}>
              <i className="fa">
                <FontAwesomeIcon icon={faSearch} />
              </i>
            </a>
          </div>
        </div>
      </div>
    );
  }

  contentInfo() {
    return (
      <div className="wrapper wrapper--w100">
        <div className="card card-3">
          <ul className="lista-datos">
            <li>
              <strong>Placa: </strong>
              <p className="datos_owner2" id="placa">
                ABC 123
              </p>
            </li>
            <li>
              <strong>Marca:: </strong>
              <p className="datos_owner2" id="marca">
                Toyota
              </p>
            </li>
            <li>
              <strong>Modelo: </strong>
              <p className="datos_owner2" id="modelo">
                R4V4
              </p>
            </li>
            {/*<li>
              <strong>Dueño: </strong><p className="datos_owner2" id="duenio">Gonzales Jimenez</p> 
            </li>*/}
            <li>
              <strong>Correo: </strong>
              <p className="datos_owner2" id="correo">
                jhon@gmail.com
              </p>
            </li>
            <li>
              <strong>Procedencia: </strong>
              <p className="datos_owner2" id="procedencia">
                Propio
              </p>
            </li>
            <li>
              <strong>Disponible </strong>
              <p className="datos_owner2" id="stock">
                SI
              </p>
            </li>
            <li>
              <strong>Precio de Compra: </strong>
              <p className="datos_owner2" id="precio_compra">
                120.000.000
              </p>
            </li>
            <li>
              <strong>Precio de Venta: </strong>
              <p className="datos_owner2" id="precio_venta">
                140.000.000
              </p>
            </li>
          </ul>
          <div className="card-heading">
            {this.imgCar()}
            {/* <ul className="lista-datos">
              <li>
                <strong>Placa:</strong> ABC 123
              </li>
              <li>
                <strong>Marca:</strong> Toyota
              </li>
              <li>
                <strong>Modelo</strong> R4V4
              </li>
              <li>
                <strong>Dueño</strong> Gonzales Jimenez
              </li>
              <li>
                <strong>Correo</strong> jhon@gmail.com
              </li>
              <li>
                <strong>Precio de Compra</strong> 120.000.000
              </li>
              <li>
                <strong>Precio de Venta</strong> 140.000.000
              </li>
            </ul>*/}
          </div>
        </div>
      </div>
    );
  }

  imgCar() {
    return (
      <>
        <div className="mw-100">
          <div className="biography">
            <div className="myphoto">
              <img src={foto} className="img_price img-responsive" id="img" />
            </div>
          </div>
        </div>
      </>
    );
  }

  // ------------------------------------------------- FUNCIONES --------------------------------------
  searchVehicle = (event) => {
    event.preventDefault();
    let dato = $("#buscador").val();
    if (dato !== "") {
      this.getVehicle(dato);
    } else {
      $(".other_alert_3.toast").toast({
        delay: 3000,
        autohide: true,
      });
      $(".other_alert_3.toast").toast("show");
    }
    $("#buscador").val("");
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
          $("#placa").text(vehicle.placa);
          $("#marca").text(vehicle.marca);
          $("#modelo").text(vehicle.modelo);
          $("#correo").text(vehicle.correo);
          $("#procedencia").text(vehicle.procedencia);
          if(vehicle.stock === 1) {
            $("#stock").text("SI");
          }else {
            $("#stock").text("NO");
          }
          $("#img").attr("src", vehicle.img);
          this.getInfoVehicle(vehicle.placa);          
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

  async getInfoVehicle(placa) {
    await Axios({
      url: "http://localhost:5000/www/vehicles/price/" + placa,
    })
      .then((answer) => {
        console.log(answer.data);
        let vehicle = answer.data.vehicles;
        $("#precio_compra").text(vehicle.valor_compra);
        $("#precio_venta").text(vehicle.valor_venta);        
      })
      .catch((error) => {
        console.log(error.response.data);                
      });
  }
}

export default Precios;
