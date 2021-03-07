import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Dropdown.css';

function Menucruds() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const Menucruds = [
    {
      title: 'Usuarios',
      path: '/usuarios',
      cName: 'dropdown-link'
    },
    {
      title: 'Clientes',
      path: '/clientes',
      cName: 'dropdown-link'
    },
    {
      title: 'Vehículos',
      path: '/vehiculos',
      cName: 'dropdown-link'
    }
  ];

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {Menucruds.map((item, index) => {
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

export default Menucruds;