import { useState } from "react";

const Example = () => {
  const [ toggle, setToggle ] = useState(true);
  const toggleComponent = () => {
    setToggle( prev => !prev)
  }
  return (
    <div>
      <button onClick={toggleComponent}>toggle</button>
      {/* コンポーネントのツリー構造が変わったため、<div><Count title="B"/></div> を記載すると
      A,Bそれぞれでcountの数が制御される処理となる */}
      {/* { toggle ? <Count title="A"/> : <div><Count title="B"/></div> } */}
      {/* 下記はBの値だけが初期化される処理となる　
      コンポーネントAは存在し続けるがBに変更するときに再度オブジェクトとして生成されるため */}
      <Count title="A" />
      { toggle && <Count title="B"/> }
    </div>
  )
}
const Count = ({title}) => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>{title}: {count}</h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
