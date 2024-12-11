"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chessController_1 = require("../controllers/chessController");
const router = express_1.default.Router();
router.post("/start", (req, res) => {
    res.json({ board: (0, chessController_1.startGame)() });
});
router.post("/move", (req, res) => {
    const result = (0, chessController_1.makeMove)(req.body);
    if (!result.success) {
        res.status(400).json(result);
    }
    else {
        res.json(result);
    }
});
exports.default = router;
//# sourceMappingURL=chessRoutes.js.map