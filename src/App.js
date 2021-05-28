import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Fondo from './components/Fondo/Fondo';
import ItemListContainer from './components/Item/Container/ItemListContainer';
import Info from './components/Info/Info';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/Item/Container/ItemDetailContainer';
import Cart from './components/CartWidget/Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer />
            </Route>
            <Route path="/category/:id">
              <ItemListContainer />
            </Route>
            <Route path="/">
              <Fondo />
              <Info />
              <ItemListContainer />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
