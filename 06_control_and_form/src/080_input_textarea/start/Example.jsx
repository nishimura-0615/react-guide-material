import { useState } from "react";

// POINT input要素、textarea要素の使い方
const Example = () => {

  const [val, setVal] = useState("");
  const clearVal = () => setVal("");

  return (
    <div>
      <label htmlFor="456">ラベル</label>
      <div>
        <input
          id="123"
          // placeholderは入力する前に何かしらの文字を設定する。
          placeholder="こんにちは"
          //value={val}をコメントアウトするとクリアボタンを押してもクリアされない。テキストフィールドも連動しない
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <textarea
          id="456"
          placeholder="こんにちは"
          value={val}//
          onChange={(e) => setVal(e.target.value)}
        />
      </div>
      <h3>{val}</h3>
      <button onClick={clearVal}>クリア</button>
    </div>
  );
};

export default Example;
