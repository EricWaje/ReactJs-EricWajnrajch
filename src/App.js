import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Slides from './components/Carousel/Slides';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Info from './components/Info/Info';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Slides />
      <Info />
      <ItemListContainer />
      <Footer />
    </>
  );
}

export default App;
