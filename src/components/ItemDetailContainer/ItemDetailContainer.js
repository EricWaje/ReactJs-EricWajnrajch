import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { id, category } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const task = new Promise((resolve, reject) => {
      const productos = {
        id: 1,
        category: 'camisa',
        title: 'Camisa',
        description: 'Camisa manga larga floreada',
        price: 200,
        stock: 20,
        img:
          'https://res.cloudinary.com/ericwaje/image/upload/v1619372706/camisa1_mvazpn.jpg',
      };
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });

    task
      .then((res) => {
        setItems(res);
      })
      .catch(() => {
        console.log('Error al cargar');
      })
      .finally(() => {
        console.log('Se cargó correctamente');
      });
  }, []);

  return (
    <>
      <ItemDetail items={items} />
    </>
  );
};

export default ItemDetailContainer;
