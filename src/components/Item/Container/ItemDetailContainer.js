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
  //const [cart, setCart] = useContext(CartContext);
  const { id } = useParams();

  //UseEffect para montar los productos con una promise + un setTimeout para hacer un delay de 2 segundos en la entrega.

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection('items');
    itemCollection
      .get()
      .then((info) => {
        info.size === 0
          ? console.log('no hay items')
          : console.log(`hay ${info.size} items`);
        const prod = info.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        //busco el item on un filtro para luego mostrarlo en el detalle
        const itemFiltrado = prod.filter((i) => i.id === `${id}`);
        setItem(itemFiltrado[0]);
        console.log(itemFiltrado);
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
