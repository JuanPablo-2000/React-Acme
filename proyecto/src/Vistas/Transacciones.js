import React, { Component } from 'react';
import BarraNavegacion from '../Componentes/BarraNavegacion';
import Inicio from '../Componentes/Inicio-img'

class Transactions extends Component {
    constructor(props) {
        super(props);

        const location = this.props.location.pathname;
        let message1 = '', message2 = '';
        if (location === "/Compra") {
            message1 = "Registro de Compra";
            message2 = "Fecha de Compra";
        } else if (location === "/Venta") {
            message1 = "Registro de Venta";
            message2 = "Fecha de Venta";
        }

        this.state = {
            title: message1,
            subtitle: message2,
        }
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
                {this.purchase()}
            </>
        );
    }

    purchase() {
        return (
            <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
                <div className="wrapper wrapper--w780">
                    <div className="card card-3">

                        <div className="card-body">
                            <h2 className="titulo-crud"> {this.state.title} </h2>
                            <form method="POST">
                                <div className="input-group">
                                    <input className="input--style-3" type="text" placeholder="Placa" name="placa" />
                                </div>
                                <div className="input-group">
                                    <input className="input--style-3" type="text" placeholder="Cédula" name="marca" />
                                </div>
                                <div className="input-group">
                                    <input className="input--style-3" type="text" placeholder="Precio" name="modelo" />
                                </div>

                                <div className="input-group">
                                    {/*<form action="/">*/}
                                        <label htmlFor="birthday" className="input--style-3"> {this.state.subtitle} </label>
                                        <input type="date" id="birthday" name="birthday" />
                                        <input type="submit" />
                                    {/*</form>*/}
                                </div>

                                <div className="p-t-10 btn-group text-center">
                                    <button className="btn btn--pill btn--green " type="submit">Ver</button>
                                    <button className="btn btn--pill btn--green " type="submit">Crear</button>
                                    <button className="btn btn--pill btn--green " type="submit">Actualizar</button>
                                    <button className="btn btn--pill btn--green " type="submit">Eliminar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};


export default Transactions;