import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import image from './image.png';


class App extends Component {
  render() {
    return (
      <div className="App">
        <img className="Img" src={image} alt="" />
      </div>
    );
  }
}

export default App;
