"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChessGame = void 0;
class ChessGame {
    constructor() {
        this.board = this.initializeBoard();
        this.isWhiteTurn = true;
    }
    initializeBoard() {
        const emptyRow = Array(8).fill(null);
        const pawnsRow = (isWhite) => Array(8).fill({ type: "Pawn", isWhite });
        return [
            this.createRow(false, ["Rook", "Knight", "Bishop", "Queen", "King", "Bishop", "Knight", "Rook"]),
            pawnsRow(false),
            emptyRow,
            emptyRow,
            emptyRow,
            emptyRow,
            pawnsRow(true),
            this.createRow(true, ["Rook", "Knight", "Bishop", "Queen", "King", "Bishop", "Knight", "Rook"]),
        ];
    }
    createRow(isWhite, types) {
        return types.map((type) => ({ type, isWhite }));
    }
}
exports.ChessGame = ChessGame;
//# sourceMappingURL=chessGame.js.map