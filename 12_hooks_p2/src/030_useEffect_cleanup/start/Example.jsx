// POINT useEffectのクリーンアップ処理

import { useEffect, useState } from "react";
const Example = () => {
  const [isDisp, setIsDisp] = useState(true);

  return (
    <>
      {isDisp && <Timer/>}
      <button onClick={() => setIsDisp(prev => !prev)}>トグル</button>
    </>
  )
}
const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    // console.log('init');
    let intervalId = null;
    // トグルボタンを押して画面上の機能が消えても裏で処理は走り続ける
    // 裏の走っている処理を止めるためにclearIntervalを使用
    intervalId = window.setInterval(() => {
      console.log('interval called');
      setTime(prev => prev + 1);
    }, 1000);
    //Unmountedして動作している裏の処理を終了する処理をクリーンアップと呼ぶ
    return () => {
      window.clearInterval(intervalId)
      // console.log('end');
    }
  }, [])

  useEffect(() => {
    // console.log('updated');

    document.title = 'counter:' + time;
    window.localStorage.setItem('time-key-end', time);

    return () => {
      // debugger
      // console.log('updated end');
    }
  }, [time]);

  return (
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
    );
};

export default Example;
