import { useReducer,useState } from "react"
// useReducerはuseStateの書き換えに使用
const Example = () => {
  const [state, setState] = useState(0);
  const [rstate, dispatch] = useReducer((prev,action) => {
    // useReducerを用いるときはswitch文で記載するのが一般的
    switch (action) {
      case "+":
        return prev + step;
      case "-":
        return prev - step;
      default:
        throw new Error('不明なactionです。')
    }
  },0);
  //   if (action === '+') {
  //     return ++prev;
  //   } else if(action === '-') {
  //     return --prev;
  //   }
  // },0);
  const countUp = () => {
    setState(prev => ++prev);
  }

  const rcountUp = () => {
    dispatch({type: "+", step: 2 });
  }

  const rcountDown = () => {
    dispatch({type: "-", step: 3 });
  }

  return (
    <>
      <div>
        <h3>{state}</h3>
        <button onClick={countUp}>+</button>
      </div>
      <div>
        <h3>{rstate}</h3>
        <button onClick={rcountUp}>+</button>
        <button onClick={rcountDown}>-</button>
      </div>
    </>
  );
};

export default Example;
