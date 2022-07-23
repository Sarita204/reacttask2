import React, { Component } from 'react';
import './App.css';
import greet from './components/greet'

class App extends Component {
  render() {
    return (
      <div className="App">
        <greet />
      </div>
    );
  }
}
export default greet;