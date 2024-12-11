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
declare class ChessGame {
    board: Board;
    isWhiteTurn: boolean;
    constructor();
    private initializeBoard;
    private createRow;
}
export { ChessGame, Move };
//# sourceMappingURL=chessGame.d.ts.map