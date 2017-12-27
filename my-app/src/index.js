import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

/**
 * Calculate the winner, return null if there is none.
 * Return the winner representative if there is one.
 * @param {String[]} squares 
 * @return String
 */
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square 
              value={this.props.squares[i]}
              onClick={()=>this.props.handleClick(i)}
            />;
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class JumpButton extends React.Component {
  render() {
    return (
      <button onClick={()=>this.props.jump(this.props.status)}>{this.props.value}</button>
    )
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),      
      history: [{
        squares: Array(9).fill(null),
        xIsNext: true
      }],
      xIsNext: true
    }
  }

  updateHistory(step) {
    const history = this.state.history.slice();
    history.push(step);

    this.setState({
      history: history
    });
  }


  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X': 'O';
    this.updateHistory({squares: squares, xIsNext: !this.state.xIsNext});
    this.setState({squares: squares, xIsNext: !this.state.xIsNext});
  }

  onJump(status) {
    const squares = status.squares.slice();

    this.setState({squares: squares, xIsNext: status.xIsNext});
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }
    
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={this.state.squares} handleClick={(i)=>this.handleClick(i)}/>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>
            {this.state.history.map((his, index) => <li><JumpButton status={his} value={index} jump={(status)=>this.onJump(status)}/></li>)}
          </ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
