import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../../firebase';
import { CartContext } from '../../../context/CartContext';
import Spinner from '../../Spinner';
import ItemDetail from '../ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);
  const [goCart, setGocart] = useState(false);
  const { addItems } = useContext(CartContext);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection('items');
    const itemDetail = itemCollection.doc(id);
    console.log(id);
    itemDetail
      .get()
      .then((doc) => {
        setItem({
          id: doc.id,
          ...doc.data(),
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  //la funcion onAdd se encarga de agregar productos al carrito y se dispara en el ItemCount. Los parametros se los pasan a la funcion addItems
  const onAdd = (counter) => {
    addItems(counter, item);
    setGocart(true);
    //setCart([...cart, { ...item[0], cantidad: counter }]);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <ItemDetail item={item} onAdd={onAdd} goCart={goCart} />
      )}
    </>
  );
};

export default ItemDetailContainer;
