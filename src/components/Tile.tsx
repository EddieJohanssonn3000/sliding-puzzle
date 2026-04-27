import type { Tile as TileType } from "../utils/board";

type Props = {
    value: TileType;
};

export default function Tile({ value }: Props) {
    return (
        <div>
            {value === null ? "_" : value}
        </div>
    );
}
