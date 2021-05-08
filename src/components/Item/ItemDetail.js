import React from 'react';
import './ItemDetail.css';
import ItemCount from './ItemCount';
const ItemDetail = ({ items }) => {
  return (
    <>
      <div className="container mt-4 mb-4">
        <div className="row d-flex flex-row justify-content-center align-content-center">
          <div className="col-lg-6 d-flex justify-content-center">
            <img className="img-detail" src={items.img} alt="img" />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-start container-detail">
            <h2 className="descripcion">{items.description}</h2>
            <h4 className="pricee">$ {items.price}</h4>
            <div className="mt-5">
              <ItemCount stock={items.stock} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
