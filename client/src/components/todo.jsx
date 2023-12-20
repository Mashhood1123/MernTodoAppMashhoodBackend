import { useEffect, useState } from "react";
import { deleteTodoFunc, updateTodoFunc } from "../api";

const Todo = ({ id, name, fetchTodos }) => {
  const [editable, setEditable] = useState(false);
  const [editableText, setEditableText] = useState();

  const editTodo = () => {
    setEditable(true);
  };
  const deleteTodo = async () => {
    await deleteTodoFunc(id);
    await fetchTodos();
  };
  const cancelEdit = async () => {
    setEditable(false);
  };
  const updateTodo = async () => {
    await updateTodoFunc(id,editableText);
    await fetchTodos();
    console.log(fetchTodos);
    setEditable(false);
  };
  const handleEdiText = async (e) => {
    setEditableText(e.target.value);
  };
  useEffect(() => {
    setEditableText(name);
  }, [name]);

  return editable ? (
    <div>
      <input value={editableText} onChange={handleEdiText} />
      <div>
        <button onClick={cancelEdit}>Cancel</button>
        <button onClick={updateTodo}>Update</button>
      </div>
    </div>
  ) : (
    <div>
      <div>{name}</div>
      <div>
        <button onClick={editTodo}>edit</button>
        <button onClick={deleteTodo}>delete</button>
      </div>
    </div>
  );
};

export default Todo;
  