import React, { Component } from 'react';

class Clock extends Component {
  render() {
    return (
      <div>
        <h3> Current time is: </h3>
        <h2> {this.props.time} </h2>
      </div>
    )
  }
}

export default Clock;
