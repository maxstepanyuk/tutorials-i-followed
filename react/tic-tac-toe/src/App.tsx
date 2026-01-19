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

  function handleClick0() { handleClick(0) }
  function handleClick1() { handleClick(1) }
  function handleClick2() { handleClick(2) }
  function handleClick3() { handleClick(3) }
  function handleClick4() { handleClick(4) }
  function handleClick5() { handleClick(5) }
  function handleClick6() { handleClick(6) }
  function handleClick7() { handleClick(7) }
  function handleClick8() { handleClick(8) }


  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick0} />
        <Square value={squares[1]} onSquareClick={handleClick1} />
        <Square value={squares[2]} onSquareClick={handleClick2} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={handleClick3} />
        <Square value={squares[4]} onSquareClick={handleClick4} />
        <Square value={squares[5]} onSquareClick={handleClick5} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={handleClick6} />
        <Square value={squares[7]} onSquareClick={handleClick7} />
        <Square value={squares[8]} onSquareClick={handleClick8} />
      </div>
    </>
  )
}