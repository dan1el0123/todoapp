import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AddNew from "./components/AddNew/AddNew";
import { Todo } from "./interfaces";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (item: string) => {
    const id = todos.length ? todos[todos.length - 1].id + 1 : 1;
    const newTodo: Todo = {
      id,
      item,
    };
    setTodos([...todos, newTodo]);
  };
  console.log(todos);
  return (
    <div className="App">
      <Header />
      <AddNew handleNewTodo={addTodo} />
      <main className="todosList">
        {todos.length ? <ul></ul> : <p>Your todo list is empty...</p>}
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
