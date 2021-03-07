import React from 'react';
import '../../css/App.css';
import Navbar from '../Navbar';
import Formulario from '../Formulario'

export default function Vehiculos() {
  return (
    <>
      <div className="vehiculos">
        <Navbar />
        <Formulario />
      </div>
    </>
  );
}