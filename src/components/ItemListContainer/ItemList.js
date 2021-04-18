import React, { useState, useEffect } from 'react';
import Item from './Item';
import { Row } from 'react-bootstrap';

const ItemList = ({ productos }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });

    task.then((res) => {
      setItems(res);
    });
  }, []);

  return (
    <Row style={{ margin: 'auto' }}>
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </Row>
  );
};

export default ItemList;
