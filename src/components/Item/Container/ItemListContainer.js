import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../../firebase';
import Spinner from '../../Spinner';
import ItemList from '../ItemList';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();

    const itemCollection = db.collection('items');
    itemCollection
      .orderBy('price', 'desc')
      .get()
      .then((info) => {
        const prod = info.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        const categorias = prod.filter((i) => i.categoryId === `${id}`);
        id === undefined ? setItems(prod) : setItems(categorias);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);
  return (
    <>
      <div className="fondo mb-4 mt-4">
        <h2 className="catalogo pt-4">CATÁLOGO DE PRODUCTOS</h2>
        {loading ? <Spinner /> : <ItemList items={items} />}
      </div>
    </>
  );
};

export default ItemListContainer;
