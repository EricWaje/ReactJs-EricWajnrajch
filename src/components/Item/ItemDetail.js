import React from 'react';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import ItemCount from './ItemCount';
const ItemDetail = ({ item, onAdd, goCart }) => {
  return (
    <>
      <div className="container mt-4 mb-4">
        <div className="row d-flex flex-row justify-content-center align-content-center">
          <div className="col-lg-6 d-flex justify-content-center">
            <img
              className="img-detail img-fluid max-width: 100%;"
              src={item.img}
              alt="img"
            />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-start container-detail">
            <h2 className="descripcion">{item.description}</h2>
            <h4 className="pricee">$ {item.price}</h4>
            <div className="mt-5">
              {goCart ? (
                <Link to={'/cart'}>
                  <button className="btn-agregar">Terminar compra</button>
                </Link>
              ) : (
                <ItemCount item={item} onAdd={onAdd} />
              )}
              <Link to={'/'}>
                <button className="btn-agregar d-block">
                  Volver al catalogo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
