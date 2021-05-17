import React, { useContext } from 'react';
import { Table, Container, Row, Col } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { removeItem, clearItems, total, cart } = useContext(CartContext);
  if (total() === 0) {
    return (
      <Container className="mt-5 mb-5">
        <Row style={{ margin: '0 auto' }}>
          <Col
            md={6}
            className="d-flex flex-column justify-content-center align-items-center align-content-center m-auto"
          >
            <h4>Aun no has agregado ningun producto al carrito</h4>
            <Link to={'/'}>
              <button className="btn-agregar">Ir al catalogo</button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <>
        <Container style={{ marginTop: '20px' }}>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th></th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((c) => (
                <tr key={c.id}>
                  <td>
                    <img src={c.img} alt="producto" className="imgCarrito" />
                  </td>
                  <td>{c.description}</td>
                  <td>{c.price}</td>
                  <td>{c.cantidad}</td>
                  <td>{c.price * c.cantidad}</td>
                  <td>
                    <button
                      className="btn-eliminar"
                      onClick={() => removeItem(c.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
        <Container>
          <Row>
            <Col className="d-flex flex-row justify-content-end mb-5">
              <h4>Total ${total()}.-</h4>
              <button className="btn-agregar" onClick={clearItems}>
                Limpiar carrito
              </button>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
};

export default Cart;
