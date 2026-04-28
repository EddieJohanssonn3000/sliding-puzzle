import { useState } from "react";
import { createBoard, moveTiles } from "./utils/board";
import type { Board as BoardType } from "./utils/board";
import Board from "./components/Board";

export default function App() {
  const [board, setBoard] = useState<BoardType>(createBoard(3, 5));
  
  function handleTileClick(row: number, col: number) {
    const newBoard = moveTiles(board, { row, col });
    setBoard(newBoard);
  }

  return (
    <div>
      <h1>Sliding Puzzle</h1>
      <Board board={board} onTileClick={handleTileClick} />
    </div>
  )
}
