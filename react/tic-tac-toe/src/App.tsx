import { useState } from "react";


function Square({ value, onSquareClick, isHighlighted = false }) {
  if (isHighlighted) {
    return <button className="square square-highlighted" onClick={onSquareClick}>{value}</button>;
  }
  return <button className="square" onClick={onSquareClick}>{value}</button>;
}

function calculateWinnerIndexes(squares: []) {
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
      return lines_winnerIndexes[index]
    }

  }

  return [];
}

function Board({ xIsNext, squares, onPlay }) {
  const ROWS = 3
  const COLS = 3

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

  const winnerSquareIndexes: number[] = calculateWinnerIndexes(squares);
  const winner = squares[winnerSquareIndexes[0]];

  let status
  if (winner) {
    status = 'winner is ' + winner
  } else {
    status = 'next is ' + (xIsNext ? "X" : "O")
  }

  function renderSquares(nRows = 3, nCols = 3) {
    let rowsHtml = [];
    for (let indexRow = 0; indexRow < nRows; indexRow++) {

      let squaresHtml = [];
      for (let indexCol = 0; indexCol < nCols; indexCol++) {
        let squareIndex: number = indexRow * nRows + indexCol;
        const isHighlighted: boolean = winnerSquareIndexes.includes(squareIndex)

        squaresHtml.push(<Square key={squareIndex} value={squares[squareIndex]} onSquareClick={() => handleClick(squareIndex)} isHighlighted={isHighlighted} />)
      }

      rowsHtml.push(
        <div className="board-row">
          {squaresHtml}
        </div>
      )
    }
    return rowsHtml
  }

  return (
    <>
      <p className="status">{status}</p>
      {renderSquares(ROWS, COLS)}
    </>
  )
}

export default function Game() {

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = (currentMove % 2 === 0);
  const currentSquares = history[currentMove];

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove)
  }

  function handlePlay(nextSquares) {
    const relevantHistory = history.slice(0, currentMove + 1)
    const nextHistory = [...relevantHistory, nextSquares];

    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  const movesHtml = history.map(
    (squares, moveIndex) => {

      let description: string;
      if (moveIndex === currentMove) {
        description = "go to move #" + moveIndex + " (you are here)"
      } else if (moveIndex > 0) {
        description = "go to move #" + moveIndex
      } else {
        description = "go to beginning"
      }

      return (
        <li key={moveIndex} >
          <button onClick={() => jumpTo(moveIndex)}>{description}</button>
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