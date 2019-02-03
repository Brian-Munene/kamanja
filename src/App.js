import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from './Contacts';
import Location from './Location';
import About from './About';
import Home from './Home';
import ObjectKey from './ObjectKey';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
           Welcome to Kamanja Plan printers.
          </h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Home />
        <About />
        <ObjectKey />
        <Location />
        <Contacts />
      </div>

    );
  }
}

export default App;
