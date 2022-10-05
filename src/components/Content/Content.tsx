import { Todo } from "../../interfaces";
import "./Content.css";

interface Props {
  todos: Todo[];
}

const Content = ({ todos }: Props) => {
  return (
    <ul className="todos">
      {todos.map((item: Todo) => {
        return (
          <li className="item" key={item.id}>
            <input type="checkbox" /* checked={item.checked}  */ />
            <label>{item.value}</label>
            <button>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Content;
