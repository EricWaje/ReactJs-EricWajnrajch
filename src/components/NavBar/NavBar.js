import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../imagenes/logo.svg';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { UserContext } from '../../context/UserContext';

const NavBar = () => {
  const { currentUser } = useContext(UserContext);
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
                to="/category/riñonera"
                activeClassName="selected"
                className="nav-links"
                onClick={handleClick}
              >
                Riñoneras
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <NavLink to="/dashboard">
            <FaUserCircle className="logoUsuario" />
            {currentUser ? (
              <span className="emailUser">{currentUser.email}</span>
            ) : (
              <span></span>
            )}
          </NavLink>
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
