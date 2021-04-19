import React, { useState } from 'react';

const ItemCount = () => {
  const [counter, setCounter] = useState(1);

  const add = () => {
    setCounter(counter + 1);
  };

  const substract = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <div className="d-flex flex-row">
        <button
          onClick={add}
          style={{
            color: 'black',
            backgroundColor: 'white',
            border: '1px solid black',
          }}
        >
          +
        </button>
        <label>
          <input
            type="text"
            name="counter"
            value={counter}
            className="text-center"
            style={{ width: '60px', margin: '0px 5px' }}
          />
        </label>
        <button
          style={{
            color: 'black',
            backgroundColor: 'white',
            border: '1px solid black',
          }}
          onClick={substract}
          disabled={counter <= 1 && true}
        >
          -
        </button>
      </div>
    </>
  );
};

export default ItemCount;
