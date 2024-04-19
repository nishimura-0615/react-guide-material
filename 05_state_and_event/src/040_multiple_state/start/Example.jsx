import { useState } from "react"

// POINT useStateはif文などで囲まないで定義する
// POINT useStateは一つずつ順番に処理をしているので関数独自で処理をするのでループ文の中に入れるとエラーする。
// POINT stateが呼ばれる順番は常に一定
const Example = () => {
  const [ countA, setCountA ] = useState(0)
  const [ countB, setCountB ] = useState(10)
  const [ countC, setCountC ] = useState(100)
  return (
    <>
      <p>ボタンAを{countA}回押しました!</p>
      <button onClick={() => {
        setCountA(countA + 1);
      }}>ボタンA</button>
      <p>ボタンBを{countB}回押しました!</p>
      <button onClick={() => {
        setCountB(countB + 1);
      }}>Bボタン</button>
       <p>ボタンCを{countC}回押しました!</p>
      <button onClick={() => {
        setCountC(countC + 1);
      }}>Cボタン</button>
    </>

  )

};

export default Example;
