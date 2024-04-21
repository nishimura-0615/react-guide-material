import { useState } from "react";

const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const [ filterVal,setFilterVal ] = useState("");
  return (
    <>
      <h3>配列のフィルター</h3>
      <input type="text" value={filterVal} onChange={(e) => setFilterVal(e.target.value)}/>
      <ul>
        {/*.filterメソッドの処理は-1の場合は見つかりませんでした。と出力し、
        -1以外の場合は、条件式としてTRUEを返すようにしている  */}
        {animals.filter(animal => animal.indexOf(filterVal) !== -1)
          .map((animal) => (
          <li key={animal}>{animal}</li>
        ))}
      </ul>
    </>
  );
};

export default Example;
