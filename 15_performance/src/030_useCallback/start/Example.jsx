// POINT useCallbackで再レンダリングを抑止
import React, { useCallback, useState } from "react";
import Child from "./Child";
import "./Example.css";

const Example = () => {
  console.log("Parent render");

  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  //useCallbackの第二引数には空の配列を渡す
  const clickHandler = useCallback(() => {
    setCountB((pre) => pre + 1);
  }, [])


  return (
    <div className="parent">
      <div>
        <h3>親コンポーネント領域</h3>
        <div>
          <button
            onClick={() => {
              setCountA((pre) => pre + 1);
            }}
          >
            ボタンA
          </button>
          <span>親のstateを更新</span>
        </div>
      </div>
      <div>
        <p>ボタンAクリック回数：{countA}</p>
      </div>
      <Child countB={countB} onClick={clickHandler} />
    </div>
  );
};

export default Example;
