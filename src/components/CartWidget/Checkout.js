import React, { useState, useContext } from 'react';
import firebase from 'firebase/app';
import { CartContext } from '../../context/CartContext';
import { Row, Col } from 'react-bootstrap';
import { getFirestore } from '../../firebase';

const Checkout = () => {
  const [info, setInfo] = useState({});
  const [id, setId] = useState('');
  const { cart, total } = useContext(CartContext);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //creando collection en firebase
    const db = getFirestore();

    const orders = db.collection('orders');
    const newOrder = {
      buyer: info,
      items: cart,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: total(),
    };

    orders
      .add(newOrder)
      .then(({ id }) => {
        setId(id);
        console.log(id);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setInfo({});
      });
  };

  return (
    <>
      <Row>
        <Col>
          <form onChange={handleInput}>
            <input type="text" placeholder="Nombre" name="nombre" />
            <input type="text" placeholder="Apellido" name="apellido" />
            <input type="text" placeholder="Direccion" name="direccion" />
            <input type="text" placeholder="Teléfono" name="telefono" />
            <input type="email" placeholder="example@gmail.com" name="email" />
            <button className="btn-enviar" onClick={onSubmit}>
              Enviar Datos
            </button>
          </form>
        </Col>
        <Col>
          {id.length ? (
            <div>
              <h5>Su identificador de orden es </h5>
              <span
                style={{
                  color: 'white',
                  backgroundColor: 'black',
                  fontSize: '2rem',
                  padding: '5px 8px',
                }}
              >
                {id}
              </span>

              <p style={{ marginTop: '20px' }}>
                Guarde este número para el seguimiento del pedido, en las
                próximas 24 hs se estarán comunicando con usted, gracias por
                haber comprado en la tienda virtual!
              </p>
            </div>
          ) : (
            <div></div>
          )}
        </Col>
      </Row>
    </>
  );
};

export default Checkout;
