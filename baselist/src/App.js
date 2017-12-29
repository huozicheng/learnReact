import React, { Component } from 'react';
import logo from './logo.svg';
import List from './List';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: [1, 2, 3, 4, 5]
    }
  }

  onButtonClick = () => {
    debugger
    this.setState({
      values: [6,7,8,9,10]
    });
  }

  render() {
    return (
      <div>
        <ol>
          {this.state.values.map((v)=><List value={v}></List>)}
        </ol>
        <button onClick={this.onButtonClick}>Change Value</button>
      </div>
    );
  }
}

export default App;
