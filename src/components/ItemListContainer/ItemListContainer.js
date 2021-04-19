import React from 'react';
import ItemList from './ItemList';
import { productos } from '../../Productos/Productos';
import ItemCount from './ItemCount';

const ItemListContainer = () => {
  return (
    <>
      <ItemList productos={productos} />
      <ItemCount />
    </>
  );
};

export default ItemListContainer;
