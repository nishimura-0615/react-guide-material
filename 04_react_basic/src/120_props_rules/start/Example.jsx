// POINT propsの流れは一方通行
// POINT propsは読み取り専用

import Bye from "./components/Bye"
import Hello from "./components/Hello"

const Example = (props) => {
  console.log(props.name);
  // POINT propsの流れは一方通行
  const name ='Tom';
  return (
    <>
      <Hello name={name}/>
      <Bye name={name} />
    </>
  );
};

export default Example;
