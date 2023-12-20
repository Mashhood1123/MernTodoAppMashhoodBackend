import { useEffect, useState } from "react";
import Todo from "./components/todo";
import "./App.css";
import { createTodo, fetchAllTodos } from "./api";

function App() {
  const [todo, setTodo] = useState("");
  const [data, setData] = useState([]);
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = async () => {
    try {
      if (!todo) {
        return null;
      }
      await createTodo(todo);
      setTodo("");
      await fetchTodos();
    } catch (err) {
      console.log("ERROR:", err.message);
    }
  };

  const fetchTodos = async () => {
    try {
      const lund = await fetchAllTodos();
      setData(lund.data);
    } catch (err) {
      console.log("ERROR:", err.message);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="App">
      <input value={todo} onChange={handleChange} />
      <button disabled={!todo} onClick={addTodo}>
        Add
      </button>
      <div className="todo-container">
        {data.map((obj) => (
          <Todo
            fetchTodos={fetchTodos}
            key={obj._id}
            id={obj._id}
            name={obj.name}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

