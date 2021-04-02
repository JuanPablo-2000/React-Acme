import React, { useReducer} from "react";
import { DateRangeInput } from "@datepicker-react/styled";
import { ThemeProvider } from "styled-components";

import {es as locale} from 'date-fns/locale'
import $ from "jquery";
import { TinyAreaChart } from "@opd/g2plot-react";

let aux = false;

const initialState = {
  startDate: null,
  endDate: null,
  focusedInput: null
};


function reducer(state, action) {
  console.log(action.type);
  console.log(state);
  switch (action.type) {      
    case "focusChange":   
      console.log("df");
      return { ...state, focusedInput: action.payload };
    case "dateChange":  
      console.log("dffsds");          
      return action.payload;
    default:
      throw new Error();
  }
}

function cambio() {
  console.log("Hola");
  let dato = $('.graficas').prop('style');
  console.log(dato);
  dato.removeProperty('transform');
}

function Fechas() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (    
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
            primaryColor: "#f8b739"
          }
          
        }
      }}
    >          
      <DateRangeInput      
        onDatesChange={data => dispatch({ type: "dateChange", payload: data })}
        onFocusChange={focusedInput =>
          dispatch({ type: "focusChange", payload: focusedInput })
        }
        onClose={e => cambio()}
        phrases={{
          datepickerStartDatePlaceholder: 'Seleccionar',
          datepickerStartDateLabel: 'Fecha de inicio:',
          datepickerEndDatePlaceholder: 'Seleccionar',
          datepickerEndDateLabel: 'Fecha final:',
          resetDates: 'Deshacer',
          startDateAriaLabel: 'Fecha de inicio',
          endDateAriaLabel: 'Fecha final',
          startDatePlaceholder: 'Fecha de inicio',
          endDatePlaceholder: 'Fecha de inicio',
          close: 'Cerrar',          
        }}          
               
        startDate={state.startDate} // Date or null
        endDate={state.endDate} // Date or null
        focusedInput={state.focusedInput} // START_DATE, END_DATE or null
      />
    </ThemeProvider>
  );
}

export default Fechas;
