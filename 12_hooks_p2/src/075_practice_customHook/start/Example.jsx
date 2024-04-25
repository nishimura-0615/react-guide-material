// 練習問題
// 記述を変更し、完成コードと同じ状態になるようにしてください。
// startフォルダの中にhooks.jsというファイルを作成しその中でuseCountというカスタムフックを作成してください。

import { useCount } from './hooks';

// POINT カスタムフックの練習
const Example = () => {
  const { count, countUp } = useCount();
  return (
    <>
      <div>Counts: {count}</div>
      <button onClick={countUp}>Count Up!</button>
    </>
  );
};

export default Example;
