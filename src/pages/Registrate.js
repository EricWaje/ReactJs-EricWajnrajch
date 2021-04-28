import React from 'react';
import imgFondo from '../imagenes/foto-fondo-2.jpeg';
import './Registrate.css';

const Registrate = () => {
  return (
    <div
      className="container-fluid d-flex flex-row justify-content-between"
      style={{ padding: '0px', margin: '0px' }}
    >
      <div className="contenedor-btn" style={{ margin: 'auto' }}>
        <button className="registro-google">Registrate con Google</button>
        <img src={imgFondo} alt="img fondo" className="img-fluid img-media" />
      </div>
      <img
        src={imgFondo}
        alt="img fondo registro"
        className="img-fluid img-registro"
      />
    </div>
  );
};

export default Registrate;

/*       <div className="row">
  <div className="col-lg-6 d-flex flex-column justify-content-center align-content-center align-items-center registro">
    <div className="recuadro">
      <button className="registro-google">Registrate con Google</button>
    </div>
  </div>
  <div className="col-lg-6 d-flex flex-row justify-content-center contenedor-img">
    <div> */

/*           </div>
  </div>
</div> */
