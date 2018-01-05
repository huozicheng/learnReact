import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FancyBorder from './FancyBorder';
import SplitPanel from './SplitPanel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FancyBorder color="blue">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </FancyBorder>
        <hr/>
        <SplitPanel
          left={
            <span> something </span>
          }
          right={
            <h1>another thing</h1>
          }
        />

      </div>
    );
  }
}

export default App;
