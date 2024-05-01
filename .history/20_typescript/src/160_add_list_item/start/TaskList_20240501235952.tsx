// 型情報のみのインポートには import type 型 という書き方をすることもできる（import type { Todo } from "./Example"）
import { Todo } from "./Example";

type TaskListProps = {
  todos: Todo[];
};

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setInputText(e.target.value);
};

const handleClick = () => {
  setTodos([...todos, { id: todos.length + 1, text: inputText }]);
  setInputText("");
};

export const TaskList: React.FC<TaskListProps> = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => {
        return <li key={todo.id}>{todo.text}</li>;
      })}
    </ul>
  );
};
