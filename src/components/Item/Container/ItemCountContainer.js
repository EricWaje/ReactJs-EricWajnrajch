import React, { useState } from 'react';
import ItemCount from '../ItemCount';

const ItemCountContainer = ({ item, onAdd }) => {
  const [counter, setCounter] = useState(0);

  const add = () => {
    setCounter(counter + 1);
  };

  const substract = () => {
    setCounter(counter - 1);
  };
  return (
    <ItemCount
      item={item}
      onAdd={onAdd}
      counter={counter}
      add={add}
      substract={substract}
    />
  );
};

export default ItemCountContainer;
