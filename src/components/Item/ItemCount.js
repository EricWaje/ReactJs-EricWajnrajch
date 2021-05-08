import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock }) => {
  const [counter, setCounter] = useState(0);

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
    <>
      <div className="d-flex flex-column">
        <div className="d-flex flex-row">
          <button
            className="boton-counter"
            onClick={add}
            disabled={counter === stock && true}
            style={
              counter === stock
                ? { cursor: 'not-allowed' }
                : { cursor: 'pointer' }
            }
          >
            +
          </button>
          <p className="contador">{counter}</p>
          <button
            className="boton-counter"
            onClick={substract}
            disabled={counter === 0 && true}
            style={
              counter === 0 ? { cursor: 'not-allowed' } : { cursor: 'pointer' }
            }
          >
            -
          </button>
        </div>
        <div>
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
        </div>
        {counter === stock && <h6 className="aviso-stock">Stock máximo</h6>}
      </div>
    </>
  );
};

export default ItemCount;
