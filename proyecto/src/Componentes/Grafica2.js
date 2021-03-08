import React from "react";
import { LineChart, LineChartProps } from "@opd/g2plot-react";

const data1 = [
  {
    date: "2018/8/1",
    type: "Compras",
    value: 4623
  },
  {
    date: "2018/8/1",
    type: "Ventas",
    value: 2208
  },
  {
    date: "2018/8/1",
    type: "Compras",
    value: 182
  },
  {
    date: "2018/8/2",
    type: "Compras",
    value: 6145
  },
  {
    date: "2018/8/2",
    type: "Ventas",
    value: 2016
  },
  {
    date: "2018/8/2",
    type: "Compras",
    value: 257
  },
  {
    date: "2018/8/3",
    type: "Ventas",
    value: 508
  },
  {
    date: "2018/8/3",
    type: "Compras",
    value: 2916
  },
  {
    date: "2018/8/3",
    type: "Ventas",
    value: 289
  },
  {
    date: "2018/8/4",
    type: "Compras",
    value: 6268
  },
  {
    date: "2018/8/4",
    type: "Ventas",
    value: 4512
  },
  {
    date: "2018/8/4",
    type: "Compras",
    value: 428
  },
  {
    date: "2018/8/5",
    type: "Ventas",
    value: 6411
  },
  {
    date: "2018/8/5",
    type: "Compras",
    value: 8281
  },
  {
    date: "2018/8/5",
    type: "Ventas",
    value: 619
  },
  {
    date: "2018/8/6",
    type: "Compras",
    value: 1890
  },
  {
    date: "2018/8/6",
    type: "Ventas",
    value: 2008
  },
  {
    date: "2018/8/6",
    type: "Compras",
    value: 87
  },
  {
    date: "2018/8/7",
    type: "Ventas",
    value: 4251
  },
  {
    date: "2018/8/7",
    type: "Compras",
    value: 1963
  },
  {
    date: "2018/8/7",
    type: "Ventas",
    value: 706
  },
  {
    date: "2018/8/8",
    type: "Compras",
    value: 2978
  },
  {
    date: "2018/8/8",
    type: "Ventas",
    value: 2367
  }
  
];
const config1: LineChartProps = {
  padding: "auto",
  autoFit: true,
  data: data1,
  xField: "date",
  yField: "value",
  yAxis: {
    label: {      
      formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`)
    }
  },
  legend: {
    position: "right-top"
  },
  seriesField: "type"
};

export default () => (
  <section className="graficas">    
    <br/> <br/>    
    <LineChart {...config1} />
    <br/> <br/>    <br/> <br/>    <br/> <br/>       
  </section>
);
