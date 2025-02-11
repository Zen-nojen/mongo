import express from "express";
import mongoose from "mongoose";
import Task from "./task.js";
import { DATABASE_URL } from "./env.js";

export const PORT = 3000;

const app = express();
app.use(express.json());

await mongoose.connect(DATABASE_URL);

app.post("/tasks", async (req, res) => {
  const data = req.body;
  console.log(data);
  const newTask = await Task.create(data);
  console.log(newTask);
  res.status(201).send(newTask);
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
