import React from 'react';
import './Item.css';
import { Card, Col } from 'react-bootstrap';
import ItemCount from './ItemCount';

const Item = ({ title, price, description, img, stock }) => {
  const addToCart = () => {
    console.log('agregando al carrito...');
  };
  return (
    <Col lg={3} md={4}>
      <Card className="card-prod" style={{ width: '12rem' }}>
        <img className="card-img-top img-prod" src={img} alt=""></img>
        <Card.Body>
          <h2>{title}</h2>
          <h3 className="card-title">${price}</h3>
          <p className="card-text descr-prod mb-1">{description}</p>
          <ItemCount stock={stock} />
          <button onClick={addToCart}>Agregar al carrito</button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;
