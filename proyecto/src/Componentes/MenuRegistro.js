import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Dropdown.css';

function Menuregistro() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const MenuRegistros = [
    {
      title: 'Vehículos Venta',
      path: '/vehiculo_venta',
      cName: 'dropdown-link'
    },
    {
      title: 'Vehiculos Compra',
      path: '/vehiculo_compra',
      cName: 'dropdown-link'
    }
  ];

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuRegistros.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Menuregistro;