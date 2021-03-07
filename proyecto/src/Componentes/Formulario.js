import React from 'react';
import '../css/style.css'

function Formulario(){
    return(
        <section class="formulario">
            <h4>Formulario Vehículos</h4>
            <input class="controls" type="text" name="nombres" id="nombres" placeholder="Marca Vehículo"/>
            <input class="controls" type="text" name="apellidos" id="apellidos" placeholder="Placa Vehículo"/>
            <input class="controls" type="email" name="modelo" id="modelo" placeholder="Modelo Vehículo"/>
            <input class="controls" type="text" name="stock" id="stock" placeholder="Stock Vehículo"/>
            <input class="controls" type="text" name="cedula" id="cedula" placeholder="Cédula "/>
            <input class="controls" type="text" name="cliente" id="cliente" placeholder="Cliente"/>

            <div className="btncetrados">
                <input class="btn btn-primary btn-centrado" type="submit" value="Ver"/>
                <input class="btn btn-primary btn-centrado" type="submit" value="Crear"/>
                <input class="btn btn-primary btn-centrado" type="submit" value="Editar"/>
                <input class="btn btn-primary btn-centrado" type="submit" value="Borrar"/>
            </div>
          </section> 
    );
}

export default Formulario;