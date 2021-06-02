import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import { CartContext } from '../../context/CartContext';
import { Row, Col } from 'react-bootstrap';
import { getFirestore } from '../../firebase';
import './Checkout.css';
import { UserContext } from '../../context/UserContext';

const Checkout = () => {
  //const [loading, setLoading] = useState(false);
  const { cart, total, clearItems } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);

  const [error, setError] = useState(false);
  const [tieneCuenta, setTienenCuenta] = useState(false);
  const [loading, setLoading] = useState(false);
  //estados de registro
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const register = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      toast.success('Te registraste con éxito', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      history.push('/cart');
    } catch (error) {
      toast.error('Hubo un problema al crear el registro', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setError(error.message);
    }
  };

  const logIn = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      history.push('/cart');
      toast.success('Iniciaste sesión con éxito', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      toast.error('Hubo un problema al iniciar sesión', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setError(error.message);
    }
  };

  const creandoOrden = async () => {
    const db = getFirestore();
    const itemsToUpdate = db.collection('items').where(
      firebase.firestore.FieldPath.documentId(),
      'in',
      cart.map((i) => i.id)
    );
    const query = await itemsToUpdate.get();
    const batch = db.batch();
    setLoading(true);
    const outOfStock = [];
    const orders = db.collection('orders');

    const newOrder = {
      buyer: currentUser.email,
      items: cart,
      date: firebase.firestore.FieldValue.serverTimestamp(),
      total: total(),
    };

    query.docs.forEach((docSnapshot, idx) => {
      if (docSnapshot.data().stock >= cart[idx].cantidad) {
        batch.update(docSnapshot.ref, {
          stock: docSnapshot.data().stock - cart[idx].cantidad,
        });
      } else {
        outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id });
      }
    });

    if (outOfStock.length === 0) {
      await batch.commit();
      try {
        await orders.add(newOrder);
        history.push('/dashboard');
        clearItems();
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {currentUser ? (
        <>
          <Row
            className="d-flex flex-row justify-content-end"
            style={{ margin: 'auto' }}
          >
            <Col md={4} className="contenedor-boton">
              <button onClick={creandoOrden} className="btn-finalizar">
                {loading ? 'Creando Compra....' : 'Finalizar compra'}
              </button>
            </Col>
          </Row>
        </>
      ) : (
        <Row className="justify-content-center" style={{ margin: 'auto' }}>
          <Col md={8}>
            <h3 className="finalizar">
              Para finalizar la compra debés registrarte o iniciar sesión
            </h3>
            {tieneCuenta ? (
              <form onSubmit={(e) => e.preventDefault() && false}>
                <input
                  type="email"
                  placeholder="email@example.com"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span>{error}</span>
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
                <button type="submit" className="btn-logout" onClick={register}>
                  Registrarme
                </button>
                <p className="text-center mt-5">
                  Ya tenés cuenta?
                  <span
                    onClick={() => setTienenCuenta(!tieneCuenta)}
                    className="spann"
                  >
                    Ingresar
                  </span>
                </p>
              </form>
            ) : (
              <>
                <form onSubmit={(e) => e.preventDefault() && false}>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span>{error}</span>
                  <input
                    type="password"
                    placeholder="*******"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button type="submit" className="btn-logout" onClick={logIn}>
                    Ingresar
                  </button>
                  <p className="text-center mt-5">
                    Aún no te registraste?
                    <span
                      onClick={() => setTienenCuenta(!tieneCuenta)}
                      className="spann"
                    >
                      Registrate
                    </span>
                  </p>
                </form>
              </>
            )}
          </Col>
        </Row>
      )}
    </>
  );
};

export default Checkout;

/* const creandoOrden = async () => {
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
    .then((res) => {
      setIdentificador(res.id);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      history.push('/dashboard');
      clearItems();
      actualizarStock();
    });
};

const actualizarStock = () => {
  const db = getFirestore();
  const itemsToUpdate = db.collection('items').doc(id);
  cart.forEach((item) => {
    itemsToUpdate.update({
      stock: item.stock - item.cantidad,
    });
  });
}; */
