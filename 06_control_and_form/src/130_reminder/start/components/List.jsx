const List = ({todos,deleteTodo}) => {
  const complete = (id) => {
    deleteTodo(id)
  }
    return (
      <div>
      {/* todoとしてそれぞれのid,contentをmapで処理して、情報として取得し、完了ボタンで削除している */}
        {todos.map(todo => {
          return (
            <div key={todo.id}>
              <button onClick={() => complete(todo.id)}>完了</button>
              <span>{todo.content}</span>
            </div>
          )
        })}
      </div>
    );
}

export default List;
