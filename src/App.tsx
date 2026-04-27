import { useState } from "react";
import { createBoard } from "./utils/board";
import type { Board } from "./utils/board";

export default function App() {
  const [board] = useState<Board>(createBoard(3, 4));

  return (
    <div>
      <h1>Sliding Puzzle</h1>
      {board.map((row, r) => (
        <div key={r}>{row.map((tile, c) => ( <span key={c} style={{ margin: 10 }}>
          {tile === null ? "_" : tile}
        </span>
        ))}
        </div>
      ))}
    </div>
  )
}
