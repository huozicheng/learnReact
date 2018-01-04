import React, { Component } from 'react';
import logo from './logo.svg';
import List from './List';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: [{a:1}, {a:2}, {a:3}, {a:4}, {a:5}]
    }
  }

  onButtonClick = () => {
    this.setState({
      values: [{a:6},{a:7},{a:8},{a:9},{a:10}]
    });
  }

  render() {
    return (
      <div>
        <ol>
          {this.state.values.map((v)=><List value={v.a}></List>)}
        </ol>
        <button onClick={this.onButtonClick}>Change Value</button>
      </div>
    );
  }
}

export default App;
