import { Todo } from "../../interfaces";
import "./Content.css";

interface Props {
  todos: Todo[];
  handleDeleteTodo(id: number): void;
  handleCheckTodo(id: number): void;
}

const Content = ({ todos, handleDeleteTodo, handleCheckTodo }: Props) => {
  return (
    <ul className="todos">
      {todos.map((item: Todo) => {
        return (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              onChange={() => handleCheckTodo(item.id)}
              checked={item.checked}
            />
            <label>{item.value}</label>
            <button onClick={() => handleDeleteTodo(item.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Content;
