"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupChessSocket = setupChessSocket;
const chessGame_1 = require("../models/chessGame");
const gameRooms = {};
function setupChessSocket(io) {
    io.on("connection", (socket) => {
        console.log(`User connected: ${socket.id}`);
        socket.on("joinGame", (roomId) => {
            if (!gameRooms[roomId]) {
                gameRooms[roomId] = {
                    id: roomId,
                    players: { white: socket.id },
                    game: new chessGame_1.ChessGame(),
                };
                console.log(`Room ${roomId} created with player white: ${socket.id}`);
            }
            else if (!gameRooms[roomId].players.black) {
                gameRooms[roomId].players.black = socket.id;
                console.log(`Player black joined room ${roomId}: ${socket.id}`);
            }
            else {
                socket.emit("error", "Room is full");
                return;
            }
            socket.join(roomId);
            io.to(roomId).emit("updateBoard", gameRooms[roomId].game.board);
        });
        socket.on("makeMove", ({ roomId, move }) => {
            const gameRoom = gameRooms[roomId];
            if (!gameRoom) {
                socket.emit("error", "Invalid room");
                return;
            }
            const player = gameRoom.players.white === socket.id ? "white" : "black";
            const isWhiteTurn = gameRoom.game.isWhiteTurn;
            if ((player === "white" && !isWhiteTurn) || (player === "black" && isWhiteTurn)) {
                socket.emit("error", "Not your turn");
                return;
            }
            const { success, error } = processMove(gameRoom.game, move);
            if (!success) {
                socket.emit("error", error);
                return;
            }
            io.to(roomId).emit("updateBoard", gameRoom.game.board);
        });
        socket.on("disconnect", () => {
            console.log(`User disconnected: ${socket.id}`);
            for (const roomId in gameRooms) {
                const room = gameRooms[roomId];
                if (room.players.white === socket.id) {
                    room.players.white = undefined;
                }
                else if (room.players.black === socket.id) {
                    room.players.black = undefined;
                }
                if (!room.players.white && !room.players.black) {
                    delete gameRooms[roomId];
                    console.log(`Room ${roomId} deleted`);
                }
            }
        });
    });
}
function processMove(game, move) {
    const { start, end } = move;
    const [startX, startY] = start;
    const [endX, endY] = end;
    const piece = game.board[startX][startY];
    if (!piece) {
        return { success: false, error: "No piece at start position" };
    }
    if (piece.isWhite !== game.isWhiteTurn) {
        return { success: false, error: "Not your turn" };
    }
    game.board[endX][endY] = piece;
    game.board[startX][startY] = null;
    game.isWhiteTurn = !game.isWhiteTurn;
    return { success: true };
}
//# sourceMappingURL=chessSocket.js.map