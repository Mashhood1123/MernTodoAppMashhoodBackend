import express from "express";
import Todo from "../models/todo.js";
const routes = express.Router();

// /todo/add
routes.post("/add", async (req, res) => {
  try {
    if (req.body.name) {
      await Todo.create({ name: req.body.name });
      return res.json({ success: true, message: "Todo added" });
    }
    throw new Error("Invalid Input");
  } catch (err) {
    console.log("ERRPR:", err.message);
    res.status(400).json({ success: false, message: err.message });
  }
});

// /todo/getAll
routes.get("/getAll", async (req, res) => {
  try {
    const bund = await Todo.find({ isDeleted: false });
    res.json({ success: true, message: "Data Fetched", data: bund });
  } catch (err) {
    console.log("ERRPR:", err.message);
    res.status(400).json({ success: false, message: err.message });
  }
});

// /todo/:id
// /todo?id=10&name=moeez
routes.delete("/:id", async (req, res) => {
  try {
    // const id = req.params.id
    const { id } = req.params;
    // await Todo.findOneAndDelete({ _id: id });
    await Todo.findOneAndUpdate({ _id: id }, { isDeleted: true });
    res.json({ success: true, message: "Successfully deleted" });
  } catch (err) {
    console.log("ERRPR:", err.message);
    res.status(400).json({ success: false, message: err.message });
  }
});

routes.put("/update", async (req, res) => {
  try {
    const { id, updatedName } = req.body;
    await Todo.findOneAndUpdate({ _id: id }, { name: updatedName });
    res.json({ success: true, message: "Successfully deleted" });
  } catch (err) {
    console.log("ERRPR:", err.message);
    res.status(400).json({ success: false, message: err.message });
  }
});

export default routes;
