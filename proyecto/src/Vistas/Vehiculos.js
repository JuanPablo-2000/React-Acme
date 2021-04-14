import React, { Component } from "react";
import BarraNavegacion from "../Componentes/BarraNavegacion";
import Inicio from "../Componentes/Inicio-img";
import Axios from "axios";
import Error from "../Componentes/messageError";
// ------------------------ JQUERY ------------------------------------
import $, { event } from "jquery";

import {
  faCheckCircle,
  faExclamationTriangle,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Vehiculos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placa_update: "",
      serial_antiguo: "",
    };

    this.buttonSearch = this.buttonSearch.bind(this);
    this.searchUpdate = this.searchUpdate.bind(this);
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
        {this.errors()}
        {this.searchYSelector()}
        {this.tableView()}
        <br />
        <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
          <div className="wrapper wrapper--w780">
            <div className="card card-3">
              <div className="card-body">
                <h2 className="titulo-crud text-center">
                  {" "}
                  Registro de Vehículos{" "}
                </h2>
                {this.optionRequest()}
                {this.searchBar()}
                <form
                  onSubmit={this.backendRequest}
                  className="form_vehiculo"
                  noValidate
                >
                  <div className="input-group">
                    <input
                      className="input--style-3"
                      type="text"
                      placeholder="Placa"
                      name="placa"
                      id="placa"
                      autoComplete="off"
                      required
                    />
                    <div className="invalid-tooltip error_placa">
                      Por favor completa este campo
                    </div>
                  </div>
                  <div className="input-group">
                    <input
                      className="input--style-3"
                      type="number"
                      max="999999999999"
                      placeholder="Cedula del propietario"
                      name="cedula"
                      id="cedula"
                      autoComplete="off"
                      required
                    />
                    <div className="invalid-tooltip error_cedula">
                      Por favor completa este campo
                    </div>
                  </div>
                  <div className="input-group">
                    <input
                      className="input--style-3"
                      type="text"
                      placeholder="Modelo"
                      name="modelo"
                      id="modelo"
                      autoComplete="off"
                      required
                    />
                    <div className="invalid-tooltip invalid_modelo">
                      Por favor completa este campo
                    </div>
                  </div>
                  <div className="input-group">
                    <input
                      className="input--style-3"
                      type="text"
                      placeholder="Marca"
                      name="marca"
                      id="marca"
                      autoComplete="off"
                      required
                    />
                    <div className="invalid-tooltip invalid_marca">
                      Por favor completa este campo
                    </div>
                  </div>
                  <div className="input-group">
                    <div className="custom-radios">
                      <div>
                        <input
                          type="radio"
                          id="procedencia"
                          name="procedencia"
                        />
                        <label htmlFor="procedencia">
                          <span id="check">
                            <img
                              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                              alt="Checked Icon"
                            />
                          </span>
                          Procedecia de terceros
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="input-group">
                    <div className="custom-radios">
                      <div>
                        <input type="radio" id="stock" name="stock" />
                        <label htmlFor="stock">
                          <span id="check_1">
                            <img
                              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                              alt="Checked Icon"
                            />
                          </span>
                          Disponible
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="input-group">
                    <input
                      className="input--style-3"
                      type="url"
                      placeholder="Url de Imagen"
                      name="img"
                      id="img"
                      autoComplete="off"
                      required
                    />
                    <div className="invalid-tooltip invalid_img">
                      Por favor completa este campo
                    </div>
                  </div>
                  <div className="input-group">
                    <input
                      className="input--style-3"
                      type="text"
                      placeholder="Serial de compra"
                      autoComplete="off"
                      id="serial"
                      required
                    />
                    <div className="invalid-tooltip error_serial">
                      Por favor completa este campo
                    </div>
                  </div>
                  <div className="input-group">
                    <input
                      className="input--style-3"
                      type="number"
                      min="1"
                      placeholder="Precio de compra"
                      id="valor_compra"
                      autoComplete="off"
                      required
                    />
                    <div className="invalid-tooltip invalid_precio">
                      Por favor completa este campo
                    </div>
                  </div>
                  <div className="input-group peticion_vehiculos">
                    <button
                      className="btn btn--pill btn--green "
                      type="submit"
                      id="boton_dinamico"
                    >
                      Crear
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  errors() {
    return (
      <>
        <Error
          notify={true}
          body={"No encontramos datos para visualizar !"}
          header="Accion inesperada"
          id="myToast"
          alert_icon={faExclamationTriangle}
        />
        <Error
          notify={true}
          body={"No se pudo realizar la operacion !"}
          header="Ups, algo salio mal !"
          id="myToast_error"
          alert_icon={faTimes}
        />
        <Error
          notify={true}
          body={"Transaccion Exitosa !"}
          header="En ahora buena !"
          id="myToast_success"
          alert_icon={faCheckCircle}
        />
        <Error
          notify={true}
          body={"No se admiten campos vacios !"}
          header="Ups, algo salio mal !"
          id="myToast_1"
          alert_icon={faExclamationTriangle}
        />
        <Error
          notify={true}
          body={"Placa ya existente !"}
          header="Ups, algo salio mal !"
          id="myToast_error_2"
          alert_icon={faTimes}
        />
        <Error
          notify={true}
          body={"Recuerde que el usuario debe ya estar registrado !"}
          header="Ups, algo salio mal !"
          id="myToast_error_3"
          alert_icon={faExclamationTriangle}
        />
      </>
    );
  }
  searchYSelector() {
    return (
      <>
        <div className="h-10 fd">
          <div className="d-flex justify-content-center h-100">
            <div className="searchbar">
              <input
                className="search_input"
                type="text"
                name=""
                placeholder="Buscar...(Placa)"
                id="buscador"
              />
              <div className="search_icon" onClick={this.buttonSearch}>
                <i className="fa">
                  <FontAwesomeIcon icon={faSearch} />
                </i>
              </div>
            </div>
            <div className="custom-radios radios_vehiculos">
              <div>
                <input type="radio" id="type_1" name="procede" value="all" />
                <label htmlFor="type_1">
                  <span>
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                      alt="Checked Icon"
                    />
                  </span>
                  Mostrar todos
                </label>
              </div>
              <div className="separate_radio">
                <input
                  type="radio"
                  id="type_2"
                  name="procede"
                  value="onlyStock"
                />
                <label htmlFor="type_2">
                  <span>
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                      alt="Checked Icon"
                    />
                  </span>
                  En stock
                </label>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  optionRequest() {
    return (
      <>
        <div className="custom-radios radios_vehiculos">
          <div>
            <input
              type="radio"
              id="type_b1"
              name="type_button"
              value="Crear"
              defaultChecked
            />
            <label htmlFor="type_b1">
              <span>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                  alt="Checked Icon"
                />
              </span>
              Crear
            </label>
          </div>
          <div className="separate_radio">
            <input
              type="radio"
              id="type_b2"
              name="type_button"
              value="Actualizar"
            />
            <label htmlFor="type_b2">
              <span>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                  alt="Checked Icon"
                />
              </span>
              Actualizar
            </label>
          </div>
        </div>
      </>
    );
  }

  tableView() {
    return (
      <>
        <br />
        <div className="table-responsive tabla_usuarios">
          <table className="table usuarios_contenido">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Placa</th>
                <th scope="col">Cedula propietario</th>
                <th scope="col">Modelo</th>
                <th scope="col">Marca</th>
                <th scope="col">Procedencia</th>
                <th scope="col">Stock</th>
                <th scope="col">Imagen</th>
                <th scope="col">Fecha de publicación</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </>
    );
  }

  searchBar() {
    return (
      <>
        <div className="searchbar_1">
          <input
            className="search_input"
            type="text"
            name=""
            placeholder="Buscar..."
            id="update"
            autoComplete="off"
          />
          <div className="search_icon" onClick={this.searchUpdate}>
            <i className="fa">
              <FontAwesomeIcon icon={faSearch} />
            </i>
          </div>
        </div>
      </>
    );
  }

  // ------------------------------------------------- FUNCIONES --------------------------------------
  componentDidMount() {
    /*  Parte de la validacion de formulario */
    $("#placa").on("input", () => {
      if ($("#placa").val() !== "") $(".error_placa").hide("slow");
      else $(".error_placa").show("slow");
    });

    $("#cedula").on("input", () => {
      if ($("#cedula").val() !== "") $(".error_cedula").hide("slow");
      else $(".error_cedula").show("slow");
    });

    $("#marca").on("input", () => {
      if ($("#marca").val() !== "") $(".invalid_marca").hide("slow");
      else $(".invalid_marca").show("slow");
    });

    $("#modelo").on("input", () => {
      if ($("#modelo").val() !== "") $(".invalid_modelo").hide("slow");
      else $(".invalid_modelo").show("slow");
    });

    $("#img").on("input", () => {
      if ($("#img").val() !== "") $(".invalid_img").hide("slow");
      else $(".invalid_img").show("slow");
    });

    $("#serial").on("input", () => {
      if ($("#serial").val() !== "") $(".error_serial").hide("slow");
      else $(".error_serial").show("slow");
    });

    $("#valor_compra").on("input", () => {
      if ($("#valor_compra").val() !== "") $(".invalid_precio").hide("slow");
      else $(".invalid_precio").show("slow");
    });

    $("myToast").css({ "margin-top": "0px" });

    $("input[type=radio][name=procede]").on("change", (event) => {
      let dato = $("input[type=radio][name=procede]:checked").val();
      event.preventDefault();
      if (dato === "all") {
        this.getAllVehicles();
      } else if (dato === "onlyStock") {
        this.getVehicleStock();
      }
    });

    $("input[type=radio][name=type_button]").on("change", (event) => {
      let dato = $("input[type=radio][name=type_button]:checked").val();
      event.preventDefault();
      if (dato === "Crear") {
        $("#boton_dinamico").text("Crear");
        $("#boton_dinamico").prop("disabled", false);
        $(".form_vehiculo input").prop("disabled", false);
        $(".searchbar_1").hide("slow");
      } else if (dato === "Actualizar") {
        $("#boton_dinamico").text("Actualizar");
        $(".form_vehiculo input").prop("disabled", true);
        $("#boton_dinamico").prop("disabled", true);
        $(".searchbar_1").show("slow");
      }
    });

    $("#check").on("click", (event) => {
      event.preventDefault();
      if ($("#procedencia").is(":checked")) {
        $("#procedencia").prop("checked", false);
      } else {
        $("#procedencia").prop("checked", true);
      }
    });
    $("#check_1").on("click", (event) => {
      event.preventDefault();
      if ($("#stock").is(":checked")) {
        $("#stock").prop("checked", false);
      } else {
        $("#stock").prop("checked", true);
      }
    });
  }

  buttonSearch() {
    let placa = $("#buscador").val();
    if (placa !== "") {
      this.getVehicle(placa);
    } else {
      $("#myToast_1").css({
        "margin-top": "30px",
        "z-index": "1",
      });
      $("#myToast_1").toast({
        delay: 3000,
        autohide: true,
      });
      $("#myToast_1").toast("show");
    }
    $("#buscador").val("");
  }

  eventRemove() {
    let remove_placa = "";
    $(".accionEliminar")
      .on("click", function (event) {
        remove_placa = $(this).closest("tr").find(".placa_id").text();
      })
      .on("click", (event) => {
        event.preventDefault();
        if (remove_placa !== "") {
          console.log("Eliminar", remove_placa);
          this.deleteVehicle(remove_placa);
        }
      });
  }

  backendRequest = (event) => {
    event.preventDefault();
    this.validade_input();
  };

  searchUpdate() {
    let placa = $("#update").val();
    if (placa !== "") {
      // Dato por el momento valido
      this.getVehicleForm(placa);
    } else {
      $("#update").val("");
      // Buscador vacio
      $("#myToast_1").css({
        "margin-top": "25%",
        "z-index": "1",
      });
      $("#myToast_1").toast({
        delay: 3000,
        autohide: true,
      });
      $("#myToast_1").toast("show");
    }
    $("#update").val("");
  }

  isUrlValid(url) {
    let validate = /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
    return validate.test(url);
  }

  quitCheck() {
    $("#type_1").prop("checked", false);
    $("#type_2").prop("checked", false);
  }

  errorText() {
    $(".error_serial").text("Por favor completa este campo");
    $(".error_cedula").text("Por favor completa este campo");
    $(".error_placa").text("Por favor completa este campo");
  }

  validade_input() {
    let isValidate = true;
    if ($("#placa").val() === "") {
      isValidate = false;
      $(".error_placa").show("slow");
    }
    if ($("#cedula").val() === "") {
      isValidate = false;
      $(".error_cedula").show("slow");
    } else if ($("#cedula").val() <= 0 || $("#cedula").val().length > 12) {
      isValidate = false;
      $("#cedula").val('');
      $(".error_cedula").show("slow");
    }
    if ($("#modelo").val() === "") {
      isValidate = false;
      $(".invalid_modelo").show("slow");
    }
    if ($("#marca").val() === "") {
      isValidate = false;
      $(".invalid_marca").show("slow");
    }
    if ($("#img").val() === "") {
      isValidate = false;
      $(".invalid_img").show("slow");
    } else if (!this.isUrlValid($("#img").val())) {
      $("#img").val('');
      isValidate = false;
      $(".invalid_img").show("slow");
    }
    if ($("#serial").val() === "") {
      isValidate = false;
      $(".error_serial").show("slow");
    }
    if ($("#valor_compra").val() === "") {
      isValidate = false;
      $(".invalid_precio").show("slow");
    } else if ($("#valor_compra").val() <= 0) {
      isValidate = false;
      $("#valor_compra").val('');
      $(".invalid_precio").show("slow");
    }

    if (isValidate) {      
      if ($("#boton_dinamico").text() === "Crear") {
        this.postVehicle();
      } else {
        this.updateVehicle();
      }
    }
  }

  // ------------------------------------------------- BACKEND --------------------------------------
  getAllVehicles() {
    Axios({
      url: "http://localhost:5000/www/vehicles",
    })
      .then((answer) => {
        if (answer.data.message === "Correcto") {
          $(".usuarios_contenido > tbody").empty(); // Limpio la tabla
          //console.log(answer.data.vehicles);
          $.each(answer.data.vehicles, function (index, elemento) {
            let convertDate = elemento.fecha_para_venta.split("-");
            let date =
              convertDate[0] +
              "-" +
              convertDate[1] +
              "-" +
              convertDate[2].substring(0, 2);
            //console.log(date);
            let fila =
              "<tr>" +
              "<th scope=row class='placa_id scroll_table'>" +
              elemento.placa +
              "</th>" +
              "<td class=scroll_table> " +
              elemento.cedula_propietario +
              "</td>" +
              "<td class=scroll_table> " +
              elemento.modelo +
              "</td>" +
              "<td class=scroll_table> " +
              elemento.marca +
              "</td>" +
              "<td class=scroll_table>" +
              elemento.procedencia +
              "</td>" +
              "<td class=scroll_table> " +
              elemento.stock +
              "</td>" +
              "<td class=scroll_table> " +
              "<a href=" +
              elemento.img +
              " target=_blank> Imagen </a>" +
              "</td>" +
              "<td class=scroll_table> " +
              date +
              "</td>";
            fila +=
              '<td class="enviarPeticion">' +
              '<button type="button" class="btn btn-danger btn-sm px-4 accionEliminar">' +
              '<i class="fas fa-trash"></i>' +
              "</button>" +
              "</td>" +
              "</tr>";
            $(".usuarios_contenido tbody").append(fila);
          });

          $(".tabla_usuarios").show("slow");
          this.eventRemove();
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        this.quitCheck();
        $(".tabla_usuarios").hide("slow");
        $("#myToast").css({
          "margin-top": "30px",
          "z-index": "1",
        });
        $("#myToast").toast({
          delay: 3000,
          autohide: true,
        });
        $("#myToast").toast("show");
      });
  }

  getVehicleStock() {
    Axios({
      url: "http://localhost:5000/www/vehiclesStock",
    })
      .then((answer) => {
        if (answer.data.message === "Correcto") {
          $(".usuarios_contenido > tbody").empty(); // Limpio la tabla
          $.each(answer.data.vehicles, function (index, elemento) {
            let convertDate = elemento.fecha_para_venta.split("-");
            let date =
              convertDate[0] +
              "-" +
              convertDate[1] +
              "-" +
              convertDate[2].substring(0, 2);
            let fila =
              "<tr>" +
              "<th scope=row class='placa_id scroll_table'>" +
              elemento.placa +
              "</th>" +
              "<td class=scroll_table> " +
              elemento.cedula_propietario +
              "</td>" +
              "<td class=scroll_table> " +
              elemento.modelo +
              "</td>" +
              "<td class=scroll_table> " +
              elemento.marca +
              "</td>" +
              "<td class=scroll_table> " +
              elemento.procedencia +
              "</td>" +
              "<td class=scroll_table> " +
              elemento.stock +
              "</td>" +
              "<td class=scroll_table> " +
              "<a href=" +
              elemento.img +
              " target=_blank> Imagen </a>" +
              "</td>" +
              "<td class=scroll_table> " +
              date +
              "</td>";
            /* Boton para eliminar */
            fila +=
              '<td class="enviarPeticion">' +
              '<button type="button" class="btn btn-danger btn-sm px-4 accionEliminar">' +
              '<i class="fas fa-trash"></i>' +
              "</button>" +
              "</td>" +
              "</tr>";
            $(".usuarios_contenido tbody").append(fila);
          });

          $(".tabla_usuarios").show("slow");
          this.eventRemove();
        }
      })
      .catch((error) => {
        this.quitCheck();
        $(".tabla_usuarios").hide("slow");
        $("#myToast").css({
          "margin-top": "30px",
          "z-index": "1",
        });
        $("#myToast").toast({
          delay: 3000,
          autohide: true,
        });
        $("#myToast").toast("show");
      });
  }

  getVehicle(placa) {
    Axios({
      url: "http://localhost:5000/www/vehicles/" + placa,
    })
      .then((answer) => {
        if (answer.data.message === "Correcto") {
          $(".usuarios_contenido > tbody").empty(); // Limpio la tabla
          let vehicle = answer.data.vehicles;
          let convertDate = vehicle.fecha_para_venta.split("-");
          let date =
            convertDate[0] +
            "-" +
            convertDate[1] +
            "-" +
            convertDate[2].substring(0, 2);
          let fila =
            "<tr>" +
            "<th scope=row class='placa_id scroll_table'>" +
            vehicle.placa +
            "</th>" +
            "<td class=scroll_table> " +
            vehicle.cedula_propietario +
            "</td>" +
            "<td class=scroll_table> " +
            vehicle.modelo +
            "</td>" +
            "<td class=scroll_table> " +
            vehicle.marca +
            "</td>" +
            "<td class=scroll_table> " +
            vehicle.procedencia +
            "</td>" +
            "<td class=scroll_table> " +
            vehicle.stock +
            "</td>" +
            "<td class=scroll_table> " +
            "<a href=" +
            vehicle.img +
            " target=_blank> Imagen </a>" +
            "</td>" +
            "<td class=scroll_table> " +
            date +
            "</td>";
          /* Boton para eliminar */
          fila +=
            '<td class="enviarPeticion">' +
            '<button type="button" class="btn btn-danger btn-sm px-4 accionEliminar">' +
            '<i class="fas fa-trash"></i>' +
            "</button>" +
            "</td>" +
            "</tr>";
          $(".usuarios_contenido tbody").append(fila);

          $(".tabla_usuarios").show("slow");
          this.eventRemove();
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        this.quitCheck();
        $(".tabla_usuarios").hide("slow");
        $("#myToast").css({
          "margin-top": "30px",
          "z-index": "1",
        });
        $("#myToast").toast({
          delay: 3000,
          autohide: true,
        });
        $("#myToast").toast("show");
      });
  }

  getVehicleForm(placa) {    
    Axios({
      url: "http://localhost:5000/www/vehicles/" + placa,
    })
      .then((answer) => {
        if (answer.data.message === "Correcto") {
          $("#boton_dinamico").prop("disabled", false);
          $(".form_vehiculo input").prop("disabled", false);
          let vehicle = answer.data.vehicles;
          let convertDate = vehicle.fecha_para_venta.split("-");
          let date =
            convertDate[0] +
            "-" +
            convertDate[1] +
            "-" +
            convertDate[2].substring(0, 2);
          console.log(vehicle, date);
          $("#placa").val(vehicle.placa);
          $("#cedula").val(vehicle.cedula_propietario);
          $("#modelo").val(vehicle.modelo);
          $("#marca").val(vehicle.marca);
          if (vehicle.procedencia === "Terceros") {
            $("#procedencia").prop("checked", true);
          } else {
            $("#procedencia").prop("checked", false);
          }
          if (vehicle.stock === 0) {
            $("#stock").prop(":checked", false);
          } else {
            $("#stock").prop(":checked", true);
          }
          $("#img").val(vehicle.img);
          $("#serial").val(vehicle.serial_compra);
          $("#valor_compra").val(vehicle.valor_compra);

          this.setState({
            placa_update: placa,
            serial_antiguo: vehicle.serial_compra,
          });
        }
      })
      .catch((error) => {
        $(".form_vehiculo").trigger("reset"); // Limpio el formulario        
        console.log(error.response.data);
        let message = error.response.data.message;
        if (message === "Es necesario que la cedula corresponda a un ciente") {
          $("#myToast_error_3").css({
            "margin-top": "68%",
            "z-index": "1",
          });
          $("#myToast_error_3").toast({
            delay: 3000,
            autohide: true,
          });
          $("#myToast_error_3").toast("show");
        } else {
          $("#myToast").css({
            "margin-top": "60%",
            "z-index": "1",
          });
          $("#myToast").toast({
            delay: 3000,
            autohide: true,
          });
          $("#myToast").toast("show");
        }
      });
  }

  deleteVehicle(placa) {
    //console.log("escogida", placa.substring(1, placa.length));
    let id_placa = placa.substring(1, placa.length);
    console.log(placa);
    Axios({
      method: "DELETE",
      url: "http://localhost:5000/www/vehicles/" + placa,
    })
      .then((answer) => {
        if (answer.data.message === "Correcto") {
          $("#myToast_success").css({
            "margin-top": "30px",
            "z-index": "1",
          });
          $("#myToast_success").toast({
            delay: 3000,
            autohide: true,
          });
          $("#myToast_success").toast("show");
          if ($(".usuarios_contenido tbody").children().length === 0) {
            console.log("Vacio el tbody");
            $(".tabla_usuarios").hide("slow");
            this.quitCheck();
          } else {
            this.getAllVehicles();
          }
        }
      })
      .catch((error) => {
        //console.log("Error", error.response);
        console.log(error.response.data);
        $("#myToast_error").css({
          "margin-top": "30px",
          "z-index": "1",
        });
        $("#myToast_error").toast({
          delay: 3000,
          autohide: true,
        });
        $("#myToast_error").toast("show");
      });
  }

  postVehicle() {
    let data = {};
    if ($("#procedencia").is(":checked")) {
      data = {
        placa: $("#placa").val(),
        cedula_propietario: $("#cedula").val(),
        modelo: $("#modelo").val(),
        marca: $("#marca").val(),
        procedencia: "Terceros",
        stock: $("#stock").is(":checked"),
        valor_compra: $("#valor_compra").val(),
        serial: $("#serial").val(),
        img: $("#img").val(),
      };
    } else {
      data = {
        placa: $("#placa").val(),
        cedula_propietario: $("#cedula").val(),
        modelo: $("#modelo").val(),
        marca: $("#marca").val(),
        procedencia: "Propios",
        stock: $("#stock").is(":checked"),
        valor_compra: $("#valor_compra").val(),
        serial: $("#serial").val(),
        img: $("#img").val(),
      };
    }

    console.log(data);
    Axios({
      method: "POST",
      url: "http://localhost:5000/www/vehicles",
      data: data,
    })
      .then((answer) => {
        if (answer.data.message === "Correcto") {
          this.getAllVehicles();
          $("#myToast_success").css({
            "margin-top": "60%",
            "z-index": "1",
          });
          $("#myToast_success").toast({
            delay: 3000,
            autohide: true,
          });
          $("#myToast_success").toast("show");
          
          this.errorText();
          $(".form_vehiculo").trigger("reset"); // Limpio el formulario        
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        let message = error.response.data.message;
        if (message === "Es necesario que la cedula corresponda a un ciente") {
          $("#cedula").val("");
          $(".error_cedula").text(message);          
          $(".error_cedula").show('slow');
        } else if (message === "El serial ya esta registrado") {
          $("#serial").val("");
          $(".error_serial").text(message + ", por favor intenta con otro");          
          $(".error_serial").show('slow');
        } else if (message === "La placa ya esta registrada") {
          $("#placa").val("");
          $(".error_placa").text(message + ", por favor intenta con otra");          
          $(".error_placa").show('slow');
        } else {
          $("#myToast_error_2").css({
            "margin-top": "60%",
            "z-index": "1",
          });
          $("#myToast_error_2").toast({
            delay: 3000,
            autohide: true,
          });
          $("#myToast_error_2").toast("show");
        }
      });
  }

  updateVehicle() {
    let data = {};
    if ($("#procedencia").is(":checked")) {
      data = {
        placa: $("#placa").val(),
        cedula_propietario: $("#cedula").val(),
        modelo: $("#modelo").val(),
        marca: $("#marca").val(),
        procedencia: "Terceros",
        stock: $("#stock").is(":checked"),
        img: $("#img").val(),
        valor_compra: $("#valor_compra").val(),
        serial: $("#serial").val(),
        serial_antiguo: this.state.serial_antiguo,
      };
    } else {
      data = {
        placa: $("#placa").val(),
        cedula_propietario: $("#cedula").val(),
        modelo: $("#modelo").val(),
        marca: $("#marca").val(),
        procedencia: "Propios",
        stock: $("#stock").is(":checked"),
        img: $("#img").val(),
        valor_compra: $("#valor_compra").val(),
        serial: $("#serial").val(),
        serial_antiguo: this.state.serial_antiguo,
      };
    }

    Axios({
      method: "PUT",
      url: "http://localhost:5000/www/vehicles/" + this.state.placa_update,
      data: data,
    })
      .then((answer) => {
        if (answer.data.message === "Correcto") {
          $("#myToast_success").css({
            "margin-top": "60%",
            "z-index": "1",
          });
          $("#myToast_success").toast({
            delay: 3000,
            autohide: true,
          });
          $("#myToast_success").toast("show");

          this.errorText();
          $(".form_vehiculo input").prop("disabled", true);
          $("#type_b2").prop("checked", false);
          $("#boton_dinamico").prop("disabled", true);
          $(".searchbar_1").hide("slow");
          $(".form_vehiculo").trigger("reset"); // Limpio el formulario        
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        let message = error.response.data.message;
        if (message === "Es necesario que la cedula corresponda a un ciente") {
          $("#cedula").val("");
          $(".error_cedula").show('slow');
          $(".error_cedula").text(message);          
        } else if (
          message === "La placa ya está registrada, por favor intenta con otra"
        ) {
          $("#placa").val("");
          $(".error_placa").text(message);          
          $(".error_placa").val("");
        } else if (
          message === "El serial ya está registrado, intenta con otro"
        ) {
          $(".error_serial").text(message);
          $("#serial").val("");
        } else {
          $("#myToast_error_2").css({
            "margin-top": "60%",
            "z-index": "1",
          });
          $("#myToast_error_2").toast({
            delay: 3000,
            autohide: true,
          });
          $("#myToast_error_2").toast("show");
        }
      });
  }
}

export default Vehiculos;
