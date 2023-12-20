import { BASE_URL } from "../constants";

export const createTodo = async (name) => {
  const response = await fetch(`${BASE_URL}/todo/add`, {
    method: "POST",
    body: JSON.stringify({ name }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const fetchAllTodos = async () => {
  const response = await fetch(`${BASE_URL}/todo/getAll`); //[]
  return response.json();
};

export const deleteTodoFunc = async (id) => {
  const response = await fetch(`${BASE_URL}/todo/${id}`, {
    method: "DELETE",
  }); //[]
  return response.json();
};

export const updateTodoFunc = async (id, updatedName) => {
  const response = await fetch(`${BASE_URL}/todo/update`, {
    method: "PUT",
    body: JSON.stringify({
      id,
      updatedName,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }); //[]
  return response.json();
};
