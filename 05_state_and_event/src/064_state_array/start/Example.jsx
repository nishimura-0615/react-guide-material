import { useState } from "react";

// POINT 配列のstateの扱い方
const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [nums, setNums] = useState(numArray)

  const shuffle = () => {
    // POINT newNums = [ ...nums ]と書く理由は参照するために代入が必要なため
    const newNums = [ ...nums ];
    const value = newNums.pop();
    newNums.unshift(value)
    setNums(newNums)
  }
  return (
    <>
      <h1>{nums}</h1>
      <button onClick={ shuffle }>shuffle</button>
    </>
  );
};

export default Example;
