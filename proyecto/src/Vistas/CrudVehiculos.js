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
      <div className="contenedor">
        <nav className='navbar'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            ACME
            <i className  ='fab fa-firstdraft' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li
              className='nav-item'
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services <i className='fas fa-caret-down' />
              </Link>
              {dropdown && <Dropdown />}
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
            <li>
              
            </li>
          </ul>
          <Button />
        </nav>
      </div>
    );
  }
}
  
  export default CrudVehiculos;