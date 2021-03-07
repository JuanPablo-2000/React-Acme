import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Dropdown.css';

function Menuprecios() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const Menuprecios = [
    {
      title: 'Venta',
      path: '/venta',
      cName: 'dropdown-link'
    },
    {
      title: 'Compra',
      path: '/compra',
      cName: 'dropdown-link'
    }
  ];

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {Menuprecios.map((item, index) => {
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

export default Menuprecios;