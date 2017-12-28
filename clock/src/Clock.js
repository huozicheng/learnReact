import React, { Component } from 'react';

class Clock extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    }
  }

  componentDidMount() {
    this.setState({
      tickProcess: setInterval(this.tick.bind(this), 1000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.tickProcess);
  }

  tick() {
    this.setState({
      time: new Date()
    })
  }

  render() {
    return (
      <div>
        <h3> Current time is: </h3>
        <h2> {this.state.time.toLocaleTimeString()} </h2>
      </div>
    )
  }
}

export default Clock;
