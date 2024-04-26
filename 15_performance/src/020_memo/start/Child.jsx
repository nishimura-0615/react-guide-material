import { memo } from "react";

function areEqual(prevProps, nextProps) {
  if(prevProps.countB !== nextProps.countB) {
    return false; // 再レンダリング
  } else {
    return true; // 再レンダリング発生なし
  }
  /*
  nextProps を render に渡した結果が
  prevProps を render に渡した結果となるときに true を返し
  それ以外のときに false を返す
  */
}

// memoの関数で囲むことでCountBの状態（ステート)が更新されてもChildMemo関数が再レンダリングされない
const ChildMemo = memo(({ countB }) => {
  console.log("%cChild render", "color: red;");

  return (
    <div className="child"
    >
      <h2>子コンポーネント領域</h2>
      <span>ボタンBクリック回数：{countB}</span>
    </div>
  );
}, areEqual);

export default ChildMemo;
