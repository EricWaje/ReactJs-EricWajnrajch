import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Fondo from './components/Fondo/Fondo';
import ItemListContainer from './components/Item/Container/ItemListContainer';
import Info from './components/Info/Info';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/Item/Container/ItemDetailContainer';
import Contacto from './pages/Contacto';
import Registrate from './pages/Registrate';
import Cart from './components/CartWidget/Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/registrate">
            <Registrate />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
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
    </>
  );
}

export default App;
