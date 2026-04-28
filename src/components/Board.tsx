import type { Board as BoardType } from "../utils/board";
import Tile from "./Tile";import styles from "./Board.module.css";

type Props = {
    board: BoardType;
    onTileClick: (row: number, col: number) => void;
};

export default function Board({ board, onTileClick }: Props) {
    return (
      <div
        className={styles.board}
        style={{
          gridTemplateColumns: `repeat(${board[0].length}, 80px)`
        }}
      >
        {board.map((row, r) =>
          row.map((tile, c) => (
            <Tile
              key={`${r}-${c}`}
              value={tile}
              onClick={() => onTileClick(r, c)}
            />
          ))
        )}
      </div>
    );
  }