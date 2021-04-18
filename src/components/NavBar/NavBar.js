import React, { useState } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import logo from '../../img/logo.svg';
import './NavBar.css';
import ButtonPr from '../Button/ButtonPr';

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [enter, setEnter] = useState(false);

  const toggle = () => {
    setClick(!click);
  };

  const categorias = () => {
    setEnter(!enter);
  };

  return (
    <>
      <nav className="navBar d-flex flex-row justify-content-between align-items-center align-content-center">
        <div className="col-sm-4 d-flex flex-row justify-content-start align-content-center align-items-center">
          <img src={logo} alt="logo" className="imgLogo"></img>
        </div>
        <div className="col-sm-4 d-flex flex-row justify-content-center align-content-center align-items-center">
          <ul className={click ? 'menu actived' : 'menu'}>
            <li className="links">Home</li>
            <li
              className="links"
              onMouseEnter={categorias}
              onMouseLeave={categorias}
            >
              Categorías
              <ul className={enter ? 'cat activee' : 'cat'}>
                <li className="linksD">Remeras</li>
                <li className="linksD">Camisas</li>
                <li className="linksD">Riñoneras</li>
                <li className="linksD">Billeteras</li>
                <li className="linksD">Favoritos</li>
              </ul>
            </li>
            <li className="links">Contacto</li>
          </ul>
        </div>
        <div className="col-sm-4 d-flex flex-row justify-content-end align-content-center align-items-center">
          <div className="boton">
            <ButtonPr info={'Log in'} />
          </div>
          <div className="">
            <CartWidget />
          </div>
          <div onClick={toggle} className="container-icon">
            {click ? <AiOutlineClose /> : <FaBars />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
