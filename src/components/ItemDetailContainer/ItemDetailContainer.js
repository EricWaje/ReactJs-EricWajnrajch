import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

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
        setItem(res);
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
      {item && item.id ? (
        <ItemDetail item={item} />
      ) : (
        <h1 className="text-center">Cargando...</h1>
      )}
    </>
  );
};

export default ItemDetailContainer;
