// 回答
import { useState } from "react"
import List from "./List"
import Form from "./Form"

const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
      ediding: false,
    },
    {
      id: 2,
      content: "卵買う",
      ediding: false,
    },
    {
      id: 3,
      content: "郵便出す",
      ediding: false,
    },
  ];

  const [ todos, setTodos ] = useState(todosList);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  }

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  const updateTodo = (todo) => {
    const newTodos = todos.map(_todo => {
      return _todo.id === todo.id ? { ..._todo, ...todo } : { ..._todo };
    });
    setTodos(newTodos);
  }

  return (
    <>
      <List todos={todos} deleteTodo={deleteTodo} updateTodo={deleteTodo}/>
      <Form createTodo={createTodo}/>
    </>
  )
};
export default Todo;
