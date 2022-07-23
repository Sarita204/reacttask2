import React, { Component } from 'react';
import './App.css';
import Greet from './components/greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet />
        <hr></hr>
        <Welcome />
        <hr></hr>
        <Hello />
      </div>
    );
  }
}
export default App;