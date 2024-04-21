
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  // 配列の表示方法

  // const animalList = [];
  // for(const animal of animals) {
  //   animalList.push(<li>{animal}</li>)
  // }

  //mapを使った表示方法　mapの場合は式になるのでJSX内で記載できる
  const helloAnimals = animals.map((animal) =><li>Hello, {animal}</li>)
  return (
    <>
      <h3>配列の操作</h3>

      <ul>
        {/* for文をulタグ内に記載するとエラーしてしまう。
        あくまでJSXないは式を書くと画面出力されるため、文を書くとエラーしてしまう */}
        {/* for(const animal of animals) {
        animalList.push(<li>{animal}</li>)
        } */}
        {/* <li>{animals[0]}</li>
        <li>{animals[1]}</li>
        <li>{animals[2]}</li> */}
        {/* {animalList} */}
        {/* { helloAnimals } */}
        {animals.map((animal) => <li>Hello, {animal}</li>)}
      </ul>
    </>
  );
};

export default Example;
