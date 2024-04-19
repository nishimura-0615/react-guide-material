import Profile from "./components/Profile";
import Container from "./components/Container";

const profile = [
  { name: "Takashi", age: 19, country: "Japan", color: "green" },
  { name: "Jane", age: 28, country: "UK", color: "red" },
];

const Example = () => {
  return (
    <div>
      <Container title="Childrenとは？" children={
        [
          <Profile key={profile[0].name} {...profile[0]} />,
          <Profile key={profile[0].name} {...profile[1]}/>
        ]
      } />
    </div>
  );
};
{/*<Profile/>で profileの配列のkeyを出力している */}
{/* <Profile {...profile[0]}/>で profileの配列を出力している */}

export default Example;
