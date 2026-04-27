import type { Board as BoardType } from "../utils/board";
import Tile from "./Tile";

type Props = {
    board: BoardType;
};

export default function Board({ board }: Props) {
    return (
        <div>
            {board.map((row, r) => (
                <div key={r}>
                    {row.map((tile, c) => (<Tile key={c} value={tile} />))}
                </div>
            ))}
        </div>
    )
}