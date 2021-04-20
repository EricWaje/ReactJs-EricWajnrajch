import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const task = new Promise((resolve, reject) => {
      const productos = [
        {
          id: 1,
          title: 'Camisa',
          description: 'Camisa manga corta floreada',
          price: 200,
          stock: 20,
          img: '../img/productos/camisa2.png',
        },
        {
          id: 2,
          title: 'Camisa 2',
          description: 'Camisa manga larga',
          price: 300,
          stock: 7,
          img: '../img/productos/camisa2.png',
        },
        {
          id: 3,
          title: 'Camisa 3',
          description: 'Camisa manga corta hawaiana',
          price: 400,
          stock: 6,
          img: '../../img/productos/camisa3.png',
        },
        {
          id: 4,
          title: 'Camisa 4',
          description: 'Camisa militar',
          price: 500,
          stock: 10,
          img: '../../../img/productos/camisa4.png',
        },
      ];
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
      {items.length > 0 ? (
        <ItemList items={items} />
      ) : (
        <h1 className="text-center mt-5">Cargando...</h1>
      )}
    </>
  );
};

export default ItemListContainer;
