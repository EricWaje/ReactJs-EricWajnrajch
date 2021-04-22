import React from 'react';
import img1 from '../../imagenes/1.png';
/* import img2 from '../../imagenes/2.png';
import { Carousel } from 'react-bootstrap'; */

const Slides = () => {
  return (
    <>
      <div className="container-fluid" style={{ padding: '0px' }}>
        <img src={img1} alt="fondo-endavant" className="img-fluid"></img>
      </div>
    </>
  );
};

export default Slides;

/*       <Carousel>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={img1} alt="Take Risks" />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={img2} alt="18 Cuotas" />
        </Carousel.Item>
      </Carousel> */
