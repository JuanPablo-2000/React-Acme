import React, { Component } from 'react';

import Navbar from '../Componentes/Navbar';
import Formulario from '../Componentes/Formulario';

//----------- jQuery --------------------


//----------- CSS y Booststarp ----------

//import 'bootstrap/dist/css/bootstrap.min.css'


//--------------- Iconos e Imagenes ------------

class CrudVehiculos extends Component {
  
  render(){
    return (
        
        <div>
          <Navbar />
          <Formulario /> 
        </div>
      );
    }
    
}
  
  export default CrudVehiculos;