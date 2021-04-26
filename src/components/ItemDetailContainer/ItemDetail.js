import React from 'react';
const ItemDetail = ({ items }) => {
  return (
    <>
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center">
            <img src={items.img} alt="img" />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-start">
            <h2>$ {items.price}</h2>
            <h2>{items.title}</h2>
            <h3>{items.description}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
