import { Board, Move } from "../models/chessGame";
export declare function startGame(): Board;
export declare function makeMove(move: Move): {
    success: boolean;
    board?: Board;
    error?: string;
};
//# sourceMappingURL=chessController.d.ts.map