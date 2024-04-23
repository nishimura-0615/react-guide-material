import { useRef,forwardRef } from "react";

// reactのバージョンによるがrefをpropで渡すのは非推奨となっている。
// refの記載を別のcustomrefと直す
// forwardRefを記載して、propの第二引数としてrefを使う

const Input = forwardRef(( props, ref ) => {
  return <input type="text" ref={(ref)}></input>
});

const Example = () => {
  const ref = useRef();
  return (
    <>
      <input type="text" customref={ref} />
      <button onClick={() => ref.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};

export default Example;
