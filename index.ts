import "dotenv/config";
import express from "express";
import { PrismaClient } from "@prisma/client";
import { prismaConfig } from "./prisma/prisma.config";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const prisma = new PrismaClient(prismaConfig);

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("API is running"));

// Get all todos
app.get("/todos", async (req, res) => {
  const todos = await prisma.todo.findMany();
  res.json(todos);
});

// Create a todo
app.post("/todos", async (req, res) => {
  const { title, userId } = req.body;
  const todo = await prisma.todo.create({
    data: { title, userId },
  });
  res.json(todo);
});

// Update todo
app.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  const todo = await prisma.todo.update({
    where: { id: Number(id) },
    data: { title, completed },
  });
  res.json(todo);
});

// Delete todo
app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.todo.delete({ where: { id: Number(id) } });
  res.json({ message: "Deleted successfully" });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
