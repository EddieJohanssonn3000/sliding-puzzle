import { useState } from "react";
import { createBoard } from "./utils/board";
import type { Board as BoardType } from "./utils/board";
import Board from "./components/Board";

export default function App() {
  const [board] = useState<BoardType>(createBoard(3, 4));
  
  function handleTileClick(row: number, col: number) {
    console.log("clicked", row, col);
  }

  return (
    <div>
      <h1>Sliding Puzzle</h1>
      <Board board={board} onTileClick={handleTileClick} />
    </div>
  )
}
