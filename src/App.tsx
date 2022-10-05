import React from "react";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App__header">
        <h1 className="App__title">ToDo App</h1>
      </header>
      <div className="inputContainer">
        <form className="inputContainer__form">
          <input type="text" placeholder="Enter a task" />
        </form>
        <button type="submit">Add</button>
      </div>
      <ul className="todos">
        <li className="item">
          <input type="checkbox" />
          <label>item1</label>
          <button>Delete</button>
        </li>
      </ul>
    </div>
  );
};

export default App;
