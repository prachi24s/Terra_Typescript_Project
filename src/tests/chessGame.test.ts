import { ChessGame } from "../models/chessGame";

test("Initial board setup", () => {
  const game = new ChessGame();
  expect(game.board[1][0]?.type).toBe("Pawn"); // Black pawn
  expect(game.board[6][0]?.type).toBe("Pawn"); // White pawn
});
