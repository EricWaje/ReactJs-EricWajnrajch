import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';
import { Card, Col } from 'react-bootstrap';

const Item = ({ price, img, id }) => {
  return (
    <>
      <Col lg={3} md={4} className="mb-4 mt-4">
        <Card className="card-prod" style={{ width: '12rem' }}>
          <Link to={`/item/${id}`}>
            <img className="card-img-top img-prod" src={img} alt=""></img>

            <Card.Body>
              <h3 className="card-title titulo-card">${price}</h3>
            </Card.Body>
          </Link>
        </Card>
      </Col>
    </>
  );
};

export default Item;
