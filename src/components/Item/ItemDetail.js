import React from 'react';
import './ItemDetail.css';
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
            <h4 className="price">$ {items.price}</h4>
            <div className="dflex flex-column">
              <h5 className="stock">Cantidad de artículos en stock</h5>
            </div>
            <div className="stock-unidades d-flex flex-row justify-content-center">
              <div>
                <h5>{items.stock}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
