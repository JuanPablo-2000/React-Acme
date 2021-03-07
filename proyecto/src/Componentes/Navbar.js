import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Menucruds from './Menucruds';
import Menuprecios from './Menuprecios';
import Menuregistro from './MenuRegistro';

import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  function onMouseEnter() {
    if (window.innerWidth < 1100) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  function onMouseEnter2() {
    if (window.innerWidth < 1100) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };

  function onMouseEnter3() {
    if (window.innerWidth < 1100) {
      setDropdown3(false);
    } else {
      setDropdown3(true);
    }
  };

  function onMouseLeave() {
    if (window.innerWidth < 1100) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  function onMouseLeave2() {
    if (window.innerWidth < 1100) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };

  function onMouseLeave3() {
    if (window.innerWidth < 1100) {
      setDropdown3(false);
    } else {
      setDropdown3(false);
    }
  };

  return (
    <div className="d">
      <nav className='navbar'>
        <Link to='/CrudVehiculos' className='navbar-logo' onClick={closeMobileMenu}>
          ACME inc.
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/inicio' className='nav-links' onClick={closeMobileMenu}>
              Inicio
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to=''
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Crud's <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Menucruds />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
          >
            <Link
              to=''
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Registros <i className='fas fa-caret-down' />
            </Link>
            {dropdown2 && <Menuregistro />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter3}
            onMouseLeave={onMouseLeave3}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Precios <i className='fas fa-caret-down' />
            </Link>
            {dropdown3 && <Menuprecios />}
          </li>
          
          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Historiales
            </Link>
          </li>
          
          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Propietarios
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Fechas
            </Link>
          </li>
          
        </ul>
        
      </nav>
      
    </div>
    
  );
}

export default Navbar;
