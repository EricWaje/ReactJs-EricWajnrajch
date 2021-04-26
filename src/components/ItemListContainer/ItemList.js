import React from 'react';
import Item from './Item';
import { Row } from 'react-bootstrap';

const ItemList = ({ items }) => {
  return (
    <Row style={{ margin: 'auto' }}>
      {items
        /* .filter((items) => items.category === 'remera') */
        .map((item) => (
          <Item key={item.id} {...item} />
        ))}
    </Row>
  );
};

export default ItemList;
