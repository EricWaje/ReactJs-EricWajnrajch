import React from 'react';
import './Info.css';
import { AiFillCreditCard } from 'react-icons/ai';
import { AiOutlineReload } from 'react-icons/ai';
import { MdAttachMoney } from 'react-icons/md';

const Info = () => {
  return (
    <>
      <div className="container mt-4 mb-3">
        <div className="row">
          <div className="col-lg-4 d-flex flex-column justify-content-center align-content-center align-items-center mt-4 mb-3">
            <div className="credit-card">
              <AiFillCreditCard />
            </div>
            <h4>18 CUOTAS SIN INTERÉS CON CUALQUIER TARJETA DE CRÉDITO</h4>
          </div>
          <div className="col-lg-4 d-flex flex-column justify-content-center align-content-center align-items-center mt-4 mb-3">
            <div className="credit-card">
              <AiOutlineReload />
            </div>
            <h4>
              REALIZÁ CAMBIOS HASTA 30 DIAS DESPUÉS DE REALIZADA LA COMPRA
            </h4>
          </div>
          <div className="col-lg-4 d-flex flex-column justify-content-center align-content-center align-items-center mt-4 mb-3">
            <div className="credit-card">
              <MdAttachMoney />
            </div>
            <h4>ABONÁ EN EFECTIVO, TRANSFERENCIA O DEPÓSITO BANCARIO</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
