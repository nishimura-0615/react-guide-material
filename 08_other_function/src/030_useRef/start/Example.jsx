// DOMのメソッドを使えるようにするためにuseRefをimportに定義
import { useState,useRef } from "react";

const Case1 = () => {
  const [value, setValue] = useState("");
  // currentプロパティがinputRefには入っている。
  // currentプロパティに値を保持するのがuseRefといったrefオブジェクト

  const inputRef = useRef()

  console.log(inputRef);

  return (
    <div>
      <h3>ユースケース1</h3>
      <input type="text" ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => inputRef.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </div>
  );
};

const Case2 = () => {

  const [ playing, setplaying ] = useState(false);
  const videoRef = useRef();

  return(
    <div>
      <h3>ユースケース2</h3>
      <video style={{ maxWidth: "100%" }} ref={videoRef}>
        <source src="./sample.mp4"></source>
      </video>
      <button onClick={() => {
        if(playing) {
          //DOMのメソッド(pause,play)を使って動画の再生・停止の条件分岐
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        setplaying(prev =>!prev)
      }}>
      {/* 再生中ならストップ再生中なら再生の三項演算子 */}
        { playing ? 'Stop' : 'Play' }
      </button>
    </div>
  )
}

const Example = () => {
  return (
    <>
      <Case1 />
      <Case2 />
    </>
  );
};

export default Example;
