import express from "express";
import chessRoutes from "./routes/chessRoutes";

const app = express();
app.use(express.json());
app.use("/api/chess", chessRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
