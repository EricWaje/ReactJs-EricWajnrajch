import React from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, add, substract, counter }) => {
  const nada = () => {
    console.log('prueba');
  };
  return (
    <>
      <div className="d-flex flex-column">
        {counter === stock && <h6 className="aviso-stock">Stock máximo</h6>}
        <div className="d-flex flex-row">
          <button
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
          <label>
            <input
              type="text"
              name="counter"
              value={counter}
              className="text-center"
              onChange={nada}
            />
          </label>
          <button
            onClick={substract}
            disabled={counter === 0 && true}
            style={
              counter === 0 ? { cursor: 'not-allowed' } : { cursor: 'pointer' }
            }
          >
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
