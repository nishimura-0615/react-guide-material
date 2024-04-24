// 練習問題
// Example内のコードをコンポーネントに分割してください。また、ステートはContext経由でやり取りしてください。
// POINT Contextの練習問題
import Input from "./conponents/Input";
import Select from "./conponents/Select";
import Result from "./conponents/Result";
import { CalcProvider } from "./context/CalcContext";

const Example = () => {
  return (
    <CalcProvider>
      <Input name="a"/>
      <Input name="b"/>
      <Select />
      <Result />
    </CalcProvider>
  );
};

export default Example;
