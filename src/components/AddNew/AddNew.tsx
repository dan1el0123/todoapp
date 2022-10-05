import React, { ChangeEvent, useState } from "react";
import "./AddNew.css";

interface Props {
  handleNewTodo(item: string): void;
}

const AddNew = ({ handleNewTodo }: Props) => {
  const [newItem, setNewItem] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewItem(event.target.value);
  };

  return (
    <form className="addNewForm">
      <label htmlFor="addItem">Add item</label>
      <input
        id="addItem"
        className="addInput"
        type="text"
        placeholder="Add new item"
        value={newItem}
        onChange={handleChange}
        autoFocus
        required
      />
      <button
        type="submit"
        className="addButton"
        onClick={(e) => {
          e.preventDefault();
          handleNewTodo(newItem);
          setNewItem("");
        }}
      >
        Add
      </button>
    </form>
  );
};

export default AddNew;
