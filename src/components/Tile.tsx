import type { Tile as TileType } from "../utils/board";
import styles from "./Tile.module.css";

type Props = {
    value: TileType;
    onClick: () => void; 
};

export default function Tile({ value, onClick }: Props) {
const isEmpty = value === null;

    return (
        <div  className={`${styles.tile} ${
            isEmpty ? styles.empty : styles.filled
          }`}
        onClick={!isEmpty ? onClick : undefined}>
            {isEmpty ? "_" : value}
        </div>
    );
}
