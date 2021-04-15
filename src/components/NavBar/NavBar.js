import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { FaBars } from 'react-icons/fa';
import logo from '../../img/logo.svg';
import './NavBar.css';
import ButtonPr from '../Button/ButtonPr';

const NavBar = () => {
  return (
    <>
      <nav className="navBar d-flex flex-row justify-content-between align-items-center align-content-center">
        <div className="col-sm-4 d-flex flex-row justify-content-start align-content-center align-items-center">
          <img src={logo} className="imgLogo"></img>
        </div>
        <div className="col-sm-4 d-flex flex-row justify-content-center align-content-center align-items-center">
          <ul className="menu">
            <li>Home</li>
            <li>Categorías</li>
            <li>Contacto</li>
          </ul>
        </div>
        <div className="col-sm-4 d-flex flex-row justify-content-end align-content-center align-items-center">
          <div className="boton">
            <ButtonPr info={'Log in'} />
          </div>
          <div className="">
            <CartWidget />
          </div>
          <div className="container-icon">
            <FaBars />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
