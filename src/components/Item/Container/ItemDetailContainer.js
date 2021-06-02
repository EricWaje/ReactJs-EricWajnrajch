import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../../firebase';
import { CartContext } from '../../../context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    toast.success('Se agregó al carito', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    addItems(counter, item);
    setGocart(true);
    //setCart([...cart, { ...item[0], cantidad: counter }]);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {loading ? (
        <Spinner />
      ) : (
        <ItemDetail item={item} onAdd={onAdd} goCart={goCart} />
      )}
    </>
  );
};

export default ItemDetailContainer;
