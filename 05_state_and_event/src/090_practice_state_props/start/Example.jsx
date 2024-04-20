import { useState } from "react";

//　自分の回答
// const Example = () => {
//   const [ count, setCount ] = useState(0);
//   return (
//     <>
//       <h3>練習問題</h3>
//       <p>カウントの更新（CountUpdate）と表示（CountResult）を別のコンポーネントに分離してください。Exampleコンポーネント内で現在のカウントの値を管理するstateを一つ定義してこれまでのレクチャーで実装したようなカウンターを作成してください。</p>
//       { <CountResult title="カウント" />
//         <CountUpdate />}
//     </>
//   );
// };
// const CountResult = ({  }) => {
//   const CountUpdate = ({ title, count, setCount }) => {
//     const countUp = () => {
//       setCount((prevstate) => prevstate + 1);
//     };
//     const countDown = () => {
//       setCount(count - 1);
//     };
//     return (
//       <>
//         <h3>{title}: {count}</h3>
//         <button onClick={countUp}>+</button>
//         <button onClick={countDown}>-</button>
//       </>
//     );
//   };
// };

// export default Example;
//count={count} />
//<CountUpdate setCount={setCount}/>

// 回答との差異　
// 上記のcount={count} />　<CountUpdate setCount={setCount}/>を記入することで
// それぞれのコンポーネントに値を渡らせるという考えが必要だった。



const Example = () => {
    const [ count, setCount ] = useState(0);
    return (
      <>
        <CountResult title="カウント" count={count} />
        <CountUpdate setCount={setCount}/>
      </>
    );
  };

  const CountResult = ({ title, count }) => <h3>{title}: {count}</h3>
    const CountUpdate = ({ setCount }) => {
      const countUp = () => {
        setCount((prev => prev + 1));
      };
      const countDown = () => {
        setCount((prev => prev - 1));
      };
      return (
        <>
          <button onClick={countUp}>+</button>
          <button onClick={countDown}>-</button>
        </>
      );
    };

  export default Example;
