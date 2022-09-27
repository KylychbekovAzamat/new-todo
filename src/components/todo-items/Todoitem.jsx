import css from "./Todoitem.module.css";
import { useState } from "react";

const TodoItem = (props) => {
  const [isInputShow, setInputShow] = useState(false);
  const onDelete = () => {
    props.handleDelete(props.id);
  };

  const onEdit = () => {
    setInputShow(!isInputShow);
  };

  return (
    <div className={css.wrapper}>
      {isInputShow ? (
        <form>
          <input value={props.text} type="text" placeholder="todo" />
          <button>Save</button>
        </form>
      ) : (
        <label>
          <input
            onChange={() => props.handleStatus(props.id)}
            type="checkbox"
            checked={props.boolean}
          />
          <span className={props.boolean === true ? css.text : ""}>
            {props.text}
          </span>
        </label>
      )}

      <div>
        <button onClick={onEdit} className={css.green}>
          Edit
        </button>
        <button onClick={onDelete} className={css.red}>
          Del
        </button>
      </div>
    </div>
  );
};

export default TodoItem;