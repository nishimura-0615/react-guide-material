// const Example = () => {
//   return (
//     <>
//       <h3>練習問題</h3>
//       <p>Profileコンポーネントを使用して、完成コードと同じ画面を作成してください。</p>
//       <p>また、Profileコンポーネント内のリスト表示部分にkeyを設定して、ワーニング表示がされないようにしてください。</p>
//       <ul>
//         {hobby}
//       </ul>
//     </>
//   );
// };

// export default Example;

//回答コード
import Profile from "./components/Profile";

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
  return (
    <>
      <ul>
        {/* mapで各要素に特定の処理を行ったものを新しい配列とする */}
        {persons.map((person) => (
            /* リストにはkeyを設定することを忘れないように！ */
            <li key={person.name}>
            <Profile {...person} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Example;


// 回答との差異
// keyを定義しすいpersonsにして、{},[]で入れ子にしておく。
// import Profile from "./components/Profile";で親、子の関係でどう出力するか問題文を読む。
// Profileコンポーネントを使用して、完成コードと同じ画面を作成してください。
// Profileコンポーネントが親コンポーネントなので、子コンポーネントがExampleコンポーネントを理解して
// コードを記述する上で考えておく。
// また、Profileコンポーネント内のリスト表示部分にkeyを設定して、ワーニング表示がされないようにしてください。</p>
// keyの設定はわかっていたが画面出力がわかっていない
