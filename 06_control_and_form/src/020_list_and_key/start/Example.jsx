
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  //for文も同じようにkeyプロパティを設定する必要がある為、key={animal}を記載する
  // POINT keyをつける際の注意点
  //キーには必ず一意の値を設定する
  // キーには設定した値は変更しない
  // 配列のインデックスはなるべく使わない
  const animalList = [];
  for (const animal of animals) {
    animalList.push(<li key={animal}></li>);
  }

  const helloAnimals = animals.map((animal) => {
    return <li>Hello {animal}</li>;
  });

  return (
    <>
      <ul>
        {/* <li>{animals[0]}</li>
        <li>{animals[1]}</li>
        <li>{animals[2]}</li> */}
        {/* {animalList}
        {helloAnimals} */}
        {animalList}
        {/*それぞれの要素に対してkeyプロパティを設定する必要がある為、key={animal}を記載する  */}
        {/* {animals.map((animal) => <li key={animal}>Hello, {animal}</li>)} */}
      </ul>
    </>
  );
};

export default Example;
