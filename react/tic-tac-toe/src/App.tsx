import { useState } from "react";


function Square({ value, onSquareClick }) {

  return <button className="square" onClick={onSquareClick}>{value}</button>;
}

export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  
  function handleClick(index: number) {
    const nextSquares = squares.slice();
    nextSquares[index] = "X";
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={function handleClick0() { handleClick(0) }} />
        <Square value={squares[1]} onSquareClick={function handleClick1() { handleClick(1) }} />
        <Square value={squares[2]} onSquareClick={function handleClick2() { handleClick(2) }} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={function handleClick3() { handleClick(3) }} />
        <Square value={squares[4]} onSquareClick={function handleClick4() { handleClick(4) }} />
        <Square value={squares[5]} onSquareClick={function handleClick5() { handleClick(5) }} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={function handleClick6() { handleClick(6) }} />
        <Square value={squares[7]} onSquareClick={function handleClick7() { handleClick(7) }} />
        <Square value={squares[8]} onSquareClick={function handleClick8() { handleClick(8) }} />
      </div>
    </>
  )
}