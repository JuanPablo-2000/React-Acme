import React, { useReducer, useState } from "react";
import { DateRangeInput } from "@datepicker-react/styled";
import { ThemeProvider } from "styled-components";
import Grafica from "../Componentes/Grafica";
import GraficaComparar from "../Componentes/Grafica2";
import Error from '../Componentes/messageError';
import Axios from "axios";
import $ from "jquery";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { es as locale } from "date-fns/locale";


const initialState = {
  startDate: null,
  endDate: null,
  focusedInput: null,
};

let meta = {
  mes: {
    alias: "Mes",
  },
  value: {
    alias: "Registro Total del mes",
  },
};

let meta_1 = {
  mes: {
    alias: "Mes",
  },
  value: {
    alias: "Registros por dia",
  },
};

const meses = {
  "01": "Enero",
  "02": "Febrero",
  "03": "Marzo",
  "04": "Abril",
  "05": "Mayo",
  "06": "Junio",
  "07": "Julio",
  "08": "Agosto",
  "09": "Septiembre",
  10: "Octubre",
  11: "Noviembre",
  12: "Diciembre",
};

let settingData = [
  { mes: "Enero", value: 3 },
  { mes: "Febrero", value: 4 },
  { mes: "Marzo", value: 8 },
  { mes: "Abril", value: 5 },
  { mes: "Mayo", value: 4 },
  { mes: "Junio", value: 6 },
  { mes: "Julio", value: 7 },
  { mes: "Agosto", value: 9 },
  { mes: "Septiembre", value: 13 },
  { mes: "Octubre", value: 13 },
  { mes: "Noviembre", value: 13 },
  { mes: "Diciembre", value: 20 },
];

let settingData_1 = [];

const data1 = [];

function Fechas(props) {
  const [setting, setSetting] = useState(settingData);
  const [setting_1, setSetting_1] = useState(settingData_1);
  const [show, setShow] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <> 
      {messageError()}
      <div className="p-t-10 btn-group text-center graphic_button">
        <button
          className="btn btn--pill btn--green event_request"
          type="button"
          onClick={() => requestGraphic(props)}
        >
          Obtener Gráficas
        </button>
        <button
          className="btn btn--pill btn--green event_request_1"
          type="button"
          onClick={() => clean()}
        >
          Limpiar Gráficas
        </button>
      </div>
      {show ? graphicType(props) : null}
      {inputDate(props)}
      <div className="content_date">
        <p id="start">{convertDate(state.startDate)}</p>
        <p id="end">{convertDate(state.endDate)}</p>
      </div>
    </>
  );

  // ------------------------------------------------- Fechas --------------------------------------
  function inputDate(props) {
    if (props.path !== "comparacion") {
      return (
        <div id="show_input">
          <ThemeProvider
            theme={{
              breakpoints: ["32em", "48em", "64em"],
              reactDatepicker: {
                daySize: [36, 40],
                fontFamily: "system-ui, -apple-system",
                colors: {
                  accessibility: "#D80249",
                  selectedDay: "#f9c766",
                  selectedDayHover: "#F75D95",
                  primaryColor: "#f8b739",
                },
              },
            }}
          >
            <DateRangeInput
              onDatesChange={(data) =>
                dispatch({ type: "dateChange", payload: data })
              }
              onFocusChange={(focusedInput) =>
                dispatch({ type: "focusChange", payload: focusedInput })
              }
              onClose={(e) => closeDate()}
              phrases={{
                datepickerStartDatePlaceholder: "Seleccionar",
                datepickerStartDateLabel: "Fecha de inicio:",
                datepickerEndDatePlaceholder: "Seleccionar",
                datepickerEndDateLabel: "Fecha final:",
                resetDates: "Deshacer",
                startDateAriaLabel: "Fecha de inicio",
                endDateAriaLabel: "Fecha final",
                startDatePlaceholder: "Fecha de inicio",
                endDatePlaceholder: "Fecha de inicio",
                close: "Cerrar",
              }}
              startDate={state.startDate} // Date or null
              endDate={state.endDate} // Date or null
              focusedInput={state.focusedInput} // START_DATE, END_DATE or null
            />
          </ThemeProvider>
        </div>
      );
    }
  }
  // ------------------------------------------------- Graficas --------------------------------------
  function graphicType(props) {
    if (props.path === "comparacion") {
      return <GraficaComparar setting={data1} />;
    } else {
      return (
        <>
          <Grafica setting={setting} meta={meta} />
          <h2 className="section-title separator"></h2>
          <Grafica setting={setting_1} meta={meta_1} />
        </>
      );
    }
  }

  function messageError() {
    return (
      <>
        <div className="other_alert_3">
          <Error
            message={"Para poder generar la gráfica debes de escoger un rango de fechas"}
            name={"other_alert_3"}
            type={"alert-danger"}
            alert_icon={faTimes}
          />
        </div>
      </>
    );
  }
  // ------------------------------------------------- Funciones --------------------------------------
  function closeDate() {
    console.log("Cerrado");
  }

  function reducer(state, action) {
    switch (action.type) {
      case "focusChange":
        return { ...state, focusedInput: action.payload };
      case "dateChange":
        return action.payload;
      default:
        throw new Error();
    }
  }

  function clean() {
    window.location.reload(false);
  }

  async function requestGraphic(props) {
    let start = $("#start").text();
    let end = $("#end").text();    
    if (start !== "1970-01-01" && end !== "1970-01-01") {      
      $('.other_alert_3').hide('slow');
      await getInfoMonth(props.path); // Total por meses
      // await getDateGraphic(props.path); // Las dos graficas en una mes y dias
      await getDateEspecifi(props.path); // Total por dias
      //console.log("Termino aqui", settingData);
      setSetting(settingData);
      setSetting_1(settingData_1);
      setShow(!show);
      $(".graficas").show("slow");
      $(".event_request_1").show("fast");
      $(".event_request").hide("fast");
      $("#show_input").hide("slow");
    } else {
      if (props.path === "comparacion") {
        await getAllMonth();
        setShow(!show);
      } else {
        $('.other_alert_3').show('slow');
        console.log("Invalido");
      }
    }
  }

  function convertDate(date) {
    let aux = new Date(date);
    let convert = JSON.stringify(aux);
    convert = convert.slice(1, 11);
    return convert;
  }

  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  // ------------------------------------------------- BACKEND --------------------------------------
  async function getInfoMonth(path) {
    let monthStart = parseInt($("#start").text().substring(5, 7));
    let monthEnd = parseInt($("#end").text().substring(5, 7));
    const settingMonth = [];
    for (let index = monthStart; index <= monthEnd; index++) {
      let sum;
      try {
        let aux = await Axios({
          url: "http://localhost:5000/www/histories/" + path + "/" + index,
        });
        if (aux.status === 200) {
          if (aux.data.message === "Correcto") {
            if (index < 10) {
              settingMonth.push({
                mes: meses["0" + index],
                value: aux.data.info[0].cont,
              });
            } else {
              settingMonth.push({
                mes: meses[index],
                value: aux.data.info[0].cont,
              });
            }
          } else {
            if (index < 10) {
              settingMonth.push({
                mes: meses["0" + index],
                value: 0,
              });
            } else {
              settingMonth.push({
                mes: meses[index],
                value: 0,
              });
            }
          }
        }
      } catch (error) {
        if (index < 10) {
          settingMonth.push({ mes: meses["0" + index], value: 0 });
        } else {
          settingMonth.push({ mes: meses[index], value: 0 });
        }
      }
      settingData = settingMonth;
    }
  }

  async function getDateGraphic(path) {
    await Axios({
      method: "POST",
      url: "http://localhost:5000/www/histories/" + path,
      data: {
        fecha_inicio: $("#start").text(),
        fecha_fin: $("#end").text(),
      },
    })
      .then((answer) => {
        console.log("Dias", answer.data.info);
        if (answer.data.message === "Correcto") {
          $.each(answer.data.info, function (index, elemento) {
            let aux = convertDate(elemento.fecha).substring(5, 7);
            const month = (mes) => mes.mes === meses[aux];
            let position = settingData.findIndex(month);
            //console.log("Posicion:", settingData.findIndex(month));
            //console.log(aux, meses[aux]);
            settingData.splice(position + 1, 0, {
              mes: convertDate(elemento.fecha),
              value: elemento.cont,
            });
          });
        }
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }

  async function getDateEspecifi(path) {
    await Axios({
      method: "POST",
      url: "http://localhost:5000/www/histories/" + path,
      data: {
        fecha_inicio: $("#start").text(),
        fecha_fin: $("#end").text(),
      },
    })
      .then((answer) => {
        //console.log("Dias", answer.data.info);
        if (answer.data.message === "Correcto") {
          $.each(answer.data.info, function (index, elemento) {
            let aux = convertDate(elemento.fecha).substring(5, 7);
            //console.log(meses[aux], elemento.cont);
            settingData_1.push({
              mes: convertDate(elemento.fecha),
              value: elemento.cont,
            });
          });
        }
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }

  async function getAllMonth() {
    for (let index = 1; index <= 12; index++) {
      await Axios({
        // Compras
        url: "http://localhost:5000/www/histories/compra" + "/" + index,
      })
        .then(async (answer) => {
          if (answer.data.message === "Correcto") {
            if (index < 10) {
              data1.push({
                date: meses["0" + index],
                type: "Compras",
                value: answer.data.info[0].cont,
              });
              await getAllMonthVenta(index);
            } else {
              // Meses del 10 en adelante
              data1.push({
                date: meses[index],
                type: "Compras",
                value: answer.data.info[0].cont,
              });
              await getAllMonthVenta(index);
            }
          } else {
            // Cero en el mes
            if (index < 10) {
              data1.push({
                date: meses["0" + index],
                type: "Compras",
                value: 0,
              });
              await getAllMonthVenta(index);
            } else {
              // Meses del 10 en adelante en cero
              data1.push({
                date: meses[index],
                type: "Compras",
                value: 0,
              });
              await getAllMonthVenta(index);
            }
          }
        })
        .catch((error) => {
          console.log("Error Axios externo", error);
        });
    }
  }

  async function getAllMonthVenta(index) {
    await Axios({
      // Ventas
      url: "http://localhost:5000/www/histories/venta" + "/" + index,
    })
      .then((answer1) => {
        if (answer1.data.message === "Correcto") {
          if (index < 10) {
            data1.push({
              date: meses["0" + index],
              type: "Ventas",
              value: answer1.data.info[0].cont,
            });
          } else {
            // Meses del 10 en adelante
            data1.push({
              date: meses[index],
              type: "Ventas",
              value: answer1.data.info[0].cont,
            });
          }
        } else {
          // Cero en el mes
          if (index < 10) {
            data1.push({
              date: meses["0" + index],
              type: "Ventas",
              value: 0,
            });
          } else {
            // Meses del 10 en adelante en cero
            data1.push({
              date: meses[index],
              type: "Ventas",
              value: 0,
            });
          }
        }
      })
      .catch((error1) => {
        console.log("Error Axios interno", error1);
      });
  }
}
export default Fechas;
