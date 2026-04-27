export type Tile = number | null;

export type Board = Tile[][];

export type Position = {
    row: number;
    col: number;
};

export function createBoard(rows: number, cols: number): Board {
    const numbers = Array.from({ length: rows * cols -1 }, (_, i) => i +1);

    numbers.push(null);

    const board: Board = [];
    let index = 0;

    for (let r = 0; r < rows; r++) {
        const row: Tile[] = [];

        for (let c = 0; c < cols; c++) {
            row.push(numbers[index]);
            index++;
        }
        board.push(row);
    }
    return board;
}