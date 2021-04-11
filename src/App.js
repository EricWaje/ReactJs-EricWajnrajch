import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <ItemListContainer text={'E-Commerce de ropa Endavant'} />
    </React.Fragment>
  );
}

export default App;
