import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AddNew from "./components/AddNew/AddNew";
import { Todo } from "./interfaces";
import Content from "./components/Content/Content";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (!storedTodos) return;
    const todolist = JSON.parse(storedTodos);
    setTodos(todolist);
  }, []);

  const addTodo = (item: string) => {
    const id = todos.length ? todos[todos.length - 1].id + 1 : 1;
    const newTodo: Todo = {
      id,
      value: item,
      checked: false,
    };
    setTodos([...todos, newTodo]);
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
  };

  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo: Todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const handleCheck = (id: number) => {
    const newTodos = todos.map((todo: Todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <div className="App">
      <Header />
      <AddNew handleNewTodo={addTodo} />
      <main className="todosList">
        {todos.length ? (
          <Content
            todos={todos}
            handleDeleteTodo={handleDelete}
            handleCheckTodo={handleCheck}
          />
        ) : (
          <p>Your todo list is empty...</p>
        )}
      </main>
      {/* <ul className="todos">
        <li className="item">
          <input type="checkbox" />
          <label>item1</label>
          <button>Delete</button>
        </li>
      </ul> */}
    </div>
  );
};

export default App;
