import React from "react";
import { LineChart, LineChartProps } from "@opd/g2plot-react";

const config: LineChartProps = {
  padding: "auto",
  autoFit: true,
  data: [
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
    { mes: "Diciembre", value: 13 },
  ],
  xField: "mes",
  yField: "value",
  smooth: true,
  meta: {
    mes: {
      alias: "Mes"
    },
    value: {
      alias: "# autos"
    }
  }
}; 

export default () => (
  <section className="graficas">    
    <br/> <br/>    
    <LineChart {...config} />
    <br/> <br/>    <br/> <br/>    <br/> <br/>    
   {/* <LineChart {...config1} />*/}
  </section>
);
