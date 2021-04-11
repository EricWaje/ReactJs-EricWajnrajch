import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <ItemListContainer />
    </React.Fragment>
  );
}

export default App;
