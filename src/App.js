import React, { Component } from 'react';
import "./App.css";
import Todolist from "./Todolist";

class App extends Component{
  render(){
    return(
      <div className="App">
        <Todolist></Todolist>
      </div>  
    );
  }
}

export default App;
