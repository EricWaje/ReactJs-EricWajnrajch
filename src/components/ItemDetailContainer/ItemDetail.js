import React from 'react';
import './ItemDetail.css';
const ItemDetail = ({ item }) => {
  return (
    <>
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center">
            <img className="img-detail" src={item.img} alt="img" />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-start container-detail">
            <h2 className="price">$ {item.price}</h2>
            <h2>{item.title}</h2>
            <h3>{item.description}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
