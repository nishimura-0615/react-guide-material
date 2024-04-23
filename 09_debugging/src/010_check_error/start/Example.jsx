import {useState} from"react"

const Example = () => {
  const [count, setCount] = useState({ val: 0 });

  console.log('re-render')
  const countUp = () => {

    setCount((prevstate) => {
      console.log('setcount.clicked')
      const newState = { val:prevstate.val + 1 };
      return prevstate;
    });
  };

  return (
    <>
      <p>現在のカウント数: {count.val}</p>
      <button onClick={countUp}>+</button>
    </>
  );
};

export default Example;


// Error: Objects are not valid as a React child (found: object with keys {val}). If you meant to render a collection of children, use an array instead.


//     at p
//     at Example (http://localhost:3001/src/010_check_error/start/Example.jsx?t=1713858812079:14:31)
//     at Suspense
//     at BaseErrorBoundary (http://localhost:3001/src/BaseErrorBoundary.jsx:46:9)
//     at DynamicLoader (http://localhost:3001/src/App.jsx?t=1713858812079:15:26)
//     at div
//     at div
//     at App (http://localhost:3001/src/App.jsx?t=1713858812079:43:16)
//15行目にプロパティが渡ってこないことによってvalの要素をどう渡らせればいいかわからないエラー<p>現在のカウント数: {count.val}</p>
// console.logで関数が通っているか確認
// {val:1}が渡ってきたことを確認
//再レンダリング出来たかどうか確認
// 画面は更新されていないので再レンダリングさせる必要が出てきた。
