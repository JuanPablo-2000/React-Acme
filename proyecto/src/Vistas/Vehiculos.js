import React, { Component } from "react";
import BarraNavegacion from "../Componentes/BarraNavegacion";
import Inicio from "../Componentes/Inicio-img";

class Vehiculos extends Component {
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
        <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
          <div className="wrapper wrapper--w780">
            <div className="card card-3">
              <div className="card-body">
                <h2 className="titulo-crud"> Registro de Vehículos </h2>
                <div className="p-t-10 btn-group text-center">
                  <button className="btn btn--pill btn--green " type="submit">
                    Ver
                  </button>
                  <button className="btn btn--pill btn--green " type="submit">
                    Crear
                  </button>
                  <button className="btn btn--pill btn--green " type="submit">
                    Actualizar
                  </button>
                  <button className="btn btn--pill btn--green " type="submit">
                    Eliminar
                  </button>
                </div>
                <form className="form_vehiculo" >
                  <div className="input-group">
                    <input
                      className="input--style-3"
                      type="text"
                      placeholder="Placa"
                      name="placa"
                    />
                  </div>
                  <div className="input-group">
                    <input
                      className="input--style-3"
                      type="number"
                      placeholder="Cedula del propietario"
                      name="cedula"
                    />
                  </div>
                  <div className="input-group">
                    <input
                      className="input--style-3"
                      type="text"
                      placeholder="Modelo"
                      name="modelo"
                    />
                  </div>
                  <div className="input-group">
                    <input
                      className="input--style-3"
                      type="text"
                      placeholder="Marca"
                      name="marca"
                    />
                  </div>
                  <div className="input-group">
                    <div className="custom-radios">
                      <div>
                        <input type="radio" id="type_1" name="procede" />
                        <label htmlFor="type_1">
                          <span>
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
                    <input
                      className="input--style-3"
                      type="number"
                      placeholder="# Stock"
                      name="stock"
                    />
                  </div>
                  <div className="input-group">
                    <input
                      className="input--style-3"
                      type="number"
                      placeholder="Url de Imagen"
                      name="img"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Vehiculos;
