import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const task = new Promise((resolve, reject) => {
      const productos = [
        {
          id: 1,
          title: 'Camisa',
          description: 'Camisa manga larga floreada',
          price: 200,
          stock: 20,
          img: 'img/camisa1.jpg',
        },
        {
          id: 2,
          title: 'Camisa 2',
          description: 'Camisa manga larga blanca con lunares',
          price: 300,
          stock: 7,
          img: 'img/camisa2.jpg',
        },
        {
          id: 3,
          title: 'Camisa 3',
          description: 'Camisa manga larga azul con rayas',
          price: 400,
          stock: 6,
          img: 'img/camisa3.jpg',
        },
        {
          id: 4,
          title: 'Camisa 4',
          description: 'Camisa manga larga azul marino con lunares',
          price: 500,
          stock: 10,
          img: 'img/camisa4.jpg',
        },
        {
          id: 5,
          title: 'riñonera 1',
          description: 'Riñonera beige de cuero con dos cierres',
          price: 145,
          stock: 13,
          img: 'img/rinonera1C.jpg',
        },
        {
          id: 6,
          title: 'riñonera 2',
          description: 'Riñonera negra de cuero con dos cierres',
          price: 155,
          stock: 13,
          img: 'img/rinonera2C.jpg',
        },
        {
          id: 7,
          title: 'riñonera 3',
          description: 'Riñonera negray gris de cuero con dos cierres',
          price: 167,
          stock: 3,
          img: 'img/rinonera3C.jpg',
        },
        {
          id: 8,
          title: 'riñonera 4',
          description: 'Riñonera negra militar de cuero con dos cierres',
          price: 142,
          stock: 6,
          img: 'img/rinonera4C.jpg',
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
      <div className="fondo mb-4 mt-4">
        {items.length > 0 ? (
          <ItemList items={items} />
        ) : (
          <h1 className="text-center mt-5">Cargando...</h1>
        )}
      </div>
    </>
  );
};

export default ItemListContainer;
