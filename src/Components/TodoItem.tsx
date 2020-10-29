import React from "react";

interface Props {
  todo: {
    name: string;
  }
};

const TodoItem: React.FC<Props> = (props) => {
  return (
    <li>
      {props.todo.name}
    </li>
  );
};

export default TodoItem;
