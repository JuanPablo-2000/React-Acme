import React, { Component } from "react";
import Inicio from "../Componentes/Inicio-img";
import BarraNavegacion from "../Componentes/BarraNavegacion";
import Error from "../Componentes/messageError";

import Axios from "axios";

// ------------------------ JQUERY ------------------------------------
import $, { event } from "jquery";
// ------------------------ Iconos ------------------------------------
import {
  faPlusSquare,
  faSearch,
  faUserEdit,
  faUserTimes,
  faExclamationTriangle,
  faCheckCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import foto from "../img/myphoto.jpg";

class UsuariosClientes extends Component {
  constructor(props) {
    super();
    this.state = {
      messageError: "",
      showError: false,
      showNotify: false,
    };
    this.allCheck = this.allCheck.bind(this);
    this.buttonSearch = this.buttonSearch.bind(this);
    this.eventDelete = this.eventDelete.bind(this);
    this.searchUpdate = this.searchUpdate.bind(this);
  }

  render() {
    return (
      <div>
        <Inicio />
        <BarraNavegacion contentPage={this.contentView()} />
      </div>
    );
  }

  contentView() {
    return (
      <>
        {this.messageAlert()}
        <div className="alerta">
          <Error
            message={"No encontramos datos para visualizar"}
            name={"alerta"}
            type={"alert-warning"}
            alert_icon={faExclamationTriangle}
          />
        </div>
        <div className="other_alert">
          <Error
            message={"No se admiten espacios en blanco"}
            name={"other_alert"}
            type={"alert-danger"}
            alert_icon={faTimes}
          />
        </div>
        <div className="other_alert_1">
          <Error
            message={"Por favor completa el campo de la Cedula"}
            name={"other_alert_1"}
            type={"alert-warning"}
            alert_icon={faExclamationTriangle}
          />
        </div>
        <div className="other_alert_2">
          <Error
            message={"Se ha elimando Correctamente"}
            name={"other_alert_2"}
            type={"alert-success"}
            alert_icon={faCheckCircle}
          />
        </div>
        {this.searchYSelector()}
        {this.tableView()}
        {this.formCRUD()}
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
                placeholder="Buscar...(Cedula)"
                id="buscador"
              />
              <div className="search_icon" onClick={this.buttonSearch}>
                <i className="fa">
                  <FontAwesomeIcon icon={faSearch} />
                </i>
              </div>
            </div>
            <div className="chequeo-posicion">
              <input type="checkbox" id="_checkbox" onChange={this.allCheck} />
              <label htmlFor="_checkbox" className="chequeo">
                <div id="tick_mark"></div>
              </label>
            </div>
            <p className="todos-p">Mostrar todos</p>
          </div>
        </div>
      </>
    );
  }

  tableView() {
    return (
      <>
        <div className="table-responsive tabla_usuarios">
          <table className="table usuarios_contenido">
            <thead className="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Cedula</th>
                <th scope="col">Nombres</th>
                <th scope="col">Apellidos</th>
                <th scope="col">Correo</th>
                <th scope="col">Teléfono</th>
                <th scope="col">Usuario</th>
                <th scope="col">Contraseña</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </>
    );
  }

  formCRUD() {
    return (
      <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
        <div className="wrapper wrapper--w780">
          <div className="card card-3">
            <div className="card-heading">{this.basicInfo()}</div>
            <div className="card-body">
              {this.selectOperation()}
              {this.searchBar()}
              {/* Error por campo vacio al intentar de buscar */}
              <div className="other_alert_3">
                <Error
                  message={"No se admiten espacios en blanco"}
                  name={"other_alert_3"}
                  type={"alert-danger"}
                  alert_icon={faTimes}
                />
              </div>
              {/* Cedula incorrecta */}
              <div className="other_alert_4">
                <Error
                  message={"No encontramos datos para visualizar"}
                  name={"other_alert_4"}
                  type={"alert-warning"}
                  alert_icon={faTimes}
                />
              </div>
              <br></br>
              <h2 className="titulo-crud">Clientes y Personal activo </h2>
              <form
                onSubmit={this.createUser}
                className="form_create"
                noValidate
              >
                <div className="input-group">
                  <input
                    className="input--style-3"
                    type="text"
                    placeholder="Nombre"
                    name="nombre"
                    autoComplete="off"
                    required
                    id="nombres"
                  />
                  <div className="invalid-tooltip invalid_nombres">
                    Por favor completa este campo
                  </div>
                </div>
                <div className="input-group">
                  <input
                    className="input--style-3"
                    type="text"
                    placeholder="Apellido"
                    name="apellido"
                    autoComplete="off"
                    required
                    id="apellidos"
                  />
                  <div className="invalid-tooltip invalid_apellidos">
                    Por favor completa este campo
                  </div>
                </div>
                <div className="input-group">
                  <input
                    className="input--style-3"
                    type="number"
                    max="999999999999"
                    placeholder="Cedula"
                    name="cedula"
                    autoComplete="off"
                    required
                    id="cedula"
                  />
                  <div className="invalid-tooltip invalid_cedula">
                    Por favor completa este campo (max 12 digitos)
                  </div>
                </div>
                <div className="input-group">
                  <input
                    className="input--style-3"
                    type="email"
                    placeholder="Correo electrónico"
                    name="email"
                    autoComplete="off"
                    required
                    id="correo"
                  />
                  <div className="invalid-tooltip invalid_correo">
                    Por favor completa este campo correctamente
                  </div>
                </div>
                <div className="input-group">
                  <input
                    className="input--style-3"
                    type="number"
                    max="9999999999"
                    placeholder="Teléfono"
                    name="telefono"
                    autoComplete="off"
                    required
                    id="telefono"
                  />
                  <div className="invalid-tooltip invalid_telefono">
                    Por favor completa este campo (max 10 digitos)
                  </div>
                </div>
                <div className="input-group">
                  <svg className="filter" version="1.1">
                    <defs>
                      <filter id="gooeyness">
                        <feGaussianBlur
                          in="SourceGraphic"
                          stdDeviation="8"
                          result="blur"
                        />
                        <feColorMatrix
                          in="blur"
                          mode="matrix"
                          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
                          result="gooey"
                        />
                        <feComposite
                          in="SourceGraphic"
                          in2="gooey"
                          operator="atop"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <div className="radios-boxes">
                    <div className="radios">
                      <input
                        type="radio"
                        name="usuarios"
                        id="usuario1"
                        className="radio"
                        value="Empleado"
                      />
                      <input
                        type="radio"
                        name="usuarios"
                        id="usuario2"
                        className="radio"
                        value="Cliente"
                      />
                      <input
                        type="radio"
                        name="usuarios"
                        id="usuario3"
                        className="radio"
                        value="Aplicativo"
                      />
                      <div className="ball"></div>
                    </div>
                    <div className="labels">
                      <label htmlFor="usuario1" className="tipo_empleado">
                        Empleado
                      </label>
                      <label htmlFor="usuario2" className="tipo_empleado">
                        Cliente
                      </label>
                      <label htmlFor="usuario3" className="tipo_empleado">
                        Usuario para aplicativo
                      </label>
                    </div>
                  </div>
                </div>
                <div className="input-group input_only">
                  <input type="radio" name="aux" id="aux_radio" required />
                  <div className="invalid-tooltip radio_incompleto invalid_tipo">
                    Por favor elige el tipo de personal
                  </div>
                </div>
                <div className="input-group div_usuario">
                  <input
                    className="input--style-3"
                    type="text"
                    placeholder="Usuario"
                    name="usuario"
                    autoComplete="off"
                    required
                    id="usuario"
                  />
                  <div className="invalid-tooltip invalid_usuario">
                    Por favor completa este campo
                  </div>
                </div>
                <div className="input-group div_pass">
                  <input
                    className="input--style-3"
                    type="password"
                    pattern=".{8,12}"
                    placeholder="Contraseña"
                    name="telefono"
                    autoComplete="off"
                    required
                    title="8 a 12 caracteres"
                    id="contrasenia"
                  />
                  <div className="invalid-tooltip invalid_contrasenia">
                    Por favor completa este campo (8 - 15 caracteres)
                  </div>
                </div>
                <div className="enviarPeticion">
                  <input
                    id="boton_dinamico"
                    className="btn btn--pill btn--green align-center"
                    type="submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* NOTIFICACION DE ERROR O EXITO */}
        <Error
          notify={true}
          body={"En ahora buena !"}
          header="Transaccion Exitosa"
          id="myToast"
          alert_icon={faCheckCircle}
        />
        <Error
          notify={true}
          header={"Error !"}
          body="La cedula ya esta registrada, intenta con una diferente"
          id="myToast_error"
          alert_icon={faTimes}
        />
        <Error
          notify={true}
          header={"Error !"}
          body="Verifica nuevamente la informacion para actualizacion"
          id="myToast_error_1"
          alert_icon={faTimes}
        />
      </div>
    );
  }

  basicInfo() {
    return (
      <div>
        <div className="biography">
          <div className="myphoto">
            <img src={foto} alt="Perfil" className="perfil" />
          </div>
          <ul className="lista-datos">
            <li id="dato_creado">
              <strong>Nombres:</strong> John Doe
            </li>
            <li>
              <strong>Apellidos:</strong> Gonzales Jimenez
            </li>
            <li>
              <strong>Cédula:</strong> 2.158.153
            </li>
            <li>
              <strong>Correo eléctronico:</strong> jhon@gmail.com
            </li>
            <li>
              <strong>Télefono</strong> 3214569852
            </li>
            <li>
              <strong>Usuario</strong> ----------
            </li>
            <li>
              <strong>Contraseña</strong> ########
            </li>
          </ul>
        </div>
      </div>
    );
  }

  selectOperation() {
    return (
      <>
        <div className="radio-tile-group">
          <div className="input-container">
            <input
              id="crear"
              className="radio-button"
              type="radio"
              name="operacion"
              value="Crear"
            />
            <div className="radio-tile">
              <div className="icon">
                <FontAwesomeIcon icon={faPlusSquare} />
              </div>
              <label htmlFor="crear" className="radio-tile-label">
                Crear
              </label>
            </div>
          </div>

          <div className="input-container">
            <input
              id="actualizar"
              className="radio-button"
              type="radio"
              name="operacion"
              value="Actualizar"
            />
            <div className="radio-tile">
              <div className="icon">
                <FontAwesomeIcon icon={faUserEdit} />
              </div>
              <label htmlFor="actualizar" className="radio-tile-label">
                Actualizar
              </label>
            </div>
          </div>
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
    // Cuando se renderize por completo la vista
    /* Agrego eventos de los radio input, en especial para la seleccion del tipo de usuario */
    let radios = document.querySelectorAll(".radio");
    let labels = document.querySelectorAll(".tipo_empleado");
    let ball = document.querySelector(".ball");
    let prevRadio, prevLabel;
    //console.log("Opciones de usuario:", radios);
    radios.forEach((radio, index) => {
      radio.addEventListener("click", function (e) {
        if (prevRadio) prevRadio.classList.toggle("active");
        if (prevLabel) prevLabel.classList.toggle("active");
        radio.classList.toggle("active");
        prevRadio = radio;
        labels[index].classList.toggle("active");
        prevLabel = labels[index];
        ball.className = `ball pos${index}`;
      });
    });

    /* Evento change de los inputs de las operaciones del CRUD */
    $("input[type=radio][name=operacion]").change(function () {
      let dato = $("input[type=radio][name=operacion]:checked").val();
      console.log(dato);
      if (dato === "Actualizar" || dato === "Eliminar") {
        $("#boton_dinamico").prop("disabled", true);
        $(".form_create input").prop("disabled", true);
        $(".searchbar_1").show("slow");
        if (dato === "Actualizar") $("#boton_dinamico").val("Actualizar");
        else $("#boton_dinamico").val("Eliminar");
      } else if (dato === "Crear") {
        $(".form_create input").prop("disabled", false);
        $("#cedula").prop("disabled", false);
        $(".searchbar_1").hide("slow");
        $("#boton_dinamico").val("Crear");
      }
    });

    /*  Parte de la validacion de formulario */
    $("#nombres").on("input", () => {
      if ($("#nombres").val() !== "") $(".invalid_nombres").hide("slow");
      else $(".invalid_nombres").show("slow");
    });

    $("#apellidos").on("input", () => {
      if ($("#apellidos").val() !== "") $(".invalid_apellidos").hide("slow");
      else $(".invalid_apellidos").show("slow");
    });

    $("#cedula").on("input", () => {
      if ($("#cedula").val() !== "") $(".invalid_cedula").hide("slow");
      else $(".invalid_cedula").show("slow");
    });

    $("#correo").on("input", () => {
      if ($("#correo").val() !== "") $(".invalid_correo").hide("slow");
      else $(".invalid_correo").show("slow");
    });

    $("#telefono").on("input", () => {
      if ($("#telefono").val() !== "") $(".invalid_telefono").hide("slow");
      else $(".invalid_telefono").show("slow");
    });

    $("#usuario").on("input", () => {
      if ($("#usuario").val() !== "") $(".invalid_usuario").hide("slow");
      else $(".invalid_usuario").show("slow");
    });

    $("#contrasenia").on("input", () => {
      if ($("#contrasenia").val() !== "")
        $(".invalid_contrasenia").hide("slow");
      else $(".invalid_contrasenia").show("slow");
    });

    $("#aux_radio").on("change", () => {
      if ($("#aux_radio").is(":checked")) $(".invalid_tipo").hide("slow");
      else $(".invalid_tipo").show("slow");
    });

    /* Evento change de los inputs de los tipos de persona */
    $("input[type=radio][name=usuarios]").on("change", function () {
      let dato = $("input[type=radio][name=usuarios]:checked").val();
      //console.log(dato);

      if (dato === "Aplicativo") {
        $(".div_usuario").show("slow");
        $(".div_pass").show("slow");
        $("#usuario").val("");
        $("#contrasenia").val("");
      } else {
        $(".div_usuario").hide("slow");
        $(".div_pass").hide("slow");
        $("#usuario").val("-");
        $("#contrasenia").val("--------");
      }

      // Parte del manejo especial de las personas
      $(".radio_incompleto").css({ display: "none" });
      $("#aux_radio").prop("checked", true);
    });

    /* Manejo especial de eleccion de persona ya que el uso normal no me lo permitio */
    $("#aux_radio").css({ display: "none" });
    $(".radio_incompleto").css({ "margin-top": "-25px" });
    $(".input_only").css({ "border-bottom": "none" });
  }

  allCheck() {
    // Si habilita la opcion de mostrar todos
    this.setState({
      showError: false,
    });
    let check = $("#_checkbox").is(":checked");
    if (check) {
      let id = $("#buscador").val();
      if (id === "") {
        this.getAllUser();
      } else {
        //console.log(id);
      }
    } else {
      $(".alerta").hide("slow");
      $(".other_alert").hide("slow");
      $(".other_alert_1").hide("slow");
      $(".other_alert_2").hide("slow");
      $(".tabla_usuarios").hide("slow");
    }
  }

  buttonSearch() {
    $("#_checkbox").prop("checked", false);
    let id_search = $("#buscador").val();
    if (id_search !== "") {
      if (id_search.includes(" ")) {
        $(".other_alert").show("slow");
        $(".other_alert_1").hide("slow");
        $(".other_alert_2").hide("slow");
        $(".alerta").hide("slow");
      } else {
        this.setState({
          // Reinicio para en luego permitir evaluar si requiere el mensaje
          showError: false,
        });
        this.getUser();
      }
    } else {
      this.setState({
        messageError: "Campo vacio",
        showError: true,
      });
      $(".other_alert").hide("slow");
      $(".alerta").hide("slow");
      $(".other_alert_2").hide("slow");
      $(".other_alert_1").show("slow");
    }
    $("#buscador").val(""); // Limpio el buscador
  }

  messageAlert() {
    if (this.state.showError) {
      //console.log("Activo #", this.state.messageError);
      if (
        this.state.messageError === "Hubo problemas con la capa del backend" ||
        this.state.messageError === "No encontramos datos para visualizar"
      ) {
        $(".alerta").show("slow");
        console.log("1");
      } else if (this.state.messageError === "Espacios") {
        $(".other_alert").show("slow");
        console.log("2");
      } else if (this.state.messageError === "Campo vacio") {
        $(".other_alert_1").show("slow");
        console.log("3");
      } else if (this.state.messageError === "Correcto - Eliminar") {
        console.log("Eliminaer");
        $(".other_alert_2").show("slow");
      } else if (this.state.messageError === "Campo vacio #2") {
        $(".other_alert_3").show("slow");
        console.log("5");
      } else if (
        this.state.messageError === "No encontramos datos para visualizar #2"
      ) {
        $(".other_alert_4").show("slow");
        console.log("6");
      }
    } else {
      console.log("Inactivo");
      $(".alerta").hide("slow");
      $(".other_alert").hide("slow");
      $(".other_alert_1").hide("slow");
      $(".other_alert_2").hide("slow");
      $(".other_alert_3").hide("slow");
      $(".other_alert_4").hide("slow");
    }
  }

  eventDelete() {
    let remove_ced = "";
    $(".accionEliminar")
      .on("click", function (event) {
        remove_ced = $(this).closest("tr").find(".cedula_id").text();
      })
      .on("click", (event) => {
        event.preventDefault();
        if (remove_ced !== "") {
          this.deleteUser(remove_ced);
        }
      });
  }

  createUser = (event) => {
    event.preventDefault();
    this.validade_input();
  };

  searchUpdate() {
    let id_cedula = $("#update").val();
    if (id_cedula === "") {
      $(".other_alert_4").hide("slow");
      this.setState({
        showError: true,
        messageError: "Campo vacio #2",
      });
    } else {
      $(".other_alert_3").hide("slow");
      $(".other_alert_4").hide("slow");
      this.getUserForm();
    }
    $("#update").val("");
  }

  cleanFields() {
    $("#cedula").val(" ");
    $("#nombres").val(" ");
    $("#apellidos").val(" ");
    $("#correo").val(" ");
    $("#telefono").val(" ");
    $("#usuario").val(" ");
    $("#contrasenia").val(" ");
  }

  validade_input() {
    let isValidate = true;
    if ($("#nombres").val() === "") {
      // Campo nombres
      isValidate = false;
      $(".invalid_nombres").show("slow");
    }
    if ($("#apellidos").val() === "") {
      // Campo apellidos
      isValidate = false;
      $(".invalid_apellidos").show("slow");
    }
    if ($("#cedula").val() === "") {
      // Campo cedula
      isValidate = false;
      $(".invalid_cedula").show("slow");
    } else if ($("#cedula").val() <= 0 || $("#cedula").val().length > 12) {
      isValidate = false;
      $(".invalid_cedula").show("slow");
    }
    if ($("#correo").val() === "") {
      // Campo correo
      isValidate = false;
      $(".invalid_correo").show("slow");
    } else {
      let pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
      if (!pattern.test($("#correo").val())) {
        isValidate = false;
        $(".invalid_correo").show("slow");
      }
    }
    if ($("#telefono").val() === "") {
      // Campo telefono
      isValidate = false;
      $(".invalid_telefono").show("slow");
    } else if ($("#telefono").val() <= 0 || $("#telefono").val().length > 10) {
      isValidate = false;
      $(".invalid_telefono").show("slow");
    }
    if (!$("#aux_radio").is(":checked")) {
      // Campo tipo de persona
      isValidate = false;
      $(".invalid_tipo").show("slow");
    }
    if ($("input[type=radio][name=usuarios]:checked").val() === "Aplicativo") {
      if ($("#usuario").val() === "") {
        // Campo usuario
        isValidate = false;
        $(".invalid_usuario").show("slow");
      }
      if ($("#contrasenia").val() === "") {
        // Campo contrasenia
        isValidate = false;
        $(".invalid_contrasenia").show("slow");
      } else if (
        $("#contrasenia").val().length < 8 ||
        $("#contrasenia").val().length > 15
      ) {
        isValidate = false;
        $(".invalid_contrasenia").show("slow");
      }
    }

    if (isValidate) {
      $(".invalid_serial").hide("slow");
      $(".invalid_cedula").hide("slow");
      $(".invalid_placa").hide("slow");
      $(".invalid_precio").hide("slow");
      let dato = $("input[type=radio][name=operacion]:checked").val();
      let person = $("input[type=radio][name=usuarios]:checked").val();
      if (dato === undefined) dato = "Crear";
      console.log("Enviar", dato);
      switch (dato) {
        case "Crear": {                    
          this.postUser(person);
          break;
        }
        case "Actualizar": {          
          this.putUser();
          break;
        }
      }
    }
  }

  // ------------------------------------------------- BACKEND --------------------------------------
  /* Conexiones con el backend */
  getAllUser() {
    Axios({
      url: "http://localhost:5000/www/users",
    })
      .then((answer) => {
        if (answer.data.message === "Correcto") {
          //console.log(answer.data.personas);
          $(".usuarios_contenido > tbody").empty(); // Limpio la tabla
          $.each(answer.data.personas, function (index, elemento) {
            //console.log(elemento);
            /* FILAS de personas */
            if (elemento.activo === 1) {
              let fila =
                "<tr value=dsds>" +
                "<th scope=row>" +
                elemento.id_persona +
                "</th>" +
                "<td class=cedula_id> " +
                elemento.cedula +
                "</td>" +
                "<td> " +
                elemento.nombres +
                "</td>" +
                "<td> " +
                elemento.apellidos +
                "</td>" +
                "<td class=field_large> " +
                elemento.correo +
                "</td>" +
                "<td> " +
                elemento.telefono +
                "</td>";
              if (elemento.nombre_usuario === null) {
                // Para clientes y empleado comun unicamente
                fila +=
                  "<td> " +
                  "No aplica" +
                  "</td>" +
                  "<td> " +
                  "No aplica" +
                  "</td>";
              } else {
                // Para usuarios del aplicativo
                fila +=
                  "<td> " +
                  elemento.nombre_usuario +
                  "</td>" +
                  "<td class=field_large> " +
                  elemento.contrasenia +
                  "</td>";
              }
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
            }
          });
          if ($(".usuarios_contenido tbody").children().length === 0) {
            // Validar si no hubo nada para mostrar
            $(".tabla_usuarios").hide("slow"); // Escondo la tabla
            $(".other_alert_2").hide("slow"); // Escondo el mensaje de haber sido elimando por si la table se vacea haciendo esto
            $("#_checkbox").prop("checked", false);
            this.setState({
              messageError: "No encontramos datos para visualizar",
              showError: true,
            });
          }
          this.eventDelete();
        }
      })
      .catch((error) => {
        console.log("Error", error.response);
        let message = error.response.data.message;
        if (
          message ===
          "500 - Hubo un problema con la conexion, o la consulta a la base de datos"
        ) {
          this.setState({
            messageError: "Hubo problemas con la capa del backend",
            showError: true,
          });
        } else if (message === "404 - Error, No se encontro datos") {
          this.setState({
            messageError: "No encontramos datos para visualizar",
            showError: true,
          });
        }
      });
  }

  getUser() {
    Axios({
      url: "http://localhost:5000/www/users/" + $("#buscador").val(),
    })
      .then((answer) => {
        console.log(answer.data);
        $(".usuarios_contenido > tbody").empty(); // Limpio la tabla
        let user = answer.data.persona;
        if (user.activo === 1) {
          let fila =
            "<tr>" +
            "<th scope=row>" +
            user.id_persona +
            "</th>" +
            '<td data-h="dd" class="cedula_id"> ' +
            user.cedula +
            "</td>" +
            "<td > " +
            user.nombres +
            "</td>" +
            "<td> " +
            user.apellidos +
            "</td>" +
            "<td class=field_large> " +
            user.correo +
            "</td>" +
            "<td> " +
            user.telefono +
            "</td>";

          if (user.nombre_usuario === null) {
            // Para clientes y empleado comun unicamente
            fila +=
              "<td> " + "No aplica" + "</td>" + "<td> " + "No aplica" + "</td>";
          } else {
            // Para usuarios del aplicativo
            fila +=
              "<td> " +
              user.nombre_usuario +
              "</td>" +
              "<td class=field_large> " +
              user.contrasenia +
              "</td>";
          }
          /* Boton para eliminar */
          fila +=
            '<td class="enviarPeticion">' +
            '<button type="button" class="btn btn-danger btn-sm px-4">' +
            '<i class="fas fa-trash"></i>' +
            "</button>" +
            "</td>" +
            "</tr>";

          $(".usuarios_contenido tbody").append(fila);
          $(".tabla_usuarios").show("slow");
        } else {
          $(".tabla_usuarios").hide("slow");
          this.setState({
            messageError: "No encontramos datos para visualizar",
            showError: true,
          });
        }
      })
      .catch((error) => {
        console.log("Error", error.response);
        this.setState({
          messageError: "No encontramos datos para visualizar",
          showError: true,
        });
      });
  }

  getUserForm() {
    Axios({
      url: "http://localhost:5000/www/users/" + $("#update").val(),
    })
      .then((answer) => {
        console.log(answer.data);
        // Desabilito campos para el buen manejo de la informacion
        $("#boton_dinamico").prop("disabled", false);
        $(".form_create input").prop("disabled", false);
        $("#cedula").prop("disabled", true);

        let user = answer.data.persona;
        $("#cedula").val(user.cedula);
        $("#nombres").val(user.nombres);
        $("#apellidos").val(user.apellidos);
        $("#correo").val(user.correo);
        $("#telefono").val(user.telefono);

        if (user.nombre_usuario !== null) {
          /* Manejo especial de los input radio del tipo de persona */
          $("#usuario3").prop("checked", true);
          $("#aux_radio").prop("checked", true);

          $(".div_usuario").show("slow");
          $(".div_pass").show("slow");
          $("#usuario").val(user.nombre_usuario);
          $("#contrasenia").val("*********");
        }
      })
      .catch((error) => {
        console.log("Error", error.response);
        this.setState({
          messageError: "No encontramos datos para visualizar #2",
          showError: true,
        });
      });
  }

  deleteUser(cedula) {
    console.log("escogida", cedula.substring(1, cedula.length));
    let cedula_id = cedula.substring(1, cedula.length);
    console.log(cedula_id);
    Axios({
      method: "DELETE",
      url: "http://localhost:5000/www/users/" + cedula_id,
    })
      .then((answer) => {
        if (answer.data.message === "Correcto") {
          this.setState({
            messageError: "Correcto - Eliminar",
            showError: true,
          });
          $(".usuarios_contenido > tbody").empty(); // Limpio la tabla
          this.getAllUser();
        }
      })
      .catch((error) => {
        //console.log("Error", error.response);
        this.setState({
          messageError: "Y",
          showError: true,
        });
      });
  }

  async postUser(type_person) {
    let data_full;
    if (type_person === "Aplicativo") {
      data_full = {
        cedula: $("#cedula").val(),
        nombres: $("#nombres").val(),
        apellidos: $("#apellidos").val(),
        correo: $("#correo").val(),
        telefono: $("#telefono").val(),
        nombre_usuario: $("#usuario").val(),
        contrasenia: $("#contrasenia").val(),
        type: "persona-aplicativo",
      };
    } else {
      data_full = {
        cedula: $("#cedula").val(),
        nombres: $("#nombres").val(),
        apellidos: $("#apellidos").val(),
        correo: $("#correo").val(),
        telefono: $("#telefono").val(),
        type: "persona-normal",
      };
    }
    await Axios({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      url: "http://localhost:5000/www/users/",
      data: data_full,
    })
      .then((answer) => {
        console.log(answer.data);
        /* Notificacion de creacion */
        $("#myToast").toast({
          delay: 4000,
          autohide: true,
        });
        $("#myToast").toast("show");
        $('.form_create').trigger('reset');
        $("#aux_radio").prop("checked", true);
      })
      .catch((error) => {
        console.log(error.response.data);
        /* Notificacion de error */
        $("#myToast_error").toast({
          delay: 4000,
          autohide: true,
        });
        $("#myToast_error").toast("show");
        $('#cedula').val('');
        $(".invalid_cedula").show("slow");
      });
  }

  putUser() {
    let person = $("input[type=radio][name=usuarios]:checked").val();
    let data = {};
    if (person === "Aplicativo") {
      data = {
        cedula: $("#cedula").val(),
        nombres: $("#nombres").val(),
        apellidos: $("#apellidos").val(),
        correo: $("#correo").val(),
        telefono: $("#telefono").val(),
        nombre_usuario: $("#usuario").val(),
        contrasenia: $("#contrasenia").val(),
        type: "persona-aplicativo",
      };
    } else {
      data = {
        cedula: $("#cedula").val(),
        nombres: $("#nombres").val(),
        apellidos: $("#apellidos").val(),
        correo: $("#correo").val(),
        telefono: $("#telefono").val(),
        type: "persona-normal",
      };
    }
    Axios({
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      url: "http://localhost:5000/www/users/" + $("#cedula").val(),
      data: data,
    })
      .then((answer) => {
        console.log(answer.data);
        $("#myToast").toast({
          delay: 4000,
          autohide: true,
        });
        $("#myToast").toast("show");
        $(".form_create").trigger("reset"); // Limpio el formulario        
        $("#aux_radio").prop("checked", true);
      })
      .catch((error) => {
        console.log(error.response.data);
        $("#myToast_error_1").toast({
          delay: 4000,
          autohide: true,
        });
        $('#cedula').val('');
        $(".invalid_cedula").show("slow");
        $("#myToast_error_1").toast("show");
      });
  }
}

export default UsuariosClientes;
