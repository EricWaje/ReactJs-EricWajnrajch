import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import ButtonPr from '../Button/ButtonPr';
import logo from '../../imagenes/logo.svg';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container-logo">
          <NavLink to="/">
            <img src={logo} className="img-logo" alt="endavant" />
          </NavLink>
        </div>
        <div>
          <ul
            className={
              click ? 'nav-container-menu actived' : 'nav-container-menu'
            }
          >
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="selected"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/category/remera"
                activeClassName="selected"
                className="nav-links"
                onClick={handleClick}
              >
                Remeras
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/category/camisa"
                activeClassName="selected"
                className="nav-links"
                onClick={handleClick}
              >
                Camisas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/category/billetera"
                activeClassName="selected"
                className="nav-links"
                onClick={handleClick}
              >
                Billeteras
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/category/rinonera"
                activeClassName="selected"
                className="nav-links"
                onClick={handleClick}
              >
                Riñoneras
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contacto"
                activeClassName="selected"
                className="nav-links"
                onClick={handleClick}
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <ButtonPr info={'Registrate'} />
        </div>
        <div>
          <NavLink to="/cart">
            <CartWidget />
          </NavLink>
        </div>
        <div className="nav-container-icon" onClick={handleClick}>
          <div className="d-flex flex-row justify-content-center align-items-center align-content-center">
            {click ? <AiOutlineClose /> : <FaBars />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
