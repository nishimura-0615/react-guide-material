// POINT useEffectの依存配列

import { useEffect, useState } from "react";

const Example = () => {
  const [time, setTime] = useState(0);
  //[])の中に値を入れると再度コールバック関数(useEffect)が実行される
  useEffect(() => {
    console.log('useEffect is called');
    window.setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
  }, [])

  useEffect(() => {
    document.title = 'counter:' + time;
    window.localStorage.setItem('time-key-end', time)
    // POINT useEffect注意点：依存値はuseEffect内で更新しない
    // setTime(prev => prev + 1);
  }, [time]);

  return (
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
    );
};

export default Example;
