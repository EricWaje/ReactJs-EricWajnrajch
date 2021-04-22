import React from 'react';
import './Footer.css';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="container-fluid fondo-footer">
      <div className="row">
        <div className="col-lg-12 d-flex flex-row justify-content-center mt-2">
          <div className="redes">
            <AiOutlineInstagram />
          </div>
          <div className="redes">
            <FaFacebookF />
          </div>
        </div>
        <div className="col-lg-12 d-flex flex-row justify-content-center mt-4">
          <div className="info">
            <h6 className="text-center">
              ARGERICH 442 - Flores, CABA - Atención de Lunes a Viernes de 8:00
              a 17:00hs y Sábados de 9:00 a 14:00hs.
            </h6>
          </div>
        </div>
        <div className="col-lg-12 d-flex flex-row justify-content-center mt-4 copy">
          <div className="">
            <h6 className="text-center eric mt-2 mb-2">
              Design by Eric Wajnrajch
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
