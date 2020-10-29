import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import TodoService from "../Services/TodoService";
import Message from "./Message";
import TodoItem from "./TodoItem";

interface Props {
  
};

const Todos: React.FC<Props> = (props) => {
  const [todo, setTodo] = useState({name: ""});
  const [todos, setTodos] = useState<any>([]);
  const [message, setMessage] = useState<any>(null);  

  const authContext = useContext(AuthContext);

  useEffect(() => {
    TodoService.getTodos().then(data => {
      setTodos(data.todos);
    });
  }, []);

  const onSubmit = (e: any) => {
    e.preventDefault();
    TodoService.postTodo(todo).then(data => {
      const {message} = data;
      resetForm();
      if (!message.msgError) {
        TodoService.getTodos().then(data => {
          setTodos(data.todos);
          setMessage(message);
        })
      } else if (message.msgBody === "UnAuthorized") {
        setMessage(message);
        authContext.setUser({username: "", role: ""});
        authContext.setIsAuthenticated(false);
      } else {
        setMessage(message);
      }
    });
  };

  const onChange = (e: any) => {
    setTodo({name: e.target.value});
  }
  
  const resetForm = () => {
    setTodo({name: ""})
  }
  
  
  return (
    <div>
      <ul className="list-group">
        {todos.map((todo: any) => {
          return <TodoItem key={todo._id} todo={todo} />
        })}
      </ul>

      <form onSubmit={onSubmit}>
        <label htmlFor="todo">Enter todo</label>
        <input type="text" name="todo" value={todo.name} onChange={onChange} className="form-control" placeholder="Please enter todo" />

        <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
      </form>
      {message && <Message message={message} />}
    </div>
  );
};

export default Todos;
