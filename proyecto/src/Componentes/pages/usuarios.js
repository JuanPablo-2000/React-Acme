import React from 'react';
import '../../css/App.css';
import '../../css/style.css'
import Navbar from '../Navbar';

export default function Usuarios() {
  return (
    <>
      <div className="usuarios">
         <Navbar />
         <section class="formulario">
            <h4>Formulario Clientes</h4>
            <input class="controls" type="text" name="nombres" id="nombres" placeholder="Nombres Cliente"/>
            <input class="controls" type="text" name="apellidos" id="apellidos" placeholder="Contraseña"/>

            <div className="btncetrados">
              <input class="btn btn-primary btn-centrado" type="submit" value="Ver"/>
              <input class="btn btn-primary btn-centrado" type="submit" value="Crear"/>
              <input class="btn btn-primary btn-centrado" type="submit" value="Editar"/>
              <input class="btn btn-primary btn-centrado" type="submit" value="Borrar"/>
            </div>
          </section>
      </div>
    </>
  );
}