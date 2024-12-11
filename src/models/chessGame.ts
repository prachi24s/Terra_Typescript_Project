type Piece = "Pawn" | "Rook" | "Knight" | "Bishop" | "Queen" | "King";

interface ChessPiece {
  type: Piece;
  isWhite: boolean;
}

export type Board = (ChessPiece | null)[][];

interface Move {
  start: [number, number];
  end: [number, number];
}

class ChessGame {
  board: Board;
  isWhiteTurn: boolean;

  constructor() {
    this.board = this.initializeBoard();
    this.isWhiteTurn = true;
  }

  private initializeBoard(): Board {
    const emptyRow = Array(8).fill(null);
    const pawnsRow = (isWhite: boolean) => Array(8).fill({ type: "Pawn", isWhite });

    return [
      // Black pieces
      this.createRow(false, ["Rook", "Knight", "Bishop", "Queen", "King", "Bishop", "Knight", "Rook"]),
      pawnsRow(false),
      emptyRow,
      emptyRow,
      emptyRow,
      emptyRow,
      pawnsRow(true),
      // White pieces
      this.createRow(true, ["Rook", "Knight", "Bishop", "Queen", "King", "Bishop", "Knight", "Rook"]),
    ];
  }

  private createRow(isWhite: boolean, types: Piece[]): ChessPiece[] {
    return types.map((type) => ({ type, isWhite }));
  }
}

export { ChessGame, Move };
