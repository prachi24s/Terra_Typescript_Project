import { ChessGame, Board, Move } from "../models/chessGame";

const chessGame = new ChessGame();

// Explicitly define the return type as `Board`
export function startGame(): Board {
  return chessGame.board;
}

// Define the return type for `makeMove` as well
export function makeMove(move: Move): { success: boolean; board?: Board; error?: string } {
  const { start, end } = move;
  const [startX, startY] = start;
  const [endX, endY] = end;

  // Validate the move (simplified for demonstration)
  const piece = chessGame.board[startX][startY];
  if (!piece) {
    return { success: false, error: "No piece at the start position" };
  }
  if (piece.isWhite !== chessGame.isWhiteTurn) {
    return { success: false, error: "Not your turn" };
  }

  // Apply move
  chessGame.board[endX][endY] = piece;
  chessGame.board[startX][startY] = null;
  chessGame.isWhiteTurn = !chessGame.isWhiteTurn;

  return { success: true, board: chessGame.board };
}
