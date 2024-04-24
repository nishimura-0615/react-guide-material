// Listコンポーネント内の各項目をItemコンポーネントに分離しましょう。

// 回答
const Item = () => {
  const [editingContent, setEditingContent] = useState(todo.content)

  const changeContent = (e) => setEditingContent(e.target.value);

  const toggleEditMode = () => {
    const newTodo = {...todo, editing: !todo.editing,  content: editingContent};
    updateTodo(newTodo);
  };

  const confirmContent = (e) => {
    e.preventDefault();
    const newTodo = {...todo, editing: !todo.editing,  content: editingContent};
  }

  return (
  <div key={todo.id}>
    <button onClick={() => complete(todo.id)}>完了</button>
    <form onSubmit={confirmContent} style={{ display:'inline' }}>
      {todo.editing ? (
      <input type="text" value={editingContent} onChange={changeContent}/>) :
       (<span>{todo.content}</span>)
      }
      <span>{todo.content}</span>
    </form>
  </div>
  );
}

export default Item;
