import React from 'react';
import '../../css/App.css';
import Navbar from '../Navbar';

export default function Clientes() {
  return (
    <>
        <div className="clientes">
            <Navbar />
            <section className="formulario">
            <h4>Formulario Clientes</h4>
            <input className="controls" type="text" name="nombres" id="nombres" placeholder="Nombres"/>
            <input className="controls" type="text" name="apellidos" id="apellidos" placeholder="Apellidos"/>
            <input className="controls" type="text" name="cedula" id="cedula" placeholder="Correo electronico"/>
            <input className="controls" type="text" name="cliente" id="cliente" placeholder="Teléfono"/>

            <div className="btncetrados">
              <input className="btn btn-primary btn-centrado" type="submit" value="Ver"/>
              <input className="btn btn-primary btn-centrado" type="submit" value="Crear"/>
              <input className="btn btn-primary btn-centrado" type="submit" value="Editar"/>
              <input className="btn btn-primary btn-centrado" type="submit" value="Borrar"/>
            </div>
        </section>  
        </div>
      
    </>
  );
}