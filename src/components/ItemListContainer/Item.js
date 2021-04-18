import React from 'react';
import './Item.css';
import { Card, Col } from 'react-bootstrap';

const Item = ({ id, title, price, description, img }) => {
  return (
    <Col lg={3} md={3}>
      <Card className="card-prod" style={{ width: '12rem' }}>
        <Card.Img
          className="card-img-top img-prod"
          src={img}
          alt="rinonera"
        ></Card.Img>
        <Card.Body>
          <h2>{title}</h2>
          <h3 className="card-title">${price}</h3>
          <p className="card-text descr-prod mb-1">{description}</p>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;
