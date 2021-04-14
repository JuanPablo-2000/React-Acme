import React, { Component } from "react";
import { LineChart, LineChartProps } from "@opd/g2plot-react";

class Graphic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataGraphic: props.setting,
      metaData: props.meta,
      show: true,
    };
    console.log("Mi configuracion", this.state.dataGraphic);
  }

  render() {
    return (
      <>
        {this.state.show ? (
          <section className="graficas">
            <br /> <br />
            <LineChart {...this.propsLineChart()} />
            <br /> <br /> <br /> <br /> <br /> <br />
          </section>
        ) : null}
      </>
    );
  }

  propsLineChart() {
    const setting: LineChartProps = {
      padding: "auto",
      autoFit: true,
      data: this.state.dataGraphic,
      xField: "mes",
      yField: "value",
      smooth: true,    
      meta: this.state.metaData,      
    };
    return setting;
  }
}
export default Graphic;
