import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date().toLocaleTimeString()
    }

    this.tick();
  }

  tick() {
    setInterval(()=> {
      this.setState({
        time: new Date().toLocaleTimeString()
      })
    }, 1000)
  }

  render() {
    return (
      <div className="App">
        <Clock time={this.state.time}/>
      </div>
    );
  }
}

export default App;
