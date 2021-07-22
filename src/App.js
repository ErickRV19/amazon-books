import React from 'react';
import './App.css';

import Menu from './components/Menu/Menu'
import List from './components/List/List'


class App extends React.Component {

  constructor(props){
    super(props);

    this.state={
      
    }
  }


  render(){

    return(
      <div className="app">
      <Menu title="Bookstore"/>
      <List />
      
      </div>
  );
}
  
}

export default App;
