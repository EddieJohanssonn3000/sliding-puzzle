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

  export function isBoardSolved(board: Board): boolean {
    let expectedNumber = 1;
    
    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[0].length; c++) {
        const tile = board[r][c];
        
        if (r === board.length - 1 && c === board[0].length - 1) {
          return tile === null;
        }
        
        if (tile !== expectedNumber) {
          return false;
        }
        
        expectedNumber++;
      }
    }
    
    return true;
  }

export function shuffleBoard(board: Board): Board {
  let newBoard = board.map(row => [...row]);
  const moves = 200; 
  
  let emptyPos: Position | null = null;

  for (let r = 0; r < newBoard.length; r++) {
    for (let c = 0; c < newBoard[0].length; c++) {
      if (newBoard[r][c] === null) {
        emptyPos = { row: r, col: c };
      }
    }
  }
  
  for (let i = 0; i < moves; i++) {
    const validMoves: Position[] = [];
    
    if (emptyPos!.row > 0) validMoves.push({ row: emptyPos!.row - 1, col: emptyPos!.col });
    if (emptyPos!.row < newBoard.length - 1) validMoves.push({ row: emptyPos!.row + 1, col: emptyPos!.col });
    if (emptyPos!.col > 0) validMoves.push({ row: emptyPos!.row, col: emptyPos!.col - 1 });
    if (emptyPos!.col < newBoard[0].length - 1) validMoves.push({ row: emptyPos!.row, col: emptyPos!.col + 1 });
    
    const randomMove = validMoves[Math.floor(Math.random() * validMoves.length)];
    
    [newBoard[emptyPos!.row][emptyPos!.col], newBoard[randomMove.row][randomMove.col]] = 
    [newBoard[randomMove.row][randomMove.col], newBoard[emptyPos!.row][emptyPos!.col]];
    
    emptyPos = randomMove;
  }
  
  return newBoard;
}