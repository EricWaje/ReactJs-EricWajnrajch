import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Item.css';
import { Card, Col } from 'react-bootstrap';
import ItemCount from './ItemCount';

const Item = ({ title, price, description, img, stock, category, id }) => {
  const [counter, setCounter] = useState(1);

  const add = () => {
    setCounter(counter + 1);
  };

  const substract = () => {
    setCounter(counter - 1);
  };
  const addToCart = () => {
    console.log(`agregando al carrito ${counter} artículos`);
  };
  return (
    <Col lg={3} md={4} className="mb-4 mt-4">
      <Card className="card-prod" style={{ width: '12rem' }}>
        <Link to={`/item/${id}`}>
          <img className="card-img-top img-prod" src={img} alt=""></img>
        </Link>
        <Card.Body>
          <h3 className="card-title">${price}</h3>
          <p className="card-text descr-prod mb-1">{description}</p>
          <ItemCount
            stock={stock}
            add={add}
            substract={substract}
            counter={counter}
          />
          <button
            className="btn-agregar"
            disabled={counter === 0}
            onClick={addToCart}
            style={
              counter === 0 ? { cursor: 'not-allowed' } : { cursor: 'pointer' }
            }
          >
            Agregar al carrito
          </button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;
