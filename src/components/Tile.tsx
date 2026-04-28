import type { Tile as TileType } from "../utils/board";

type Props = {
    value: TileType;
    onClick: () => void; 
};

export default function Tile({ value, onClick }: Props) {
const isEmpty = value === null;

    return (
        <div onClick={!isEmpty ? onClick : undefined}>
            {isEmpty === null ? "_" : value}
        </div>
    );
}
