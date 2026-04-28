import type { Board as BoardType } from "../utils/board";
import Tile from "./Tile";

type Props = {
    board: BoardType;
    onTileClick: (row: number, col: number) => void;
};

export default function Board({ board, onTileClick }: Props) {
    return (
        <div>
            {board.map((row, r) => (
                <div key={r}>
                    {row.map((tile, c) => (<Tile key={c} value={tile} onClick={() => onTileClick(r, c)} />))}
                </div>
            ))}
        </div>
    )
}