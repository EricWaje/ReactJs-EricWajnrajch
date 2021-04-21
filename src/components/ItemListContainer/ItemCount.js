import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock }) => {
  const [counter, setCounter] = useState(1);

  const add = () => {
    setCounter(counter + 1);
  };

  const substract = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <div className="d-flex flex-column">
        {counter === stock && <h6 className="aviso-stock">Stock máximo</h6>}
        <div className="d-flex flex-row">
          <button onClick={add} disabled={counter === stock && true}>
            +
          </button>
          <label>
            <input
              type="text"
              name="counter"
              value={counter}
              className="text-center"
            />
          </label>
          <button onClick={substract} disabled={counter === 0 && true}>
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
