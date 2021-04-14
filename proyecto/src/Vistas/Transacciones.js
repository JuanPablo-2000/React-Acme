import React, { Component } from "react";
import BarraNavegacion from "../Componentes/BarraNavegacion";
import Inicio from "../Componentes/Inicio-img";
import Error from "../Componentes/messageError";
import Axios from "axios";
// ------------------------ JQUERY ------------------------------------
import $, { event } from "jquery";
import {
  faCheckCircle,
  faExclamationTriangle,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Transactions extends Component {
  constructor(props) {
    super(props);

    const location = this.props.location.pathname;
    let message1 = "",
      message2 = "",
      message3 = "";
    if (location === "/Compra") {
      message1 = "Registro de Compra";
      message2 = "Fecha de Compra";
      message3 = "compra";
    } else if (location === "/Venta") {
      message1 = "Registro de Venta";
      message2 = "Fecha de Venta";
      message3 = "venta";
    }

    this.state = {
      title: message1,
      subtitle: message2,
      type: message3,
    };
  }

  render() {
    return (
      <>
        <Inicio />
        {this.typeView()}
      </>
    );
  }

  typeView() {
    if (this.state.type === "venta") {
      return (
        <>
          <BarraNavegacion contentPage={this.contentViewSale()} />
        </>
      );
    } else {
      return (
        <>
          <BarraNavegacion contentPage={this.contentViewBuy()} />
        </>
      );
    }
  }

  contentViewBuy() {
    return <>{this.register()}</>;
  }

  contentViewSale() {
    return (
      <>
        {this.register()}
        <br />
        <br />
        {this.purchase()}
      </>
    );
  }

  register() {
    return (
      <>
        {this.searchYSelector()}
        <br />
        <br />
        <div className="table-responsive tabla_registros">
          <table className="table registros_contenido">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Serial de {this.state.type} </th>
                <th scope="col">Cedula del cliente</th>
                <th scope="col">Placa del Vehiculo</th>
                <th scope="col">Valor de {this.state.type}</th>
                <th scope="col">Fecha de {this.state.type}</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </>
    );
  }

  searchYSelector() {
    return (
      <>
        {this.errorsSearch()}
        <div className="h-10 fd">
          <div className="d-flex justify-content-center h-100">
            <div className="searchbar">
              <input
                className="search_input"
                type="text"
                name=""
                placeholder={"Buscar...(Serial de " + this.state.type + ")"}
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
                <input type="radio" id="type_1" name="show" value="all" />
                <label htmlFor="type_1">
                  <span id="check">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                      alt="Checked Icon"
                    />
                  </span>
                  Mostrar todos los registros
                </label>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  purchase() {
    return (
      <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
        <div className="wrapper wrapper--w780">
          <div className="card card-3">
            <div className="card-body">
              <h2 className="titulo-crud text-center"> {this.state.title} </h2>
              <form
                onSubmit={this.registerTransactions}
                className="form_transactions"
                noValidate
              >
                <div className="input-group">
                  <input
                    className="input--style-3"
                    type="text"
                    placeholder={"Serial de " + this.state.type}
                    autoComplete="off"
                    id="serial"
                    name="serial"
                    required
                  />
                  <div className="invalid-tooltip invalid_serial">
                    Por favor completa este campo
                  </div>
                </div>
                <div className="input-group">
                  <input
                    className="input--style-3"
                    type="number"
                    min="1"
                    max="999999999999"
                    placeholder="Cédula del cliente"
                    autoComplete="off"
                    id="cedula"
                    required
                  />
                  <div className="invalid-tooltip invalid_cedula">
                    Por favor completa este campo númerico (max 12 digitos)
                  </div>
                </div>
                <div className="input-group">
                  <input
                    className="input--style-3"
                    type="text"
                    placeholder="Placa del vehiculo"
                    autoComplete="off"
                    id="placa"
                    required
                  />
                  <div className="invalid-tooltip invalid_placa">
                    Por favor completa este campo
                  </div>
                </div>
                <div className="input-group">
                  <input
                    className="input--style-3"
                    type="number"
                    min="1"
                    placeholder="Precio"
                    autoComplete="off"
                    id="precio"
                    required
                  />
                  <div className="invalid-tooltip invalid_precio">
                    Por favor completa este campo correctamente
                  </div>
                </div>
                {this.erros()}
                <div className="input-group transaccion">
                  <button
                    className="btn btn--pill btn--green"
                    type="submit"
                    id="register"
                  >
                    Registrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  errorsSearch() {
    return (
      <>
        <div className="other_alert">
          <Error
            message={"No se admiten espacios en blanco"}
            name={"other_alert"}
            type={"alert-danger"}
            alert_icon={faTimes}
          />
        </div>
        <div className="other_alert_4">
          <Error
            message={"No encontramos datos para visualizar"}
            name={"other_alert_4"}
            type={"alert-warning"}
            alert_icon={faExclamationTriangle}
          />
        </div>
        <div className="other_alert_5">
          <Error
            message={"Registro encontrado !!"}
            name={"other_alert_5"}
            type={"alert-success"}
            alert_icon={faCheckCircle}
          />
        </div>
      </>
    );
  }

  erros() {
    return (
      <>
        <div className="other_alert_3 toast">
          <Error
            message={"Ups ! algo salio mal, No se pudo realizar la operacion"}
            name={"other_alert_3"}
            type={"alert-danger"}
            alert_icon={faTimes}
          />
        </div>
        <div className="alerta toast">
          <Error
            message={"Se ha registrado la informacion correctamente"}
            name={"alerta"}
            type={"alert-success"}
            alert_icon={faCheckCircle}
          />
        </div>
        <div className="other_alert_1 toast">
          <Error
            message={
              "Recuerde que la cedula debe coincidir con una cedula registrada anteriormente"
            }
            name={"other_alert_1"}
            type={"alert-danger"}
            alert_icon={faTimes}
          />
        </div>
        <div className="other_alert_2 toast">
          <Error
            message={
              "Recuerde que la placa debe coincidir con una placa registrada anteriormente"
            }
            name={"other_alert_2"}
            type={"alert-danger"}
            alert_icon={faTimes}
          />
        </div>
      </>
    );
  }

  // ------------------------------------------------- FUNCIONES --------------------------------------
  componentDidMount() {
    /*  Parte de la validacion de formulario */
    $("#serial").on("input", () => {
      if ($("#serial").val() !== "") $(".invalid_serial").hide("slow");
      else $(".invalid_serial").show("slow");
    });

    $("#cedula").on("input", () => {
      if ($("#cedula").val() !== "") $(".invalid_cedula").hide("slow");
      else $(".invalid_cedula").show("slow");
    });

    $("#placa").on("input", () => {
      if ($("#placa").val() !== "") $(".invalid_placa").hide("slow");
      else $(".invalid_placa").show("slow");
    });

    $("#precio").on("input", () => {
      if ($("#precio").val() !== "") $(".invalid_precio").hide("slow");
      else $(".invalid_precio").show("slow");
    });

    // Cambios de acuerdo a la operacion que esta realizando
    if (this.state.type === "compra") {
      $("#cedula").prop("disabled", true);
    }

    $("#check").on("click", (event) => {
      event.preventDefault();
      if ($("#type_1").is(":checked")) {
        $(".tabla_registros").hide("slow");
        $(".other_alert_5").hide("slow");
        $(".other_alert_4").hide("slow");
        $(".other_alert").hide("slow");
        $("#type_1").prop("checked", false);
      } else {
        this.getRecord();
        $("#type_1").prop("checked", true);
      }
    });
  }

  validade_input() {
    let isValidate = true;
    if ($("#serial").val() === "") {
      isValidate = false;
      $(".invalid_serial").show("slow");
    }
    if ($("#cedula").val() === "") {
      isValidate = false;
      $(".invalid_cedula").show("slow");
    }
    if ($("#placa").val() === "") {
      isValidate = false;
      $(".invalid_placa").show("slow");
    }
    if ($("#precio").val() === "") {
      isValidate = false;
      $(".invalid_precio").show("slow");
    }
    if (isValidate) {
      $(".invalid_serial").hide("slow");
      $(".invalid_cedula").hide("slow");
      $(".invalid_placa").hide("slow");
      $(".invalid_precio").hide("slow");
      this.postTransactions();
    }
  }

  buttonSearch = (event) => {
    event.preventDefault();
    let dato = $("#buscador").val();
    if (dato !== "") {
      $(".other_alert").hide("slow");
      $(".other_alert_5").hide("slow");
      this.getElementRecord(dato);
    } else {
      $(".other_alert").show("slow");
      $(".other_alert_4").hide("slow");
      $(".other_alert_5").hide("slow");
    }
    $("#buscador").val("");
  };

  registerTransactions = (event) => {
    event.preventDefault();
    this.validade_input();
  };

  errorText() {
    $(".invalid_serial").text("Por favor completa este campo");
    $(".invalid_cedula").text(
      "Por favor completa este campo númerico (max 12 digitos)"
    );
    $(".invalid_placa").text("Por favor completa este campo");
    $(".invalid_precio").text("Por favor completa este campo correctamente");
  }

  // ------------------------------------------------- BACKEND --------------------------------------
  postTransactions() {
    let data = {};
    if (this.state.type === "compra") {
      data = {
        serial_compra: $("#serial").val(),
        cedula: $("#cedula").val(),
        placa_vh: $("#placa").val(),
        valor_compra: $("#precio").val(),
        type: this.state.type + "s",
      };
    } else {
      data = {
        serial_venta: $("#serial").val(),
        cedula: $("#cedula").val(),
        placa_vh: $("#placa").val(),
        valor_venta: $("#precio").val(),
        type: this.state.type + "s",
      };
    }

    Axios({
      method: "POST",
      url: "http://localhost:5000/www/transactions",
      data: data,
    })
      .then((answer) => {
        console.log(answer.data);
        if (answer.data.message === "Correcto") {
          $(".alerta.toast").toast({
            delay: 3000,
            autohide: true,
          });
          $(".alerta.toast").toast("show");
          $(".form_transactions").trigger("reset"); // Limpio el formulario
          this.errorText(); // Restauro los mensajes de error de los input
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        let message_error = error.response.data.message;
        if (
          message_error === "Serial repetido, por favor intenta con uno nuevo"
        ) {
          //  Mensajes de error en los input
          $(".invalid_serial").text(message_error);
          $(".invalid_serial").show("slow");
          $("#serial").val("");

          // Mostrar alerta
          $(".other_alert_3.toast").toast({
            delay: 3000,
            autohide: true,
          });
          $(".other_alert_3.toast").toast("show");
        } else if (
          message_error ===
          "La cedula debe coincidir con una persona registrada"
        ) {
          //  Mensajes de error en los input
          $(".invalid_cedula").text(message_error);
          $(".invalid_cedula").show("slow");
          $("#cedula").val("");

          // Mostrar alerta
          $(".other_alert_1.toast").toast({
            delay: 4000,
            autohide: true,
          });
          $(".other_alert_1.toast").toast("show");
        } else if (
          message_error === "La placa debe coincidir con un vehiculo registrado"
        ) {
          $(".invalid_placa").text(message_error);
          $(".invalid_placa").show("slow");
          $("#placa").val("");

          // Mostrar alerta
          $(".other_alert_2.toast").toast({
            delay: 3000,
            autohide: true,
          });
          $(".other_alert_2.toast").toast("show");
        } else if (
          message_error === "La placa ya se encuentra registrada en las ventas"
        ) {
          $(".invalid_placa").text(message_error);
          $(".invalid_placa").show("slow");
          $("#placa").val("");

          // Mostrar alerta
          $(".other_alert_3.toast").toast({
            delay: 3000,
            autohide: true,
          });
          $(".other_alert_3.toast").toast("show");
        }
      });
  }

  getRecord() {
    Axios({
      url: "http://localhost:5000/www/transactions/" + this.state.type + "s",
    })
      .then((answer) => {
        console.log(answer.data);
        if (answer.data.message === "Correcto") {
          $(".registros_contenido > tbody").empty(); // Limpio la tabla
          if (this.state.type === "compra") {
            $.each(answer.data.records, function (index, elemento) {
              /* FILAS de registros */
              let fila =
                "<tr>" +
                "<th scope=row class=scroll_table>" +
                elemento.serial_compra +
                "</th>" +
                "<td class=scroll_table> " +
                elemento.cedula_cliente +
                "</td>" +
                "<td class=scroll_table> " +
                elemento.placa_vh_compra +
                "</td>" +
                "<td class=scroll_table> " +
                elemento.valor_compra +
                "</td>";

              let convertDate = elemento.fecha_compra.split("-");
              let date =
                convertDate[0] +
                "/" +
                convertDate[1] +
                "/" +
                convertDate[2].substring(0, 2);

              fila += "<td class=scroll_table> " + date + "</td> </tr>";
              $(".registros_contenido tbody").append(fila);
            });
          } else {
            $.each(answer.data.records, function (index, elemento) {
              /* FILAS de registros */
              let fila =
                "<tr>" +
                "<th scope=row class=scroll_table>" +
                elemento.serial_venta +
                "</th>" +
                "<td class=scroll_table> " +
                elemento.propietario_nuevo +
                "</td>" +
                "<td class=scroll_table> " +
                elemento.placa_vh_venta +
                "</td>" +
                "<td class=scroll_table> " +
                elemento.valor_venta +
                "</td>";

              let convertDate = elemento.fecha_venta_efectiva.split("-");
              let date =
                convertDate[0] +
                "/" +
                convertDate[1] +
                "/" +
                convertDate[2].substring(0, 2);

              fila += "<td class=scroll_table> " + date + "</td> </tr>";
              $(".registros_contenido tbody").append(fila);
            });
          }

          $(".tabla_registros").show("slow");

          $(".other_alert").hide("slow");
          $(".other_alert_4").hide("slow");
          $(".other_alert_5").show("slow");
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        let message = error.response.data.message;
        if (message === "Hubo un error con la consulta") {
          $(".other_alert").hide("slow");
          $(".other_alert_4").show("slow");
          $(".other_alert_5").hide("slow");
        } else if (message === "No hay datos para visualizar") {
          $(".other_alert").hide("slow");
          $(".other_alert_4").show("slow");
          $(".other_alert_5").hide("slow");
        }
      });
  }

  getElementRecord(registro) {
    Axios({
      url:
        "http://localhost:5000/www/transactions/" +
        this.state.type +
        "/" +
        registro,
    })
      .then((answer) => {
        console.log(answer.data);
        if (answer.data.message === "Correcto") {
          $(".registros_contenido > tbody").empty(); // Limpio la tabla
          $("#type_1").prop("checked", false);

          let record = answer.data.records;
          $(".other_alert").hide("slow");
          $(".other_alert_4").hide("slow");
          $(".other_alert_5").show("slow");
          let fila, date;
          if (this.state.type === "compra") {
            fila =
              "<tr>" +
              "<th scope=row class=scroll_table>" +
              record.serial_compra +
              "</th>" +
              "<td class=scroll_table> " +
              record.cedula_cliente +
              "</td>" +
              "<td class=scroll_table> " +
              record.placa_vh_compra +
              "</td>" +
              "<td class=scroll_table> " +
              record.valor_compra +
              "</td>";

            let convertDate = record.fecha_compra.split("-");
            date =
              convertDate[0] +
              "/" +
              convertDate[1] +
              "/" +
              convertDate[2].substring(0, 2);
            fila += "<td class=scroll_table> " + date + "</td> </tr>";
          } else {
            fila =
              "<tr>" +
              "<th scope=row class=scroll_table>" +
              record.serial_venta +
              "</th>" +
              "<td class=scroll_table> " +
              record.propietario_nuevo +
              "</td>" +
              "<td class=scroll_table> " +
              record.placa_vh_venta +
              "</td>" +
              "<td class=scroll_table> " +
              record.valor_venta +
              "</td>";

            let convertDate = record.fecha_venta_efectiva.split("-");
            date =
              convertDate[0] +
              "/" +
              convertDate[1] +
              "/" +
              convertDate[2].substring(0, 2);
            fila += "<td class=scroll_table> " + date + "</td> </tr>";
          }

          $(".registros_contenido tbody").append(fila);
          $(".tabla_registros").show("slow");
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        $(".other_alert").hide("slow");
        $(".other_alert_4").show("slow");
      });
  }
}

export default Transactions;
