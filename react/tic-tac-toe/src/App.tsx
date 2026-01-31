import { useState } from "react";


function Square({ value, onSquareClick }) {

  return <button className="square" onClick={onSquareClick}>{value}</button>;
}

function calculateWinner(squares: []) {
  const lines_winnerIndexes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let index = 0; index < lines_winnerIndexes.length; index++) {

    const [a, b, c] = lines_winnerIndexes[index];
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a]
    }

  }

  return null;
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(index: number) {
    if (squares[index] || calculateWinner(squares)) { // aka "is null?"
      return
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[index] = "X";
    } else {
      nextSquares[index] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares)
  let status
  if (winner) {
    status = 'winner is ' + winner
  } else {
    status = 'next is ' + (xIsNext ? "X" : "O")
  }

  return (
    <>
      <p className="status">{status}</p>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  )
}

export default function Game() {

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const currentSquares = history[history.length - 1]; // last (newest) record

  function handlePlay(nextSquares) {
    setXIsNext(!xIsNext)
    setHistory([...history, nextSquares]);
  }

  const movesHtml = history.map(
    (squares, moveIndex) => {
      let description: string;
      if (moveIndex > 0) {
        description = "go to move #" + moveIndex
      } else {
        description = "go to beginning"
      }

      return (
        <li key={moveIndex} >
          <button onClick={() => alert(squares)}>{description}</button>
        </li>
      )
    })

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{movesHtml}</ol>
      </div>
    </div>
  )
}