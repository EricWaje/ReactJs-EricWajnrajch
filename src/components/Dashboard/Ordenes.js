import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext';
import { getFirestore } from '../../firebase';
import Spinner from '../Spinner';
import Detalle from './Detalle';

const Ordenes = () => {
  const [ordenes, setOrdenes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const ordersCollection = db.collection('orders');
    const orders = ordersCollection.where('buyer', '==', currentUser.email);

    orders
      .get()
      .then((snap) => {
        const todas = snap.docs.map((doc) => {
          const data = doc.data();
          const { date } = data;
          const fecha = new Date(date.seconds * 1000);
          const normalizedCreatedAt = new Intl.DateTimeFormat('es-ES', {
            dateStyle: 'full',
            timeStyle: 'short',
          }).format(fecha);
          return {
            id: doc.id,
            ...data,
            date: normalizedCreatedAt,
          };
        });
        setOrdenes(todas);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, [currentUser.email]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {ordenes.length !== 0 ? (
            <>
              <h2 className="compras">Tus compras</h2>
              <p className="text-center" style={{ fontStyle: 'italic' }}>
                Hacé click sobre el código para ver los detalles
              </p>
              <ul className="lista">
                {ordenes.map((orden) => (
                  <Detalle key={orden.id} {...orden} />
                ))}
              </ul>
            </>
          ) : (
            <>
              <h2 className="compras">Aún no realizaste ninguna compra</h2>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Ordenes;
