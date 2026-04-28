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

export function moveTiles(
    board: Board,
    tilePos: Position
  ): Board {
    const newBoard = board.map(row => [...row]);
  
    let empty: Position | null = null;
  
    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[0].length; c++) {
        if (board[r][c] === null) {
          empty = { row: r, col: c };
        }
      }
    }
  
    if (!empty) return board;
  
    if (
      tilePos.row !== empty.row &&
      tilePos.col !== empty.col
    ) {
      return board;
    }
  
    if (tilePos.row === empty.row) {
      const row = tilePos.row;
  
      if (tilePos.col < empty.col) {
        for (let c = empty.col; c > tilePos.col; c--) {
          newBoard[row][c] = newBoard[row][c - 1];
        }
      } else {
        for (let c = empty.col; c < tilePos.col; c++) {
          newBoard[row][c] = newBoard[row][c + 1];
        }
      }
  
      newBoard[row][tilePos.col] = null;
    }
  
    if (tilePos.col === empty.col) {
      const col = tilePos.col;
  
      if (tilePos.row < empty.row) {
        for (let r = empty.row; r > tilePos.row; r--) {
          newBoard[r][col] = newBoard[r - 1][col];
        }
      } else {
        for (let r = empty.row; r < tilePos.row; r++) {
          newBoard[r][col] = newBoard[r + 1][col];
        }
      }
  
      newBoard[tilePos.row][col] = null;
    }
  
    return newBoard;
  }