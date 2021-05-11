import React from 'react';
import './ItemCount.css';

const ItemCount = ({ item, onAdd, add, substract, counter }) => {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="d-flex flex-row">
          <button
            className="boton-counter"
            onClick={add}
            disabled={counter === item.stock && true}
            style={
              counter === item.stock
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
            onClick={() => onAdd(counter)}
            className="btn-agregar"
            disabled={counter === 0}
            style={
              counter === 0 ? { cursor: 'not-allowed' } : { cursor: 'pointer' }
            }
          >
            Agregar al carrito
          </button>
        </div>
        {counter === item.stock && (
          <h6 className="aviso-stock">Stock máximo</h6>
        )}
      </div>
    </>
  );
};

export default ItemCount;
