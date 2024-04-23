import { useRef, forwardRef, useImperativeHandle } from "react";

/* POINT forwardRef
子コンポーネント内の DOM に直接アクセスしたいときに使います。
refは、親から子コンポーネントへprops形式で渡して参照するということができないため、
参照したい場合は子コンポーネント内でfowardRefを使用する必要があります。
*/
const Input = forwardRef((props, ref) => {

  const inputRef = useRef();
  //useImperativeHandleはあまり推奨されない。処理が追いにくくなるため。

  useImperativeHandle(ref, () => ({
    myfocus() {
      inputRef.current.focus();
      console.log('フォーカス取得')
    }
  }))

  return <input type="text" ref={ref} />;
});

const Example = () => {
  const ref = useRef();
  return (
    <>
      <Input ref={ref} />
      <button onClick={() => ref.current.myfocus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};

export default Example;
