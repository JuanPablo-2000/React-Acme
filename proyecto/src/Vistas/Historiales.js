import React, { Component } from "react";

import Inicio from "../Componentes/Inicio-img";
import BarraNavegacion from "../Componentes/BarraNavegacion";
import Fechas from "../Componentes/Fechas";
// ------------------------ Iconos ------------------------------------
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ------------------------ Imagenes -----------------------------------

class Historial extends Component {
  constructor(props) {
    super(props);
    const location = this.props.location.pathname;
    let message = "", path = '';
    if (location === "/Historial-venta") {
      message = "Historial de ventas";
      path = 'venta';
    } else if (location === "/Historial-compra") {
      message = "Historial de compras";
      path = 'compra';
    } else if (location === "/Historial-otros") {
      message = "Comparación";
      path = 'comparacion';
    }

    this.state = {
      history: message,      
      miPath: path,
      dataDates: {
        startDate: null,
        endDate: null,
        focusedInput: null
      },
    };
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
        <br /> <br />
        <h2>{this.state.history}</h2>        
        <br /> <br />
        <Fechas path={this.state.miPath} typeGraphic={this.state.history} info={this.state.dataDates}/>        
        {/*this.carrosMasComprados()*/}
        
      </>
    );
  }

  carrosMasComprados() {
    return (
      <section id="gallery">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-lg-5 mb-4 col-md-4">
              <div className="blog-card spring-fever">
                <div className="title-content">
                  <h4 className="tituloCarro">Ford F-Series 47.517</h4>
                  <hr />
                </div>
                <div className="card-info">
                  Cuando el camino se complica, un verdadero aventurero lo sabe
                  sortear.
                  <ul className="list-inline small">
                    <i className="fa text-success list-inline-item">
                      <FontAwesomeIcon icon={faStar} />
                    </i>
                    <i className="fa text-success list-inline-item">
                      <FontAwesomeIcon icon={faStar} />
                    </i>
                    <i className="fa text-success list-inline-item">
                      <FontAwesomeIcon icon={faStar} />
                    </i>
                    <i className="fa text-success list-inline-item">
                      <FontAwesomeIcon icon={faStar} />
                    </i>
                    <i className="fa text-success list-inline-item">
                      <FontAwesomeIcon icon={faStar} />
                    </i>
                  </ul>
                </div>
                <div className="utility-info">
                  <ul className="utility-list">
                    <li className="comments">12</li>
                    <li className="date">03.12.2015</li>
                  </ul>
                </div>
                <div className="gradient-overlay"></div>
                <div className="color-overlay"></div>
              </div>
            </div>
            <div className="col-lg-5 mb-4 col-md-4">
              <div className="blog-card spring-fever">
                <div className="title-content">
                  <h4 className="tituloCarro">Chevrolet Silverado 36.600</h4>
                  <hr />
                </div>
                <div className="card-info">
                  Robusta. Inteligente. Más grande, aunque más liviana que la
                  generación anterior.
                  <ul className="list-inline small">
                    <i className="fa text-success list-inline-item">
                      <FontAwesomeIcon icon={faStar} />
                    </i>
                    <i className="fa text-success list-inline-item">
                      <FontAwesomeIcon icon={faStar} />
                    </i>
                    <i className="fa text-success list-inline-item">
                      <FontAwesomeIcon icon={faStar} />
                    </i>
                    <i className="fa text-success list-inline-item">
                      <FontAwesomeIcon icon={faStar} />
                    </i>
                    <i className="fa text-success list-inline-item">
                      <FontAwesomeIcon icon={faStarHalfAlt} />
                    </i>
                  </ul>
                </div>
                <div className="utility-info">
                  <ul className="utility-list">
                    <li className="comments">12</li>
                    <li className="date">03.12.2015</li>
                  </ul>
                </div>
                <div className="gradient-overlay"></div>
                <div className="color-overlay"></div>
              </div>
            </div>
            <div className="col-lg-5 mb-4 col-md-4 prueba">
              <div className="blog-card spring-fever">
                <div className="title-content">
                  <h4 className="tituloCarro">RAM Pick Up 32.807</h4>
                  <hr />
                </div>
                <div className="card-info">
                  Un interior orientado a la comodidad de todos los pasajeros y
                  funciones pensadas en realizar el trabajo de forma eficiente.
                  <ul className="list-inline small">
                    <i className="fa text-dark list-inline-item">
                      <FontAwesomeIcon icon={faStar} />
                    </i>
                    <i className="fa text-dark list-inline-item">
                      <FontAwesomeIcon icon={faStar} />
                    </i>
                    <i className="fa text-dark list-inline-item">
                      <FontAwesomeIcon icon={faStar} />
                    </i>
                    <i className="fa text-dark list-inline-item">
                      <FontAwesomeIcon icon={faStar} />
                    </i>
                  </ul>
                </div>
                <div className="utility-info">
                  <ul className="utility-list">
                    <li className="comments">12</li>
                    <li className="date">03.12.2015</li>
                  </ul>
                </div>
                <div className="gradient-overlay"></div>
                <div className="color-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Historial;
