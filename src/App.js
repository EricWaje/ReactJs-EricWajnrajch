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
import { UserProvider } from './context/UserContext';
//import PrivateRoute from './PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <>
      <UserProvider>
        <CartProvider>
          <Router>
            <NavBar />
            <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route path="/cart" component={Cart} />
              <Route path="/item/:id" component={ItemDetailContainer} />
              <Route path="/category/:id" component={ItemListContainer} />
              <Route path="/">
                <Fondo />
                <Info />
                <ItemListContainer />
              </Route>
            </Switch>
            <Footer />
          </Router>
        </CartProvider>
      </UserProvider>
    </>
  );
}

export default App;
