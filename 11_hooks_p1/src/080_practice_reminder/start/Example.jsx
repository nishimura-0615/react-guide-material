// 練習問題
// Listコンポーネント内の各項目をItemコンポーネントに分離しましょう。
// タイトルをダブルクリックするとタイトルを変更出来るようにしましょう
// // ReducerとContextを使ってTodoをグローバルなステートにしましょう

// import Todo from "./components/Todo"

// const Example = () => {
//   return (
//     <>
//       <h2>Reminder</h2>
//       <Todo />
//     </>
//   );
// };

// export default Example;

// 回答

import Todo from "./components/Todo"

const Example = () => {
  return (
    <>
      <h2>Reminder</h2>
      <Todo />
    </>
  );
};

export default Example;
