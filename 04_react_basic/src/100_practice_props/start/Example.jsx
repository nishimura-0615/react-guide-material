import Profile from "./components/Profile";

const profile = [
  { name: "Takashi", age: 19, country: "Japan" },
  { name: "Jane", age: 28, country: "UK" },
];

const Example = () => {
  return (
    <div>
      <Profile
        name={profile[0].name}
        age={profile[0].age}
        country={profile[0].country}
      />
      <Profile {...profile[1]} />
      <Profile />
    </div>
  );
};

export default Example;

//回答との差異　const profileにJohn Doeの記載は不要だった。
//自分の回答
//04_react_basic/src/100_practice_props/start/Example.jsx
//const profile = [
//   { name: "Takashi", age: 19, country: "Japan" },
//   { name: "Jane", age: 28, country: "UK" },
//   { name: "John Doe", age: "??", country: "Japan" },
//
// ];
// const Example = () => {
//   return (
//     <div>
//       <Profile
//         name={profile[0].name}
//         age={profile[0].age}
//         country={profile[0].country}
//       />
//       <Profile {...profile[1]} />
//       <Profile />
//     </div>
//   );
// };
