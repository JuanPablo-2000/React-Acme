import React, { Component } from "react";
import { LineChart, LineChartProps } from "@opd/g2plot-react";

class ComparationGraphic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataGraphic: props.setting,
    }
  }

  render() {
    return (
      <>
        <section className="graficas">
          <br /> <br />
          <LineChart {...this.propsLineChart()} />
          <br /> <br /> <br /> <br /> <br /> <br />
        </section>
      </>
    );
  }

  propsLineChart() {
    const config1: LineChartProps = {
      padding: "auto",
      autoFit: true,
      data: this.state.dataGraphic,
      xField: "date",
      yField: "value",
      legend: {
        position: "right-top",
      },
      seriesField: "type",
    };
    return config1;
  }
}

export default ComparationGraphic;
