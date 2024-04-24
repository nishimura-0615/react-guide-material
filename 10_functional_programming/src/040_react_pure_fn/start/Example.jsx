//関数外で変数を定義するとバグが特定できないので非推奨
//関数を定義した上で関数内で変数を定義して処理してあげるのが定石
let value = 0;

const Child = () =>{
  value++;
  return <div>{value}</div>
}

const ChildPure = ({value}) =>{
  return <div>{value}</div>
}


const Example = () => {
  let value = 0;

  return (
    <>
      <Child />
      <Child />
      <Child />
      <ChildPure value={++vallue} />
    </>
  );
};

export default Example;
