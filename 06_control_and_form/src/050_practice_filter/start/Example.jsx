import Profile from "./components/Profile";
import { useState } from "react";

const persons = [
  {
    name: "Geo",
    age: 18,
    hobbies: ["sports", "music"],
  },
  {
    name: "Tom",
    age: 25,
    hobbies: ["movie", "music"],
  },
  {
    name: "Lisa",
    age: 21,
    hobbies: ["sports", "travel", "game"],
  },
];

const Example = () => {
  const [ filterVal,setFilterVal ] = useState("");
  //filterを設定
  const filteredPersons = persons.filter(person => person.name.includes(filterVal));

  return (
    <>
      <h3>練習問題</h3>
      <p>入力欄を設置して、入力値と名前が一致したもののみ表示する仕組みを作成してください。</p>
      <ul>
        <input type="text" value={filterVal} onChange={(e) => setFilterVal(e.target.value)}/>
        { filteredPersons.map((person) => (
          <li key={person.name}>
            <Profile {...person} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Example;



//回答コード
// import Profile from "./components/Profile";
// import { useState } from "react";

// const persons = [
//   {
//     name: "Geo",
//     age: 18,
//     hobbies: ["sports", "music"],
//   },
//   {
//     name: "Tom",
//     age: 25,
//     hobbies: ["movie", "music"],
//   },
//   {
//     name: "Lisa",
//     age: 21,
//     hobbies: ["sports", "travel", "game"],
//   },
// ];

// const Example = () => {
//   const [filterVal, setFilterVal] = useState("");
//   return (
//     <>
//       <input type="text" value={filterVal} onChange={(e) => setFilterVal(e.target.value)} />
//       <ul>
//         {persons
//         // filterを追加
//         .filter(person => {
//           const isMatch = person.name.indexOf(filterVal) !== -1;
//           return isMatch
//         })
//         .map((person) => (
//           <li key={person.name}>
//             <Profile {...person} />
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default Example;

// 回答との差異・所感
//ほとんどないが現場の判断にもよるが使ったことのある記述をするのが適切。可読性を見て判断する。
// indexOfを使うときはnameとちゃんと指定する。name.indexOf(filterVal)
