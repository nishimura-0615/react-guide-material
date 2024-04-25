// 練習問題
// 記述を変更し、完成コードのように、checkedがtrueの場合のみalertで
// 「checked!」と表示されるようにしてください。useEffectを用いて実装してください。
import { useState,useEffect } from 'react';

const Example = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    checked && window.alert("checked!")
  }, [checked]);

  return (
    <>
      <label>
        <input type={'checkbox'} value={checked} onClick={() => setChecked((checked) => !checked)} />
        click me
      </label>
    </>
  );
};

export default Example;
