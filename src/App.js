import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Slides from './components/Carousel/Slides';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <Slides />
      <ItemListContainer />
    </>
  );
}

export default App;
