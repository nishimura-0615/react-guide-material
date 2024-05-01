import Hello, { Btn } from "./Hello";

const Example: React.FC () => {
  // 練習用
  return(
    <>
    <Btn fn={(text) => console.log(`Hello ${text}`)} />
    </>
};

export default Example;
