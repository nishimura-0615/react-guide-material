// Listコンポーネント内の各項目をItemコンポーネントに分離しましょう。

// const List = ({todos, deleteTodo}) => {
//     const complete = (id) => {
//         deleteTodo(id)
//     }
//     return (
//         <div>
//             {todos.map(todo => {
//                 return (
//                     <div key={todo.id}>
//                         <button onClick={() => complete(todo.id)}>完了</button>
//                         <span>{todo.content}</span>
//                     </div>
//                 )
//             })}
//         </div>
//     );
// }

// export default List;

//回答

import { useTodos } from "../context/TodoContext";
import Item from "./Item";

const List = () => {
  const todos = useTodos();
  return (
    <div>
      {todos.map((todo) => (
        <Item todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default List;
