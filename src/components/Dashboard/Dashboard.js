import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Row, Col } from 'react-bootstrap';
import './Dashboard.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import { UserContext } from '../../context/UserContext';
import Ordenes from './Ordenes';

const Dashboard = () => {
  const { currentUser } = useContext(UserContext);
  const history = useHistory();

  const [tieneCuenta, setTienenCuenta] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      history.push('/dashboard');
      toast.success('Te registraste con éxito', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
      history.push('/dashboard');
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

  const logOut = async () => {
    await firebase.auth().signOut();
    toast.info('Acabas de finalizar la sesión', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
      {!currentUser ? (
        <Container className="contenedor-orden">
          <Row className="justify-content-center">
            <Col md={8}>
              <h2 className="gracias">
                Aún no te registraste, completá los datos para poder comprar y
                ver tus compras realizadas
              </h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={8}>
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
                  <button
                    type="submit"
                    className="btn-logout"
                    onClick={register}
                  >
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
                    <button
                      type="submit"
                      className="btn-logout"
                      onClick={logIn}
                    >
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
        </Container>
      ) : (
        <Container className="contenedor-user">
          <Row className="justify-content-center">
            <Col md={4}>
              <h2 className="bienvenido">Bienvenid@ ! {currentUser.email}</h2>
              <button className="btn-logout" onClick={logOut}>
                Logout
              </button>
            </Col>
            <Col md={4} className="contenedor-compras">
              <Ordenes />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Dashboard;
