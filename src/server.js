import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import todoRoutes from "./routes/todo.routes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/todos", todoRoutes);

// Health check (nice touch for production)
app.get("/", (req, res) => {
  res.send("🚀 Todo API is running");
});

// Start server
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🔥 Server running on http://localhost:${PORT}`);
});