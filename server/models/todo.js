import mongoose, { Schema } from "mongoose";
// model or document
const Todo = mongoose.model(
  "Todo",
  new Schema(
    {
      name: String,
      isDeleted: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
    }
  )
);

export default Todo;