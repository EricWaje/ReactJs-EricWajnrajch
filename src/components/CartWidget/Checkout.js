import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import { CartContext } from '../../context/CartContext';
import { Row, Col } from 'react-bootstrap';
import { getFirestore } from '../../firebase';
//import Spinner from '../Spinner';
import './Checkout.css';
import { UserContext } from '../../context/UserContext';
//import Formulario from '../Formulario/Formulario';

const Checkout = () => {
  //const [loading, setLoading] = useState(false);
  const { cart, total, clearItems } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);
  // eslint-disable-next-line
  const [id, setId] = useState('');
  //estados de registro
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const register = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error);
    }
  };

  const creandoOrden = async () => {
    //creando collection en firebase
    const db = getFirestore();

    const orders = db.collection('orders');
    const newOrder = {
      buyer: currentUser.email,
      items: cart,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: total(),
    };

    await orders
      .add(newOrder)
      .then(({ id }) => {
        setId(id);
        console.log(id);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        //setLoading(false);
        history.push('/dashboard');
        clearItems();
      });
  };

  return (
    <>
      {currentUser ? (
        <Row
          className="d-flex flex-row justify-content-end"
          style={{ margin: 'auto' }}
        >
          <Col md={4} className="contenedor-boton">
            <button onClick={creandoOrden} className="btn-finalizar">
              Finalizar compra
            </button>
          </Col>
        </Row>
      ) : (
        <Row className="justify-content-center" style={{ margin: 'auto' }}>
          <Col md={8}>
            <h3 className="finalizar">
              Para finalizar la compra debés registrarte o iniciar sesión
            </h3>
            <form onSubmit={(e) => e.preventDefault() && false}>
              <input
                type="email"
                placeholder="email@example.com"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="*******"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="pass">
                La contraseña debe tener al menos 6 caracteres
              </span>
              <button type="submit" className="btn-register" onClick={register}>
                Registrarme
              </button>
            </form>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Checkout;
