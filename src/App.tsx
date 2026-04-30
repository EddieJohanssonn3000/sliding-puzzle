import { useState } from "react";
import { createBoard, moveTiles, isBoardSolved, shuffleBoard } from "./utils/board";
import type { Board as BoardType } from "./utils/board";
import Board from "./components/Board";
import "./App.css";


const ROWS = 3; // Configuration - Change these values to adjust puzzle size
const COLS = 5;

export default function App() {
  const [board, setBoard] = useState<BoardType>(() => 
    shuffleBoard(createBoard(ROWS, COLS))
  );
  const [isWon, setIsWon] = useState(false); // Track if the puzzle has been solved
  
  function handleTileClick(row: number, col: number) {
    if (isWon) return;
    
    const newBoard = moveTiles(board, { row, col });
    setBoard(newBoard);
    
    if (isBoardSolved(newBoard)) {
      setIsWon(true);
    }
  }

  function handleShuffle() {
    setBoard(shuffleBoard(createBoard(ROWS, COLS))); // Shuffle the board and reset win state
    setIsWon(false);
  }

  return (
    <div className="container">
      <h1>Sliding Puzzle</h1>
      <p>a codetest by Eddie Johansson</p>
      <Board board={board} onTileClick={handleTileClick} />
      <button onClick={handleShuffle} className="shuffle-btn">
        Shuffle
      </button>
      {isWon && <div className="win-message">You made it!</div>}
    </div>
  )
}