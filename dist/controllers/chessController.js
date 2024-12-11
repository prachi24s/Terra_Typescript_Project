"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startGame = startGame;
exports.makeMove = makeMove;
const chessGame_1 = require("../models/chessGame");
const chessGame = new chessGame_1.ChessGame();
function startGame() {
    return chessGame.board;
}
function makeMove(move) {
    const { start, end } = move;
    const [startX, startY] = start;
    const [endX, endY] = end;
    const piece = chessGame.board[startX][startY];
    if (!piece) {
        return { success: false, error: "No piece at the start position" };
    }
    if (piece.isWhite !== chessGame.isWhiteTurn) {
        return { success: false, error: "Not your turn" };
    }
    chessGame.board[endX][endY] = piece;
    chessGame.board[startX][startY] = null;
    chessGame.isWhiteTurn = !chessGame.isWhiteTurn;
    return { success: true, board: chessGame.board };
}
//# sourceMappingURL=chessController.js.map