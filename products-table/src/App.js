import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBox from './SearchBox';
import List from './List';

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      rawData: props.data,
      availableData: props.data
    }

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    const searchName = event.target.value;

    this.setState({
      availableData: this.state.rawData.filter((item)=>item.name.indexOf(searchName) > -1)
    })
  }

  render() {
    return (
      <div className="SearchProduct">
        <SearchBox onSearchChange={this.onSearchChange}/>
        <hr/>
        <List available={this.state.availableData}/>
      </div>
    );
  }
}

export default App;
