import React from 'react';
import img1 from '../../img/1.png';
import img2 from '../../img/2.png';
import { Carousel } from 'react-bootstrap';

const Slides = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={img1} alt="Take Risks" />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={img2} alt="18 Cuotas" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slides;
