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
          description: 'Camisa manga corta floreada',
          price: 200,
          stock: 20,
          img: '../../imagenes/productos/camisa1.jpg',
        },
        {
          id: 2,
          title: 'Camisa 2',
          description: 'Camisa manga larga',
          price: 300,
          stock: 7,
          img: '../../imagenes/productos/camisa2.jpg',
        },
        {
          id: 3,
          title: 'Camisa 3',
          description: 'Camisa manga corta hawaiana',
          price: 400,
          stock: 6,
          img: '../../imagenes/productos/camisa3.jpg',
        },
        {
          id: 4,
          title: 'Camisa 4',
          description: 'Camisa militar',
          price: 500,
          stock: 10,
          img: '../../imagenes/productos/camisa4.jpg',
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
      <div className="fondo">
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
