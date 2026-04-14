import * as todoService from "../services/todo.service.js";

export const getTodos = async (req, res) => {
  try {
    const todos = await todoService.getTodos();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
};

export const createTodo = async (req, res) => {
  try {
    const { title } = req.body;

    const todo = await todoService.createTodo({
      title
    });

    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ error: "Failed to create todo" });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await todoService.updateTodo(id, req.body);

    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: "Failed to update todo" });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    await todoService.deleteTodo(id);

    res.json({ message: "Todo deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete todo" });
  }
};