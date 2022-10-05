import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AddNew from "./components/AddNew/AddNew";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <AddNew />
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
