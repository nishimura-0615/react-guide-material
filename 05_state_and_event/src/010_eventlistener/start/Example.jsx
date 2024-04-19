const Example = () => {
  const clickHandler = () => {
    alert('ボタンがクリックされました。')
  }
  const clickHandler2 = () => {
    alert('ボタンがクリックされました。')
  }
  return (
    <>
     {/* POINT イベントハンドラの末尾に()は付けない */}
     {/* POINT onClickのCは大文字 */}
      <button onClick={clickHandler }>クリックしてね</button>
      <button onClick={clickHandler2}>クリックしてね</button>
    </>
  );
};

export default Example;
