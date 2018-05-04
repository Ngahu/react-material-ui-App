import React, { Component } from 'react';

import './App.css';

import Nav from './components/navigation/Nav';
import Slider from './components/slider/Slider';

class App extends Component {
  render() {
    return (
     
      <div className="App">
       <Nav/>
       <Slider/>
      </div>
      
    );
  }
}

export default App;
