import React from 'react';
import ItemList from './ItemList';
import { productos } from '../../Productos/Productos';

const ItemListContainer = () => {
  return (
    <>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
