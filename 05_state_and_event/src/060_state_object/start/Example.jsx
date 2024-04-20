import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj);
  //オブジェクトの値を変更する場合は新しいオブジェクトを生成し、その中のプロパティを設定する
  //そのために({})を使って配列（オブジェクト)として定義している
  const changeName = (e) => {
    person.name = '';
    console.log({ ...person, name:e.target.value });
    //setPerson({ name: person.name, age:e.target.value })
    //setPerson　スプレッド演算子で書き換える際はどのオブジェクトでどのプロパティか明示する。
    setPerson({ ...person, name:e.target.value })
  }

  const changeAge = (e) =>{
    setPerson({ name: person.name, age:e.target.value })
  }
  //resetボタンの処理
  const reset = () => {
    setPerson({ name: "", age: "" })
  }

  //inputタグにはそれぞれ必要な情報をname,ageを指定している
  //resetボタンの実装
  return (<>
    <h3>Name:{person.name}</h3>
    <h3>Age:{person.age}</h3>
    <input type="text" value={person.name} onChange={changeName} />
    <input type="number" value={person.age} onChange={changeAge} />
    <div><button onClick={reset}>リセット</button></div>
  </>);
};

export default Example;
