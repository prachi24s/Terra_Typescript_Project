"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chessGame_1 = require("../models/chessGame");
test("Initial board setup", () => {
    var _a, _b;
    const game = new chessGame_1.ChessGame();
    expect((_a = game.board[1][0]) === null || _a === void 0 ? void 0 : _a.type).toBe("Pawn");
    expect((_b = game.board[6][0]) === null || _b === void 0 ? void 0 : _b.type).toBe("Pawn");
});
//# sourceMappingURL=chessGame.test.js.map