import { useState } from "react";

// POINT stateとレンダリングの仕組み
// なぜ、{displayVal } ではなく{val}にする必要があるのか。
// レンダリングの仕組みとして再実行する際に{displayVal } だとuseStateの更新が反映されないため。
// ={val}だと処理が走るが{displayVal }だと処理は途中のdisplayVal = e.target.value;までとなる。
const Example = () => {
  let displayVal;
  let [ val, setVal ] = useState();
  console.log('再レンダリングされました');
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          setVal(e.target.value);
          displayVal = e.target.value;
        }}
      />
      = {val}
    </>
  );
};

export default Example;
