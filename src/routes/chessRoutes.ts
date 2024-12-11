import express from "express";
import { startGame, makeMove } from "../controllers/chessController";

const router = express.Router();

router.post("/start", (req, res) => {
  res.json({ board: startGame() });
});

router.post("/move", (req, res) => {
  const result = makeMove(req.body);
  if (!result.success) {
    res.status(400).json(result);
  } else {
    res.json(result);
  }
});

export default router;
