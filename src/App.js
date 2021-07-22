import React from 'react';
import './App.css';

import Menu from './components/Menu/Menu'
import List from './components/List/List'


function App() {
  return(
    <div className="app">
      <Menu title="Bookstore"/>
      <List />
      
    </div>
  );
  
}

export default App;
