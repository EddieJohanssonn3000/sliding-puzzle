import { useState } from "react";
import { createBoard, moveTiles, isBoardSolved, shuffleBoard } from "./utils/board";
import type { Board as BoardType } from "./utils/board";
import Board from "./components/Board";
import "./App.css";

export default function App() {
  const [board, setBoard] = useState<BoardType>(() => 
    shuffleBoard(createBoard(3, 5))
  );
  const [isWon, setIsWon] = useState(false);
  
  function handleTileClick(row: number, col: number) {
    if (isWon) return;
    
    const newBoard = moveTiles(board, { row, col });
    setBoard(newBoard);
    
    if (isBoardSolved(newBoard)) {
      setIsWon(true);
    }
  }

  function handleShuffle() {
    setBoard(shuffleBoard(createBoard(3, 5)));
    setIsWon(false);
  }

  return (
    <div className="container">
      <h1>Sliding Puzzle</h1>
      <Board board={board} onTileClick={handleTileClick} />
      <button onClick={handleShuffle} className="shuffle-btn">
        Slumpa
      </button>
      {isWon && <div className="win-message">🎉 Du vann!</div>}
    </div>
  )
}