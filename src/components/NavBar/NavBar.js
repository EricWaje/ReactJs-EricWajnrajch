import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../img/logo.svg';
import './NavBar.css';
import ButtonPr from '../Button/ButtonPr';

const NavBar = () => {
  return (
    <>
      <nav className="navBar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4 d-flex flex-row justify-content-start align-content-center align-items-center">
              <img src={logo} className="imgLogo"></img>
            </div>
            <div className="col-sm-4 d-flex flex-row justify-content-center align-content-center align-items-center">
              <ul>
                <li>Home</li>
                <li>Categorías</li>
                <li>Contacto</li>
              </ul>
            </div>
            <div className="col-sm-4 d-flex flex-row justify-content-end align-content-center align-items-center">
              <div className="boton">
                <ButtonPr info={'Iniciar sesión'} />
              </div>
              <div className="divCarrito">
                <CartWidget />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
