import React from "react";
import "./AddNew.css";

const AddNew: React.FC = () => {
  return (
    <form className="addNewForm">
      <label htmlFor="addItem">Add item</label>
      <input
        id="addItem"
        className="addInput"
        type="text"
        placeholder="Add new item"
        autoFocus
        required
      />
      <button type="submit" className="addButton">
        Add
      </button>
    </form>
  );
};

export default AddNew;
