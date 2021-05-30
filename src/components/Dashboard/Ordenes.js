import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext';
import { getFirestore } from '../../firebase';

const Ordenes = () => {
  const [ordenes, setOrdenes] = useState([]);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    const db = getFirestore();
    const ordersCollection = db.collection('orders');
    const orders = ordersCollection.where('buyer', '==', currentUser.email);

    orders
      .get()
      .then((querySnapshot) => {
        const todas = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
          };
        });
        setOrdenes(todas);
      })
      .catch((error) => console.log(error));
  }, [currentUser.email]);
  return (
    <>
      {ordenes.length !== 0 ? (
        <>
          <h2 className="compras">Tus compras</h2>
          <ul className="lista">
            {ordenes.map((orden) => (
              <li className="listaTicket" key={orden.id}>
                {orden.id}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <h2 className="compras">Aún no realizaste ninguna compra</h2>
        </>
      )}
    </>
  );
};

export default Ordenes;
