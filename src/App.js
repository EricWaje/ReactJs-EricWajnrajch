import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Slides from './components/Carousel/Slides';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Info from './components/Info/Info';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/:category/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/items">
            <ItemListContainer />
          </Route>
          <Route path="/">
            <Slides />
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
