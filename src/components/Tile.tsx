import type { Tile as TileType } from "../utils/board";
import styles from "./Tile.module.css";

type Props = {
    value: TileType;
    onClick: () => void; 
};

export default function Tile({ value, onClick }: Props) {
const isEmpty = value === null;

const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isEmpty && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      onClick();
    }
  };

    return (
        <div
        className={`${styles.tile} ${isEmpty ? styles.empty : styles.filled}`}
        onClick={!isEmpty ? onClick : undefined}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={isEmpty ? -1 : 0}
        aria-label={isEmpty ? "Empty" : `Tile ${value}`}
      >
        {isEmpty ? "-" : value}
      </div>
    );
}
