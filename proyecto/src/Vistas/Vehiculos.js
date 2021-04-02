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
                <form method="POST">
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
                      type="text"
                      placeholder="Marca"
                      name="marca"
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
                      type="email"
                      placeholder="Stock"
                      name="stock"
                    />
                  </div>
                  <div className="input-group">
                    <input
                      className="input--style-3"
                      type="text"
                      placeholder="Nombre Cliente"
                      name="nombre-cliente"
                    />
                  </div>
                  <div className="input-group">
                    <input
                      className="input--style-3"
                      type="text"
                      placeholder="Cédula Cliente"
                      name="cedula-cliente"
                    />
                  </div>
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
