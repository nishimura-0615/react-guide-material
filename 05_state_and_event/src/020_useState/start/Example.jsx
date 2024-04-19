import { useState } from "react";

// POINT useStateは[ 値、変更用の関数 ]を返す
// POINT 配列の0番目に参照用の値が渡る
// POINT 配列の1番目に更新用の値が渡る
//let [val, setVal] = useState("hello");それぞれの値が0番目、1番目の要素の代わりになる

const Example = () => {
  let [val, setVal] = useState("hello");
  return (
    <>
      <input type="text" onChange={(e) => {
        // const setFn = valArry[1];
        setVal(e.target.value) }} /> = {val}
    </>
  );
};

export default Example;
